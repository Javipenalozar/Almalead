# Almalead Plataforma Académica

Plataforma web inicial para alojar la estructura académica de Almalead, el avance del estudiante, materiales, prácticas, bitácora y estado de certificación.

## Vista actual

- Panel del estudiante con progreso integral.
- Ruta académica por módulos y horas.
- Biblioteca de materiales.
- Bitácora reflexiva con guardado local.
- Registro de prácticas y entregables.
- Checklist de certificación.
- Vista base para dirección académica.
- Preinscripcion de estudiantes por documento y correo.
- Invitacion de profesores, coaches y administradores.

## Probar localmente

```bash
python3 -m http.server 4173
```

Luego abre:

```text
http://127.0.0.1:4173/
```

## Deploy Sugerido En Netlify

1. Sube este proyecto al repositorio de GitHub.
2. En Netlify, crea un nuevo site desde ese repositorio.
3. En la configuración de build usa:

```text
Build command: sin comando
Publish directory: .
```

4. En `Domain management`, agrega el dominio:

```text
almalead.javipenalozar.com
```

5. Como el subdominio ya está en Netlify, valida que el DNS apunte al dominio asignado por Netlify:

```text
almalead -> TU_SITE.netlify.app
```

Netlify también puede generar automáticamente el certificado SSL cuando el DNS ya resuelve correctamente.

## Control de deploys en Netlify

La cuenta tiene un límite mensual de deploys, así que este proyecto usa una puerta manual para evitar despliegues automáticos innecesarios.

Netlify revisa `scripts/netlify-ignore.js` antes de construir. Por defecto, cualquier commit normal se omite para proteger la cuota. Para publicar en producción, el mensaje del commit debe incluir una de estas marcas:

```text
[deploy]
[production]
[publicar]
```

Ejemplo para publicar todos los cambios acumulados sin modificar archivos:

```bash
git commit --allow-empty -m "Publicar Almalead [deploy]"
git push
```

También se puede forzar desde Netlify agregando temporalmente la variable:

```text
NETLIFY_FORCE_DEPLOY=true
```

Recomendación operativa: trabajar y revisar localmente; acumular varios cambios; publicar solo cuando una versión esté aprobada.

## Siguiente fase recomendada

Para pasar de prototipo a plataforma real:

- Autenticacion de estudiantes, mentores y administradores.
- Base de datos para cohortes, módulos, entregables y progreso.
- Carga privada de materiales PDF, video y documentos.
- Rúbricas, evaluaciones y aprobación de certificación.
- Panel administrativo para seguimiento por estudiante.

## Supabase

El esquema inicial esta en:

```text
supabase/schema.sql
```

Incluye tablas para perfiles, roles, cohortes, inscripciones, módulos, progreso por estudiante, evaluaciones, prácticas, bitácora y materiales. También deja activadas políticas RLS para separar permisos de estudiante, mentor y admin.

Flujo recomendado:

1. Crear el proyecto en Supabase.
2. Abrir `SQL Editor`.
3. Pegar y ejecutar el contenido de `supabase/schema.sql`.
4. Crear usuarios desde `Authentication`.
5. Insertar o actualizar el perfil de cada usuario en `profiles` con rol `student`, `mentor`, `coach`, `professor` o `admin`.
6. Guardar en Netlify las variables publicas del frontend:

```text
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
```

La siguiente etapa de codigo es reemplazar el login demo y el `localStorage` por Supabase Auth y consultas reales a estas tablas.

### Calendario de cohorte

La cohorte inicia el 21 de abril de 2026. Las clases son todos los martes a las 7:00 p. m. El módulo 1 se dicta el 28 de abril de 2026.

Cada módulo queda habilitado para el estudiante el miércoles siguiente a la clase, a las 00:00 h de Colombia.

| Módulo | Clase | Activación |
| --- | --- | --- |
| 1 | 28 de abril de 2026 | 29 de abril de 2026, 00:00 h |
| 2 | 5 de mayo de 2026 | 6 de mayo de 2026, 00:00 h |
| 3 | 12 de mayo de 2026 | 13 de mayo de 2026, 00:00 h |
| 4 | 19 de mayo de 2026 | 20 de mayo de 2026, 00:00 h |
| 5 | 26 de mayo de 2026 | 27 de mayo de 2026, 00:00 h |
| 6 | 2 de junio de 2026 | 3 de junio de 2026, 00:00 h |
| 7 | 9 de junio de 2026 | 10 de junio de 2026, 00:00 h |
| 8 | 16 de junio de 2026 | 17 de junio de 2026, 00:00 h |
| 9 | 23 de junio de 2026 | 24 de junio de 2026, 00:00 h |
| 10 | 30 de junio de 2026 | 1 de julio de 2026, 00:00 h |
| 11 | 7 de julio de 2026 | 8 de julio de 2026, 00:00 h |
| 12 | 14 de julio de 2026 | 15 de julio de 2026, 00:00 h |

### Registro de estudiantes

Flujo recomendado:

1. Dirección académica precarga estudiantes en `pre_enrollments` con documento, correo, nombre y cohorte.
2. El estudiante entra por `Crear acceso`.
3. Ingresa documento y correo registrado.
4. La app valida contra `validate_pre_enrollment`.
5. Si coincide, crea usuario en Supabase Auth con correo y contraseña.
6. Se crea/actualiza `profiles`, `enrollments` y el registro de `module_progress`.

El documento no debe usarse como usuario permanente. Solo sirve para validar el primer ingreso.

### Registro de profesores y coaches

Flujo recomendado:

1. Dirección académica crea o invita al miembro del equipo desde el panel admin.
2. Se registra nombre, correo, rol y asignación académica.
3. En producción, Supabase Auth envía la invitación segura al correo.
4. Al aceptar, el perfil queda en `profiles` con rol `coach`, `professor`, `mentor` o `admin`.
5. El admin puede asignarle estudiantes, módulos, evaluaciones o sesiones de acompañamiento.

Los profesores y coaches no deben tener registro público. Su acceso nace desde una invitación interna de la academia.

### Evidencias y examenes

El esquema incluye:

- `exams`: evaluaciones creadas por dirección académica.
- `evaluation_submissions`: respuestas del estudiante, revisión, retroalimentación y calificación.
- `evidence_files`: metadatos de archivos subidos por estudiante o admin.
- bucket privado `almalead-evidence` en Supabase Storage.
- `academic_submission_review`: vista para que dirección académica/profesores consulten entregas, estudiante, módulo, archivo, estado y nota.

Mapa de datos:

| Información | Dónde queda |
| --- | --- |
| Datos del estudiante | `profiles` |
| Cohorte e inscripción | `cohorts`, `enrollments` |
| Avance por módulo | `module_progress` |
| Evaluaciones creadas por admin | `exams` |
| Respuesta/entrega del estudiante | `evaluation_submissions` |
| Archivo subido | Storage bucket `almalead-evidence` + metadatos en `evidence_files` |
| Prácticas y casos | `practices` |
| Bitácora reflexiva | `reflections` |
| Materiales de estudio | `materials` |
| Calificación visible al estudiante | `evaluation_submissions.score`, `max_score`, `feedback`, `grade_visible_to_student` |
| Recomendaciones del revisor | `evaluation_submissions.recommendations` |
| Comentarios internos del equipo | `evaluation_submissions.internal_reviewer_notes` |
| Mensajes a coaches | `coach_messages` y notificación a `coaching@javipenaloza.com` |
| Grabaciones de clases | `materials` con `material_type = 'recording'` + archivos privados en Storage |

Flujo de revisión:

1. El estudiante sube texto, audio, video, imagen o documento.
2. El archivo privado se guarda en Supabase Storage dentro de `almalead-evidence/{student_id}/...`.
3. La metadata queda en `evidence_files`.
4. La respuesta queda asociada en `evaluation_submissions`.
5. Profesores, coaches y administradores consultan la vista `academic_submission_review`.
6. Para descargar, el frontend genera una URL firmada privada desde Supabase Storage.
7. Al calificar, el profesor guarda `score`, `max_score`, `rubric`, `feedback` y activa `grade_visible_to_student`.
8. También puede guardar `recommendations` para el estudiante e `internal_reviewer_notes` para el equipo.
9. El estudiante ve la nota, retroalimentación y recomendaciones en su panel de Evaluaciones.

### Mensajes a coaches

El estudiante puede enviar dudas a Javi, Jedi o Nico. Todos los mensajes deben llegar a:

```text
coaching@javipenaloza.com
```

En producción el flujo recomendado es:

1. Guardar el mensaje en `coach_messages`.
2. Ejecutar una Supabase Edge Function para enviar el correo a `coaching@javipenaloza.com`.
3. Permitir que dirección académica marque mensajes como leídos o resueltos.

En el prototipo local, el botón abre el correo del usuario con un `mailto:` y guarda una copia local del historial.

Formatos previstos:

```text
Audio: mp3, wav, m4a, aac, ogg
Video: mp4, mov, webm, m4v
Imagen: jpg, jpeg, png, webp, heic
Documentos: pdf, doc, docx, ppt, pptx, xls, xlsx, txt
Comprimidos: zip, rar
```
