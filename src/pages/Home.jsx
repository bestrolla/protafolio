import MatrixRain from "../components/MatrixRain";
import { useState } from "react";
import { projects } from "../data/Projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [filter, setFilter] = useState("all");

  const filtered = projects.filter((p) =>
    filter === "all" ? true : p.tech.includes(filter)
  );

  return (
    <div className="home-page">

      {/* HERO */}
      <section className="hero">
        <MatrixRain />
        <h1>ANGEL MANZANO</h1>
        <p>Desarrollador Full Stack</p>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>Sobre mí</h2>
        <p>
        Soy programador con experiencia en el desarrollo de soluciones eficientes y escalables, enfocado en la escritura de código limpio y mantenible. Manejo diversos lenguajes de programación y tecnologías modernas, con capacidad para adaptarme rápidamente a nuevos entornos y herramientas. Me destaco por el pensamiento lógico, la resolución de problemas y el trabajo en equipo, contribuyendo activamente en todas las etapas del desarrollo de software, desde el diseño hasta la implementación y optimización.
        </p>
      </section>

      {/* FILTER */}
      <section className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Todos
        </button>
        <button
          className={filter === "React.JS" ? "active" : ""}
          onClick={() => setFilter("React.JS")}
        >
          React
        </button>
        <button
          className={filter === "PHP" ? "active" : ""}
          onClick={() => setFilter("PHP")}
        >
          PHP
        </button>
        <button
          className={filter === "MySQL" ? "active" : ""}
          onClick={() => setFilter("MySQL")}
        >
          MySQL
        </button>
        <button
          className={filter === "MongoDB" ? "active" : ""}
          onClick={() => setFilter("MongoDB")}
        >
          MongoDB
        </button>
       
        <button
          className={filter === "Tailwind.CSS" ? "active" : ""}
          onClick={() => setFilter("Tailwind.CSS")}
        >
          Tailwind.CSS
        </button>
        <button
          className={filter === "Node.JS" ? "active" : ""}
          onClick={() => setFilter("Node.JS")}
        >
          Node.JS
        </button>
        <button
          className={filter === "Express.JS" ? "active" : ""}
          onClick={() => setFilter("Express.JS")}
        >
          Express.JS
        </button>
        <button
          className={filter === "TypeScript" ? "active" : ""}
          onClick={() => setFilter("TypeScript")}
        >
          TypeScript
        </button>
        <button
          className={filter === "Firebase" ? "active" : ""}
          onClick={() => setFilter("Firebase")}
        >
          Firebase
        </button>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Proyectos</h2>

        <div className="grid">
          {filtered.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contacto</h2>

        <p>¿Quieres trabajar conmigo?</p>

        <a href="mailto:angelmanzano01092003@gmail.com" className="btn">
          📧 Enviar Email
        </a>
        <a href="https://wa.me/+574160480190" className="btn" target="_blank" rel="noopener noreferrer">
          📱 Enviar WhatsApp
        </a>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Angel Manzano. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}