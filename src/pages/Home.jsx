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
  Programador con experiencia en soluciones eficientes y escalables, especializado en código limpio y mantenible. Dominio de múltiples lenguajes y tecnologías modernas, con gran capacidad de adaptación. Destaca por su pensamiento lógico, resolución de problemas y trabajo en equipo, participando activamente en todas las fases del desarrollo: diseño, implementación y optimización.
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