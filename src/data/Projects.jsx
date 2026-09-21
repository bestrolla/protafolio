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
