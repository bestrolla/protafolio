export const projects = [
  {
    title: "Sistema de gestión de cursos universitarios",
    description: {
      frontend: "HTML5, JavaScript, CSS3",
      backend: "PHP",
      database: "MySQL"
    },
    info: "Es un sistema de gestión académica y administrativa (cursos, estudiantes, profesores, salones, calendario, roles de usuario) construido en PHP puro + MySQL, sin framework, pensado para desplegarse en Vercel.

Stack técnico
Backend: PHP nativo, PDO para la base de datos.
Base de datos: MySQL/MariaDB, con tablas como persona, usuario, estudiante, profesor, secretaria, rol, cursos, salon, calendario, clases_programadas, clases_reprogramadas, dias_festivos, eventos.
Frontend: HTML + CSS + JavaScript "vanilla" (fetch/AJAX), sin frameworks tipo React/Vue. Usa FullCalendar para el calendario.
Despliegue: Vercel (con vercel.json para rutas y api/index.php como router).
Metodología / patrón de arquitectura

1. Organización por rol y módulo (no por capa técnica clásica):
El proyecto está dividido en carpetas de alto nivel por tipo de usuario: admin/, secretaria/, estudiante/, login/. Dentro de cada una hay submódulos funcionales (agregar_cursos, agregar_profe, agregar_salon, Calendario, lobby, espera, configuracion, etc.).

2. Patrón "vista / lógica" dentro de cada módulo:
Cada módulo se subdivide en:

vista/ → HTML/PHP de presentación + CSS/JS del front.
logica/ → scripts PHP que hacen las consultas a la BD y devuelven datos (muchos vía JSON, consumidos con fetch() desde el JS de la vista).

Es básicamente un MVC simplificado y descentralizado: cada módulo tiene su propio mini "controlador" (logica) y su propia "vista", en vez de un único controlador central por entidad.

3. Capa de "controladores" y BBDD legacy:
Hay una carpeta controlador/ (persona, estudiante, usuario) y una BBDD/BBDD.php que representan la forma original en que se manejaban las conexiones a base de datos.

4. Refactorización hacia un núcleo centralizado (core/):
En una segunda etapa del proyecto (ver README_REFACTORIZACION.md y README_FIXES.md) se introdujo una capa core/ más ordenada:

Database.php → conexión a BD con patrón Singleton y consultas preparadas.
Session.php → manejo centralizado de sesiones.
Security.php → hash de contraseñas (Argon2id), y compatibilidad con el sistema legacy de contraseñas en ASCII.
AuthController.php / BaseController.php → base para controladores con autenticación, CSRF, manejo de roles.
config/config.php → configuración centralizada (BD, rutas, roles, mensajes) vía variables de entorno con fallback a valores por defecto.

Es decir, la metodología fue: empezar con un patrón simple vista/lógica por módulo, y luego refactorizar progresivamente hacia una arquitectura MVC más centralizada y segura, migrando de forma incremental (con compatibilidad hacia atrás) en vez de reescribir todo de golpe.

5. Seguridad añadida en la refactorización:
Migración de contraseñas en texto plano/ASCII a hash Argon2id, protección CSRF, rate limiting de intentos de login, recuperación de contraseña por token con expiración, logging de intentos fallidos (logs/failed_attempts_*.log).

6. Control de acceso por roles:
Roles definidos (administrador, secretaria, estudiante), con verificacion/verificar_acceso.php controlando qué puede ver cada uno, y sidebars distintos (components/navigation/admin_sidebar.php, secretaria_sidebar.php).",
    tech: ["JavaScript", "PHP", "MySQL"],
    demo: "https://ceneac.vercel.app/login/login/vista/index.php",
    github: "#",
    image: "/images/ceneac.png"
  },
  {
    title: "sistema de gestión de inventario ",
    description: {
      frontend: "HTML5, JavaScript, CSS3",
      backend: "PHP",
      database: "MySQL"
    },
    info: "",
    tech: ["JavaScript", "PHP", "MySQL"],
    demo: "https://cafetin-weld.vercel.app/login/inicio/vista/inicio.php",
    github: "#",
    image: "/images/ciencias.ico"
  },
   {
    title: "sistema de administración de empresarial ",
    description: {
      frontend: "react.JS, tailwind.CSS",
      backend: "node.JS, express.JS, typescript, firebase",
      database: "mongoDB"
    },
    info: "",
    tech: [ "React.JS", "Node.JS", "MongoDB", "Tailwind.CSS", "Express.JS", "TypeScript", "Firebase"],
    demo: "https://smartops-teal.vercel.app/",
    github: "#",
    image: "/images/smartops.jpeg"
  },
   {
    title: "sistema de administración de deudas",
    description: {
      frontend: "HTML5, JavaScript, CSS3",
      backend: "PHP",
      database: "MySQL"
    },
    info: "",
    tech: ["JavaScript", "PHP", "MySQL"],
    demo: "https://saci-iota.vercel.app/",
    github: "#",
    image: "/images/bestrolla.jpg"
  }
];
