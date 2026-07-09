# Supabase - Almalead

Esta carpeta deja preparada la base real de la plataforma academica Almalead. No se debe ejecutar hasta que la version local este aprobada.

## Archivos

- `schema.sql`: esquema completo de referencia para revisar o pegar manualmente en el SQL Editor.
- `migrations/202607070001_initial_academic_platform.sql`: migracion inicial versionada para ejecutar una sola vez en el proyecto Supabase.

## Que crea

- Perfiles con roles: estudiante, mentor, coach, profesor y admin.
- Cohortes, modulos y calendario de activacion.
- Inscripciones y progreso automatico por modulo.
- Evaluaciones, entregas, evidencias y calificaciones.
- Bitacora O-L-E-C con modulo, dimension, fecha y contenido.
- Materiales, grabaciones y recursos privados.
- Mensajes a coaches dirigidos a `coaching@javipenaloza.com`.
- Buckets privados de Storage:
  - `almalead-evidence`
  - `almalead-materials`
- Politicas RLS para separar estudiante, equipo academico y administracion.

## Ejecucion futura

Cuando se autorice:

1. Entrar al proyecto Supabase `Almalead`.
2. Abrir `SQL Editor`.
3. Ejecutar `supabase/migrations/202607070001_initial_academic_platform.sql`.
4. Crear usuarios en Supabase Auth.
5. Guardar las variables en Netlify:

```text
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
```

Despues de eso se conecta el frontend para reemplazar el `localStorage` por Supabase Auth, Database y Storage.
