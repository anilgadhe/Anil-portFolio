import React from "react";
import { motion } from "framer-motion";
import { HiMoon, HiSun, HiMail, HiHome } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function BottomNavbar({ theme, toggleTheme }) {
  return (
    <motion.nav
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6  pl-6 lg:left-1/3 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <motion.div
        whileHover={{ scale: 1.06 }}
        className="
          flex items-center justify-between 
          backdrop-blur-xl
          px-6 py-3 rounded-2xl
          border border-black/20 dark:border-white/20
          shadow-lg
          bg-white/70 dark:bg-black/40
          w-[90vw] max-w-[480px]
        "
      >
        {/* Home */}
        <a
          href="#top"
          className="text-xl hover:scale-125 transition text-black dark:text-white"
        >
          <HiHome />
        </a>

        <Divider />

        {/* X */}
        <a
          href="https://x.com/gadeanil3114"
          target="_blank"
          className="text-xl hover:scale-125 transition text-black dark:text-white"
        >
          <FaXTwitter />
        </a>

        <Divider />

        {/* LinkedIn */}
        <a
          href="http://www.linkedin.com/in/anil-gade-02773024a"
          target="_blank"
          className="text-xl hover:scale-125 transition text-black dark:text-white"
        >
          <FaLinkedin />
        </a>

        <Divider />

        {/* GitHub */}
        <a
          href="https://github.com/anilgadhe"
          target="_blank"
          className="text-xl hover:scale-125 transition text-black dark:text-white"
        >
          <FaGithub />
        </a>

        <Divider />

        {/* Email */}
        <a
          href="mailto:gadheanil57@gmail.com"
          className="text-xl hover:scale-125 transition text-black dark:text-white"
        >
          <HiMail />
        </a>

        <Divider />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition text-black dark:text-white"
        >
          {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
        </button>
      </motion.div>
    </motion.nav>
  );
}

function Divider() {
  return <div className="h-6 w-[1px] bg-black/25 dark:bg-white/25"></div>;
}
