-- Almalead academic platform schema for Supabase.
-- Run this file in Supabase SQL Editor after creating the project.

create extension if not exists "pgcrypto";

create type public.app_role as enum ('student', 'mentor', 'admin');
create type public.progress_status as enum ('locked', 'available', 'submitted', 'approved', 'rejected');
create type public.practice_status as enum ('pending', 'in_review', 'completed', 'rejected');
create type public.material_type as enum ('guide', 'pdf', 'video', 'link', 'worksheet');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null unique,
  role public.app_role not null default 'student',
  avatar_initials text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.cohorts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  starts_on date,
  schedule text,
  modality text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.modules (
  id uuid primary key default gen_random_uuid(),
  module_number integer not null unique check (module_number > 0),
  title text not null,
  description text not null,
  evaluation_prompt text not null,
  category text not null,
  estimated_hours numeric(4, 1) not null default 1,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.enrollments (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid not null references public.cohorts(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  mentor_id uuid references public.profiles(id) on delete set null,
  enrolled_at timestamptz not null default now(),
  certification_status text not null default 'En curso',
  unique (cohort_id, student_id)
);

create table public.module_progress (
  id uuid primary key default gen_random_uuid(),
  enrollment_id uuid not null references public.enrollments(id) on delete cascade,
  module_id uuid not null references public.modules(id) on delete cascade,
  status public.progress_status not null default 'locked',
  submitted_at timestamptz,
  reviewed_at timestamptz,
  reviewed_by uuid references public.profiles(id) on delete set null,
  admin_feedback text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (enrollment_id, module_id)
);

create table public.evaluation_submissions (
  id uuid primary key default gen_random_uuid(),
  module_progress_id uuid not null references public.module_progress(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  answer_text text,
  attachment_url text,
  submitted_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewed_by uuid references public.profiles(id) on delete set null,
  status public.progress_status not null default 'submitted',
  feedback text
);

create table public.practices (
  id uuid primary key default gen_random_uuid(),
  enrollment_id uuid not null references public.enrollments(id) on delete cascade,
  title text not null,
  practice_date date,
  status public.practice_status not null default 'pending',
  evidence_url text,
  observation text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.reflections (
  id uuid primary key default gen_random_uuid(),
  enrollment_id uuid not null references public.enrollments(id) on delete cascade,
  week_number integer check (week_number > 0),
  content text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.materials (
  id uuid primary key default gen_random_uuid(),
  module_id uuid references public.modules(id) on delete set null,
  title text not null,
  description text,
  material_type public.material_type not null default 'guide',
  url text,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

create trigger module_progress_updated_at
before update on public.module_progress
for each row execute function public.set_updated_at();

create trigger practices_updated_at
before update on public.practices
for each row execute function public.set_updated_at();

create trigger reflections_updated_at
before update on public.reflections
for each row execute function public.set_updated_at();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
  );
$$;

create or replace function public.is_academic_staff()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role in ('admin', 'mentor')
  );
$$;

alter table public.profiles enable row level security;
alter table public.cohorts enable row level security;
alter table public.modules enable row level security;
alter table public.enrollments enable row level security;
alter table public.module_progress enable row level security;
alter table public.evaluation_submissions enable row level security;
alter table public.practices enable row level security;
alter table public.reflections enable row level security;
alter table public.materials enable row level security;

create policy "Profiles can read themselves"
on public.profiles for select
using (id = auth.uid() or public.is_academic_staff());

create policy "Admins manage profiles"
on public.profiles for all
using (public.is_admin())
with check (public.is_admin());

create policy "Everyone signed in can read active cohorts"
on public.cohorts for select
to authenticated
using (active = true or public.is_academic_staff());

create policy "Admins manage cohorts"
on public.cohorts for all
using (public.is_admin())
with check (public.is_admin());

create policy "Signed in users can read published modules"
on public.modules for select
to authenticated
using (published = true or public.is_academic_staff());

create policy "Admins manage modules"
on public.modules for all
using (public.is_admin())
with check (public.is_admin());

create policy "Students read their enrollments"
on public.enrollments for select
using (student_id = auth.uid() or mentor_id = auth.uid() or public.is_academic_staff());

create policy "Admins manage enrollments"
on public.enrollments for all
using (public.is_admin())
with check (public.is_admin());

create policy "Students read their progress"
on public.module_progress for select
using (
  public.is_academic_staff()
  or exists (
    select 1
    from public.enrollments e
    where e.id = enrollment_id
      and e.student_id = auth.uid()
  )
);

create policy "Students submit available modules"
on public.module_progress for update
using (
  exists (
    select 1
    from public.enrollments e
    where e.id = enrollment_id
      and e.student_id = auth.uid()
  )
)
with check (status in ('available', 'submitted'));

create policy "Academic staff manage progress"
on public.module_progress for all
using (public.is_academic_staff())
with check (public.is_academic_staff());

create policy "Students manage their submissions"
on public.evaluation_submissions for insert
with check (student_id = auth.uid());

create policy "Students read their submissions"
on public.evaluation_submissions for select
using (student_id = auth.uid() or public.is_academic_staff());

create policy "Academic staff review submissions"
on public.evaluation_submissions for update
using (public.is_academic_staff())
with check (public.is_academic_staff());

create policy "Students read their practices"
on public.practices for select
using (
  public.is_academic_staff()
  or exists (
    select 1
    from public.enrollments e
    where e.id = enrollment_id
      and e.student_id = auth.uid()
  )
);

create policy "Students create their practices"
on public.practices for insert
with check (
  exists (
    select 1
    from public.enrollments e
    where e.id = enrollment_id
      and e.student_id = auth.uid()
  )
);

create policy "Academic staff manage practices"
on public.practices for all
using (public.is_academic_staff())
with check (public.is_academic_staff());

create policy "Students manage their reflections"
on public.reflections for all
using (
  exists (
    select 1
    from public.enrollments e
    where e.id = enrollment_id
      and e.student_id = auth.uid()
  )
  or public.is_academic_staff()
)
with check (
  exists (
    select 1
    from public.enrollments e
    where e.id = enrollment_id
      and e.student_id = auth.uid()
  )
  or public.is_academic_staff()
);

create policy "Signed in users can read published materials"
on public.materials for select
to authenticated
using (published = true or public.is_academic_staff());

create policy "Academic staff manage materials"
on public.materials for all
using (public.is_academic_staff())
with check (public.is_academic_staff());

insert into public.modules (module_number, title, description, evaluation_prompt, category, estimated_hours)
values
  (1, 'Fundamentos ontológicos y el observador', 'Lenguaje, emociones y cuerpo como base del observador ontológico.', 'Mapa personal del observador: lenguaje, emoción y cuerpo.', 'O-L-E-C', 1),
  (2, 'Lenguaje que crea realidad', 'Actos lingüísticos, declaraciones, pedidos, ofertas, promesas y juicios fundados.', 'Análisis de actos lingüísticos en una conversación real.', 'Ontología', 1),
  (3, 'Emoción y cuerpo', 'Apertura al aprendizaje, estados emocionales y corporalidad que habilita acción.', 'Bitácora de estados emocionales y práctica corporal aplicada.', 'Emocional', 1),
  (4, 'Diseño de futuro y coordinación de acciones', 'Acciones sostenibles, compromisos, promesas cumplidas e indicadores simples.', 'Diseño de futuro con promesas, pedidos y acciones medibles.', 'Acción', 1),
  (5, 'Escucha profunda y feedback que transforma', 'Conversaciones poderosas, retroalimentación y cuidado del vínculo.', 'Registro de feedback y escucha profunda en role play.', 'Conversación', 1),
  (6, 'PNL ética al servicio del proceso', 'Anclajes y reencuadres usados con responsabilidad dentro del acompañamiento.', 'Caso breve con reencuadre o anclaje usado éticamente.', 'Herramientas', 1),
  (7, 'Coaching emocional aplicado', 'Ansiedad, estrés, límites y gestión emocional dentro del marco del coaching.', 'Plan de acompañamiento emocional con límites y derivación responsable.', 'Aplicación', 1),
  (8, 'Coaching educativo', 'Hábitos, aprendizaje, evaluación y acompañamiento de procesos formativos.', 'Diseño de hábito o ruta de aprendizaje con indicadores.', 'Educativo', 1),
  (9, 'Ética profesional y consentimiento informado', 'Límites del coaching, consentimiento informado y derivación responsable.', 'Entrega de consentimiento informado y análisis de límites.', 'Ética', 1),
  (10, 'Práctica supervisada I', 'Casos guiados, role plays, grabaciones y retroalimentación supervisada.', 'Grabación de caso guiado con autoevaluación y feedback.', 'Supervisión', 1),
  (11, 'Práctica supervisada II', 'Casos del participante, evidencias y feedback con métricas de progreso.', 'Caso real del participante con evidencias y métricas.', 'Supervisión', 1),
  (12, 'Integración, evaluación y certificación', 'Evaluación final, carpeta de entregables y cierre del proceso de certificación.', 'Carpeta final de evidencias y evaluación integradora.', 'Cierre', 1)
on conflict (module_number) do update
set
  title = excluded.title,
  description = excluded.description,
  evaluation_prompt = excluded.evaluation_prompt,
  category = excluded.category,
  estimated_hours = excluded.estimated_hours;

insert into public.materials (title, description, material_type, url)
values
  ('Marco O-L-E-C', 'Observador, lenguaje, emoción y cuerpo como eje metodológico.', 'guide', null),
  ('Práctica supervisada', 'Role plays, grabaciones, feedback y casos reales de la cohorte.', 'worksheet', null),
  ('Métricas de progreso', 'Conversaciones poderosas semanales, promesas cumplidas y acciones diarias de 5 minutos.', 'guide', null),
  ('Marco ético', 'Límites del coaching, consentimiento informado y derivación responsable.', 'pdf', null);
