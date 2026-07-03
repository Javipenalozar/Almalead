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
- `evidence_files`: archivos subidos por estudiante o admin.
- bucket privado `almalead-evidence` en Supabase Storage.

Formatos previstos:

```text
Audio: mp3, wav, m4a, aac, ogg
Video: mp4, mov, webm, m4v
Imagen: jpg, jpeg, png, webp, heic
Documentos: pdf, doc, docx, ppt, pptx, xls, xlsx, txt
Comprimidos: zip, rar
```
