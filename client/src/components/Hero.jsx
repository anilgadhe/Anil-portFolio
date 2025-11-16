import React from "react";
import pic from "../assets/passport.jpg"
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section id="home" className="pt-0 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m <span className="text-blue-400">Anil Gadhe</span>
        </h1>

        <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          I build clean, scalable web applications with a focus on performance and delightful UX.
          Full-Stack Developer  — shipping production-ready code.
        </p>

        <div className="mt-8 flex items-center justify-center ">
           
              <img src={pic} alt="passport" className="ronded rounded-full h-40 w-40"/> 
            
        </div>

        <div className="mt-10">
          <a href="#projects" className="inline-block px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 font-medium">
            View Projects
          </a>
          <a href="../assests/Anil_gade.pdf" className="ml-4 inline-block px-6 py-3 rounded-lg border dark:border-white border-gray-400  hover:bg-white/4">
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
