import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 mt-12 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
        © {new Date().getFullYear()} Anil Gadhe — Built with ❤️ • 
      </div>
    </footer>
  );
}
