import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I graduated in 2025 with a B.Tech in Computer Science. I love building products from idea to deployment —
          REST APIs, databases, and modern React frontends with strong attention to accessibility and performance.
          I write maintainable code and enjoy mentoring and collaborating with teams.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass p-5 rounded-xl border border-white/6">
            <h4 className="font-medium">What I do</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              Build full-stack web apps, design APIs, optimize server performance, and craft polished UI.
            </p>
          </div>

          <div className="glass p-5 rounded-xl border border-white/6">
            <h4 className="font-medium">Focus Areas</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              MERN stack,bootstrap, Tailwind CSS, clean architecture, unit testing,Docker, CI/CD,Github actions and developer experience.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
