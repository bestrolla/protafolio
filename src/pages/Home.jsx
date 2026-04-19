import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [filter, setFilter] = useState("all");

  const filtered = projects.filter((p) =>
    filter === "all" ? true : p.tech.includes(filter)
  );

  return (
    <div>

      {/* HERO */}
      <section className="hero">
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
        <button onClick={() => setFilter("all")}>Todos</button>
        <button onClick={() => setFilter("React")}>React</button>
        <button onClick={() => setFilter("PHP")}>PHP</button>
        <button onClick={() => setFilter("MySQL")}>MySQL</button>
        <button onClick={() => setFilter("MongoDB")}>MongoDB</button>
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

    </div>
  );
}