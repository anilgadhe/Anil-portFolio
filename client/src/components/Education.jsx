import React from "react";

// Replace these with actual logos URLs or import local images
import XYZLogo from "../assets/university.jpg";
import ABCLogo from "../assets/ymn.jpg";
import DEFLogo from "../assets/shivajiSchool.jpg";

const educationData = [
  {
    year: "2025",
    degree: "B.Tech in Computer Science",
    college: "Matoshree pratisthan group of intitute nanded",
    logo: XYZLogo,
    percentage: "7.8/10 CGPA",
  },
  {
    year: "2021",
    degree: "Higher Secondary Education (Science)",
    college: "YMN",
    logo: ABCLogo,
    percentage: "90%",
  },
  {
    year: "2019",
    degree: "Secondary Education",
    college: "Shree Shivaji HighSchool Nanded",
    logo: DEFLogo,
    percentage: "85.60%",
  },
];

export default function Education() {
  return (
    <div className="min-h-screen text-black  dark:text-white flex flex-col items-center p-20">
      <h2 className="text-4xl font-bold mb-8">Education</h2>

      <div className="relative w-full max-w-4xl">
       

        <div className="flex flex-col gap-10">
          {educationData.map((edu, idx) => (
            <div key={idx} className="flex items-start relative">

              <div className="ml-12 p-4 bg-white dark:bg-black rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Logo */}
                <img
                  src={edu.logo}
                  alt={`${edu.college} logo`}
                  className="w-16 h-16 object-contain rounded-md border border-gray-700"
                />

                {/* Details */}
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-gray-700 dark:text-gray-400 font-mono">{edu.year}</span>
                  </div>
                  <p className="text-black dark:text-white mb-1">{edu.college}</p>
                  <p className="text-cyan-400 font-mono font-semibold">{edu.percentage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
