import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </motion.div>
  );
}