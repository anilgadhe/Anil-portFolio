import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import wonderlust from "../assets/wonderlust.jpg"
import resume from "../assets/resume_builder.png"
import carRental from "../assets/carRental.png"
import dashboard from "../assets/dashboard.jpg"
import URL from "../assets/urltool.jpg"
import whislist from "../assets/wishlist.png"
import imagify from "../assets/imagify.png"

const projects = [
  {
    title: "Resume AI Builder",
    desc: "AI-driven resume builder build using open api , to create highly ats optimise resumes,and to edit resumes ",
    img: resume,
    demo: "https://resume-builder-eight-beta-44.vercel.app",
    code: "https://github.com/anilgadhe/Resume_builder"
  },
  {
    title: "Imagify",
    desc: "It is generate image from texts using clickdrop api's also integrsted Razorpay api's to billing",
    img: imagify,
    demo: "https://imagify-sandy-beta.vercel.app",
    code: "https://github.com/anilgadhe/imagify"
  },
    {
    title: "Car-rental App",
    desc: "It is generate image from texts using clickdrop api's also integrsted Razorpay api's to billing",
    img: carRental,
    demo: "https://car-rental-alpha-opal.vercel.app/",
    code: "https://github.com/anilgadhe/CarRental"
  },
  {
    title: "Wonderlust",
    desc: "Airbnb-like home listing app with bookings and reviews.",
    img: wonderlust,
    demo: "https://wonderlust-s6ps.onrender.com",
    code: "https://github.com/anilgadhe/Wonderlust"
  },
  {
    title: "FullTradeStack",
    desc: "Simulated trading app, portfolios and orders with analytics.",
    img: dashboard,
    demo: "https://full-trade-stack.vercel.app",
    code: "https://github.com/anilgadhe/FullTradeStack"
  },
    {
    title: "URL-tool",
    desc: "It is builf to shorten your url's and make Qr from Url's",
    img: URL,
    demo: "https://urltools.onrender.com",
    code: "https://github.com/anilgadhe/URLtools"
  },
  {
    title: "Whislist",
    desc: "It is a place where you can list your list bucket list,edit,delete and remmbers the date when you made wish",
    img:whislist,
    demo: "https://wishlist-zeta-sable.vercel.app",
    code: "https://github.com/anilgadhe/wishlist"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ y: 8, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-8">Selected Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
