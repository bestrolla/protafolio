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
        <h1>Full Stack Developer</h1>
        <p>React · PHP · MySQL · MongoDB</p>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>Sobre mí</h2>
        <p>
          Soy desarrollador Full Stack con experiencia en React, PHP, MySQL y MongoDB.
          Me enfoco en construir aplicaciones funcionales, escalables y bien estructuradas.
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
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Angel Manzano. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}