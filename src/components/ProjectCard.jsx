import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedCard = motion.div;

export default function ProjectCard({ project }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <AnimatedCard
      className="card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <img src={project.image} alt={project.title} className="project-image" />
      <h3 style={{ textAlign: "center" }}>{project.title}</h3>
      <div className="project-description">
        <p><strong>Frontend:</strong> {project.description.frontend || "N/A"}</p>
        <p><strong>Backend:</strong> {project.description.backend || "N/A"}</p>
        <p><strong>Base de datos:</strong> {project.description.database || "N/A"}</p>
      </div>
      <div className="project-links">
        <a href={project.demo} className="btn" target="_blank" rel="noopener noreferrer">
          Demo
        </a>
        <button
          type="button"
          className="btn info-button"
          aria-expanded={showInfo}
          onClick={() => setShowInfo((isVisible) => !isVisible)}
        >
          {showInfo ? "Ocultar info" : "Info"}
        </button>
        {/* <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
          GitHub
        </a> */}
      </div>
      {showInfo && (
        <div className="project-info" role="region" aria-label={`Información de ${project.title}`}>
          {project.info || "Añade aquí la información detallada de este proyecto."}
        </div>
      )}
    </AnimatedCard>
  );
}