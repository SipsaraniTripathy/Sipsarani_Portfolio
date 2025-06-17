import React from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationDetails = [
    {
      degree: "Bachelor of Technology in Electrical Engineering",
      institution: "Biju Patnaik University of Technology, Odisha, India",
      grades: "CGPA: 8.22",
      year: "2012 - 2015",
    },
  ];

  return (
    <section
      id="education"
      className="py-16 px-4 bg-[#f1f5f9] dark:bg-[#0f172a] text-gray-900 dark:text-white"
    >
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold">
          My <span className="text-cyan-600">Education</span>
        </h3>
        <p className="text-lg mt-2 text-gray-500 dark:text-gray-400">
          My educational details are as follows
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex gap-4 items-start hover:shadow-lg transition"
          >
            <div className="bg-cyan-600 p-3 rounded-full text-white">
              <GraduationCap size={28} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
              <p className="text-gray-700 dark:text-gray-300">
                {edu.institution}
              </p>
              <p className="text-gray-600 dark:text-gray-400">{edu.grades}</p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                {edu.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
