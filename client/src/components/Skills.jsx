import React, { useState } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiRender,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPostman,

  SiVsco,
  SiC,
} from "react-icons/si";

// Skills list
const allSkills = [
  { name: "React", category: "Frontend", icon: <SiReact /> },
  { name: "HTML", category: "Frontend", icon: <SiHtml5 /> },
  { name: "CSS", category: "Frontend", icon: <SiCss3 /> },
  { name: "JavaScript", category: "Languages", icon: <SiJavascript /> },
  { name: "C", category: "Languages", icon: <SiC /> },
  { name: "TypeScript", category: "Languages", icon: <SiTypescript /> },
  { name: "jQuery", category: "Frontend", icon: <SiJquery /> },
  { name: "Bootstrap", category: "Frontend", icon: <SiBootstrap /> },
  { name: "Tailwind", category: "Frontend", icon: <SiTailwindcss /> },
  { name: "Node.js", category: "Backend", icon: <SiNodedotjs /> },
  { name: "Express.js", category: "Backend", icon: <SiExpress /> },
  { name: "MongoDB", category: "Database", icon: <SiMongodb /> },
  { name: "MySQL", category: "Database", icon: <SiMysql /> },
  { name: "Git", category: "DevOps", icon: <SiGit /> },
  { name: "GitHub", category: "DevOps", icon: <SiGithub /> },
  { name: "Docker", category: "DevOps", icon: <SiDocker /> },
  { name: "CI/CD", category: "DevOps", icon: <SiGithub /> },
  { name: "Vercel", category: "Tools", icon: <SiVercel /> },
  { name: "Render", category: "Tools", icon: <SiRender /> },
  { name: "Postman", category: "Tools", icon: <SiPostman /> },
  { name: "VSCode", category: "Tools", icon: <SiVsco/> },
];

// Categories for toggle
const categories = ["All", "Frontend", "Backend", "Database", "DevOps", "Languages", "Tools"];

// Context descriptions
const categoryDescriptions = {
  Frontend:
    "I am very skilled in building SPAs using React for better user experience, responsive design, and modern UI patterns.",
  Backend:
    "Strong backend experience usually i use MVC pattern architecture and jWT tokens for authentication to building RESTful APIs using Node.js and Express.js with focus on scalability and performance.",
  Database:
    "Experienced in working with MongoDB and MySQL for designing efficient, secure, and maintainable databases.",
  DevOps:
    "Proficient in Git, GitHub, Docker, CI/CD pipelines to ensure smooth deployment and collaboration.",
  Languages:
    "Skilled in programming languages like JavaScript, TypeScript, and C for solving diverse problems.",
  Tools:
    "Familiar with tools like Postman, VSCode, Vercel, and Render for development, testing, and deployment.",
  All: "This is a comprehensive view of all my skills.",
};

export default function SkillsSQLDropdown() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? allSkills
      : allSkills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="min-h-screen text-black dark:text-white flex flex-col items-center p-6">
      <h2 className="text-4xl font-bold mb-4">Skills Table</h2>

      {/* Toggle Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition
              ${selectedCategory === cat ? "bg-cyan-500 text-black" : "bg-gray-700 text-white hover:bg-gray-600"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SQL Query Input with Select */}
      <div className="w-full max-w-2xl mb-6 flex items-center gap-2">
        <span className="font-mono text-gray-400">SELECT * FROM skills WHERE category = </span>
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="bg-gray-800 border border-gray-600 text-white font-mono p-2 rounded-md focus:outline-none focus:border-cyan-500"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <span className="font-mono text-gray-400">;</span>
      </div>

      {/* Category Context Description */}
      <p className="max-w-4xl mb-6 text-black dark:text-white font-mono">{categoryDescriptions[selectedCategory]}</p>

      {/* Skills Table */}
      <div className="w-full max-w-4xl overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white border-b border-gray-600">
              <th className="p-3 font-mono">Skill</th>
              <th className="p-3 font-mono">Category</th>
              <th className="p-3 font-mono">Icon</th>
            </tr>
          </thead>
          <tbody>
            {filteredSkills.map((skill, idx) => (
              <tr key={idx} className="border-b border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 transition">
                <td className="p-3 font-mono">{skill.name}</td>
                <td className="p-3 font-mono">{skill.category}</td>
                <td className="p-3">{skill.icon}</td>
              </tr>
            ))}
            {filteredSkills.length === 0 && (
              <tr>
                <td colSpan="3" className="p-3 text-center text-gray-400">
                  No skills found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
