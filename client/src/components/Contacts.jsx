import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

export default function Contact() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .post("https://portfolio-0a84.onrender.com/register", {
        userName,
        email,
        message: msg, // FIXED
      })
      .then((response) => {
        toast.success(`thank you ${response.data.user} Try  contacting on linkedin or x for faster reply`);
        setName("");
        setEmail("");
        setMsg("");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
        <p className="dark:text-gray-400 text-gray-800 mb-6">
          Want to work together or just say hi? Send a message — I usually reply
          within a day.
        </p>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <input
            name="userName"
            onChange={(e) => setName(e.target.value)}
            value={userName}
            className="p-3 rounded-lg bg-white/5 border border-gray-700 dark:border-white"
            placeholder="Your name"
            required
          />

          {/* FIXED: type="email" */}
          <input
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="p-3 rounded-lg bg-white/5 border border-gray-700 dark:border-white"
            placeholder="you@example.com"
            required
          />

          <textarea
            name="message"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
            rows="6"
            className="p-3 rounded-lg bg-white/5 border border-gray-700 dark:border-white"
            placeholder="Write your message..."
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
