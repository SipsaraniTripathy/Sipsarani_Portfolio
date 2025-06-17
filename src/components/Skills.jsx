import React from "react";
import {
  Code2,
  Cloud,
  Database,
  Terminal,
  Layers,
  Monitor,
} from "lucide-react";

const skills = {
  Languages: ["Python", "JavaScript", "C", "C++", "HTML", "CSS", "MATLAB"],
  "Web Frameworks": [
    "Django",
    "Django REST Framework",
    "FastAPI",
    "React",
    "Bootstrap",
    "Tailwind CSS",
  ],
  Databases: ["MySQL", "PostgreSQL", "MongoDB"],
  "Cloud & DevOps": [
    "AWS",
    "Docker",
    "Jenkins",
    "Git",
    "GitHub",
    "SVN",
    "CI/CD",
    "Microservices",
    "SDLC",
  ],
  "Libraries & Tools": [
    "OpenCV",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Scipy",
    "PyQt5",
    "Multithreading",
    "Multiprocessing",
    "JSON",
  ],
  "Operating Systems": ["Linux (Ubuntu)", "Windows"],
};

const categoryIcons = {
  Languages: <Code2 className="text-cyan-600 w-6 h-6" />,
  "Web Frameworks": <Layers className="text-cyan-600 w-6 h-6" />,
  Databases: <Database className="text-cyan-600 w-6 h-6" />,
  "Cloud & DevOps": <Cloud className="text-cyan-600 w-6 h-6" />,
  "Libraries & Tools": <Terminal className="text-cyan-600 w-6 h-6" />,
  "Operating Systems": <Monitor className="text-cyan-600 w-6 h-6" />,
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 bg-[#f1f5f9] dark:bg-[#0f172a] text-gray-900 dark:text-white flex items-center justify-center"
    >
      <div className="max-w-6xl w-full space-y-16">
        {/* Section Heading */}
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            My <span className="text-cyan-600">Skills</span>
          </h3>
          <p className="text-lg mt-3 text-gray-600 dark:text-gray-400">
            Technologies and tools I’ve mastered over 7+ years
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-10 md:grid-cols-2">
          {Object.entries(skills).map(([category, items], idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6 hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-100 dark:bg-cyan-900 rounded-full">
                  {categoryIcons[category]}
                </div>
                <h4 className="text-xl font-semibold text-cyan-600">
                  {category}
                </h4>
              </div>
              <ul className="flex flex-wrap gap-3 mt-3">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 text-sm px-3 py-1 rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
