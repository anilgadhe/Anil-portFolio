import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      className="rounded-xl overflow-hidden border border-gray-500 card bg-white/2"
    >
      <div className="h-44 w-full overflow-hidden">
        <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{project.desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-300">MERN • Full Stack</div>
          <div className="flex items-center gap-3">
            <a href={project.demo} target="_blank" className="text-blue-400 text-sm hover:underline">Live</a>
            <a href={project.code} className="text-blue-400 text-sm hover:underline">Code</a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
