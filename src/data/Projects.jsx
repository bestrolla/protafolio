export const projects = [
  {
    title: "Sistema de gestión de cursos universitarios",
    description: {
      frontend: "HTML5, JavaScript, CSS3",
      backend: "PHP",
      database: "MySQL"
    },
    info: "El proyecto CENEAC es un sistema de gestión académica (cursos, estudiantes, profesores, salones y calendario) desarrollado en PHP puro con MySQL (sin framework), con frontend en HTML/CSS/JavaScript vanilla y desplegado en Vercel. Usa un patrón MVC simplificado por módulos, donde cada funcionalidad (agregar cursos, profesores, salones, lobby de estudiantes, etc.) tiene su propia carpeta dividida en vista/ (interfaz) y logica/ (consultas a la base de datos, consumidas vía fetch/AJAX). El proyecto se desarrolló de forma iterativa: empezó con conexiones y controladores simples y dispersos, y luego se refactorizó hacia una capa core/ centralizada (conexión Singleton a BD, manejo de sesiones, seguridad con hash Argon2id, protección CSRF, control de acceso por roles: administrador, secretaria, estudiante), mejorando progresivamente la seguridad y el mantenimiento del código sin reescribir todo desde cero.",
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
    info: "Cafetín (CDC) es un sistema de gestión para un negocio tipo cafetería/quiosco (inventario, ventas, cuentas por cobrar y abonos, en USD/Bs), con perfiles de Administrador y Cajero, hecho en PHP puro + MySQL, frontend en HTML/CSS/JS vanilla, pensado para correr en WAMP localmente y desplegarse en Vercel. Sigue el mismo patrón modular por rol que CENEAC: carpetas admin/ y cajero/ con submódulos (inventario, caja, cuentas, configuración, lobby de venta), cada uno dividido en vista/ (interfaz) y logica/ (PHP que procesa datos vía AJAX/fetch), más un login con recuperación de contraseña por pregunta de seguridad. La capa de seguridad/infraestructura común vive en acces/ (control de acceso por sesión, CSRF con tokens firmados sin depender de sesión —pensado para serverless—, cabeceras de seguridad, navegación por rol), en vez de un core/ centralizado como en CENEAC. La conexión a BD (BBDD/BBDD.php) usa variables de entorno con fallback a credenciales fijas en el código (mismo patrón, y mismo riesgo de seguridad, que en CENEAC). El desarrollo también fue iterativo (108 commits, desde sept. 2025 hasta ago. 2026), con foco fuerte en hacer funcionar el sistema en modo serverless (manejo de sesiones en /tmp, router api/index.php, variables MYSQL_*), pero sin la refactorización hacia clases base/Singleton que sí se hizo en CENEAC",
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
    info: "SACI es un sistema pequeño y bastante más simple que los dos anteriores: un control de deudas de bodega/tienda (clientes, deudas, pagos, tasa de cambio USD/Bs), hecho en PHP puro + MySQL (PDO), con frontend en HTML/CSS/JS mínimo, sin login ni roles (a diferencia de CENEAC y Cafetín). Usa un router propio en index.php que, según la ruta pedida, incluye el archivo correspondiente de index/vista/, y separa la lógica en index/logica/ (funciones PHP puras tipo crearCliente(), listarClientes(), etc., sin clases ni Singleton) consumida directamente desde las vistas PHP —no tanto vía AJAX/fetch como en los otros dos proyectos, sino más bien renderizado server-side con require. La conexión a BD (db.php) usa variables de entorno con fallback a localhost/root sin contraseña, e incluso crea la base de datos automáticamente si no existe. Incluye un modo respaldo que detecta si faltan tablas/vistas SQL y avisa al usuario en pantalla en lugar de romper la app. El desarrollo fue mucho más corto (solo 9 commits, entre mayo y agosto de 2026), concentrado casi todo en un solo día (12 de agosto) ajustando la configuración de Vercel y el router. En conjunto, es el proyecto menos maduro arquitectónicamente de los tres: no tiene capa core/ ni sistema de autenticación/roles, es esencialmente scripts PHP funcionales organizados por vista/lógica, sin abstracción adicional.",
    tech: ["JavaScript", "PHP", "MySQL"],
    demo: "https://saci-iota.vercel.app/",
    github: "#",
    image: "/images/bestrolla.jpg"
  }
];
