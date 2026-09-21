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

        <div className="about-content">
          <div className="about-intro">
            <p>
              Soy <strong>Angel Manzano</strong>, desarrollador Full Stack con enfoque en la creación de soluciones
              digitales eficientes, escalables y bien estructuradas. Me apasiona convertir ideas en productos
              funcionales, con lógica clara, buen rendimiento y una experiencia de usuario sólida.
            </p>
            <p>
              Tengo experiencia trabajando en proyectos reales con tecnologías modernas, desde el análisis y diseño
              inicial hasta la implementación, optimización y despliegue. Me gusta resolver problemas de forma
              práctica, mantener un código limpio y trabajar de manera colaborativa en cada etapa del desarrollo.
            </p>
          </div>

          <div className="about-columns">
            <div className="info-box">
              <h3>Habilidades</h3>
              <ul>
                <li>Desarrollo Full Stack</li>
                <li>Diseño de sistemas y lógica de negocio</li>
                <li>Creatividad y resolución de problemas</li>
                <li>Trabajo en equipo y responsabilidad</li>
                <li>Optimización de procesos y rendimiento</li>
                <li>Arquitectura de aplicaciones web</li>
              </ul>
            </div>

            <div className="info-box">
              <h3>Tecnologías</h3>
              <div className="tech-list">
                <span>React</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>Firebase</span>
                <span>Tailwind CSS</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>REST API</span>
                <span>Git</span>
              </div>
            </div>
          </div>
        </div>
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
        <a href="https://wa.me/+584160480190" className="btn" target="_blank" rel="noopener noreferrer">
          📱 Enviar WhatsApp
        </a>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Angel Manzano. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}