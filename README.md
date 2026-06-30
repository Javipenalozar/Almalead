# Almalead Plataforma Academica

Plataforma web inicial para alojar la estructura academica de Almalead, el avance del estudiante, materiales, practicas, bitacora y estado de certificacion.

## Vista actual

- Panel del estudiante con progreso integral.
- Ruta academica por modulos y horas.
- Biblioteca de materiales.
- Bitacora reflexiva con guardado local.
- Registro de practicas y entregables.
- Checklist de certificacion.
- Vista base para direccion academica.

## Probar localmente

```bash
python3 -m http.server 4173
```

Luego abre:

```text
http://127.0.0.1:4173/
```

## Deploy sugerido en Netlify

1. Sube este proyecto al repositorio de GitHub.
2. En Netlify, crea un nuevo site desde ese repositorio.
3. En la configuracion de build usa:

```text
Build command: sin comando
Publish directory: .
```

4. En `Domain management`, agrega el dominio:

```text
almalead.javipenalozar.com
```

5. Como el subdominio ya esta en Netlify, valida que el DNS apunte al dominio asignado por Netlify:

```text
almalead -> TU_SITE.netlify.app
```

Netlify tambien puede generar automaticamente el certificado SSL cuando el DNS ya resuelve correctamente.

## Siguiente fase recomendada

Para pasar de prototipo a plataforma real:

- Autenticacion de estudiantes, mentores y administradores.
- Base de datos para cohortes, modulos, entregables y progreso.
- Carga privada de materiales PDF, video y documentos.
- Rubricas, evaluaciones y aprobacion de certificacion.
- Panel administrativo para seguimiento por estudiante.
