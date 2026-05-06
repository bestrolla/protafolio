import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
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
        {/* <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
          GitHub
        </a> */}
      </div>
    </motion.div>
  );
}