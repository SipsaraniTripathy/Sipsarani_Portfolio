import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "JP Morgan Chase & Co. | Mumbai",
    title: "Software Engineer",
    duration: "Nov 2022 – Nov 2024",
    description: [
      "Designed, developed, and deployed financial model reporting dashboards using Python (backend), React, and Tailwind CSS (frontend), improving interface responsiveness and user engagement.",
      "Automated complex data workflows with Python scripting, reducing manual processing by 50% and saving over 10 hours/week for operations teams.",
      "Built scalable, microservices-based APIs using FastAPI, and implemented real-time monitoring dashboards for performance tuning and incident resolution.",
      "Led full SDLC ownership — from requirement analysis through deployment — ensuring timely delivery and compliance, while driving agile collaboration across cross-functional teams.",
      "Contributed to enhanced platform stability by resolving production-critical bugs and introducing quality-first coding practices in sprint cycles.",
    ],
    techSkills: [
      "Python",
      "FastAPI",
      "React",
      "Tailwind CSS",
      "Non Relational DB (Hydra)",
      "OOPS",
      "Data Structure",
      "Docker",
      "Microservices",
      "SDLC",
      "Agile",
      "REST APIs",
      "CI/CD",
      "Monitoring Tools",
    ],
  },
  {
    company: "Tata Consultancy Services (TCS) | Mumbai",
    title: "System Engineer",
    duration: "Jun 2021 – Nov 2022",
    description: [
      "Developed a secure Proctored Assessment Application using Python, Django, DRF, MySQL, HTML,and Bootstrap, and built RESTful APIs for seamless frontend-backend integration and smooth data handling, improving system performance by 40%.",
      "Debugged and optimized projects to ensure smooth functionality and scalability, reducing application load time and enhancing user experience.",
      "Implemented CI/CD workflows using Jenkins and Git, automating build and deployment processes,improving deployment efficiency by 30%.",
      "Coordinated with product and QA teams to streamline development, achieving a 98% defect-free release rate.",
    ],
    techSkills: [
      "Python",
      "Django",
      "Django REST Framework",
      "OOPS",
      "Data Structure",
      "MySQL",
      "HTML",
      "Bootstrap",
      "REST APIs",
      "Jenkins",
      "Git",
      "SVN",
      "CI/CD",
    ],
  },
  {
    company: "Best Automation | Pune",
    title: "Lead Software Developer",
    duration: "Jan 2018 – Oct 2020",
    description: [
      "Developed advanced image processing and computer vision solutions for object detection,object tracking, defect analysis, and automation in manufacturing.",
      "Applied machine learning techniques where applicable to improve detection accuracy for defects, cracks, part presence, motion tracking, and dimensional analysis in real-world industrial workflows.",
      "Designed custom desktop applications using PyQt5, improving user interface efficiency by 25%.",
      "Collaborated with hardware teams to integrate visual inspection systems into robotic automation workflows.",
      "Worked with Python, OpenCV, NumPy, Matplotlib, and PyQt5 in industrial workflows.",
    ],
    techSkills: [
      "Python",
      "OpenCV",
      "NumPy",
      "Matplotlib",
      "PyQt5",
      "Machine Learning",
      "OOPS",
      "Data Structure",
    ],
  },
  {
    company: "JV Technologies | Pune",
    title: "MATLAB & SIMULINK Developer",
    duration: "Jan 2017 – Dec 2017",
    description: [
      "Developed computer vision algorithms and models for object counting and quality inspection using MATLAB and SIMULINK.",
    ],
    techSkills: ["MATLAB", "SIMULINK", "Computer Vision"],
  },
];

const ExperienceTimeline = () => {
  return (
    <section
      id="experience"
      className="py-16 px-4 bg-[#f1f5f9] dark:bg-[#0f172a] text-gray-900 dark:text-white"
    >
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold">
          My <span className="text-cyan-600">Experience</span>
        </h3>
        <p className="text-lg mt-2 text-gray-500 dark:text-gray-400">
          My professional journey so far
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4">
              <div className="bg-cyan-600 p-3 rounded-full text-white">
                <Briefcase size={28} />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  {exp.duration}
                </p>
              </div>
            </div>

            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Tech Skills */}
            <div className="mt-4">
              <h5 className="font-semibold text-cyan-600 mb-2">Tech Skills:</h5>
              <div className="flex flex-wrap gap-2">
                {exp.techSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
