import React from "react";
import { Mail, Phone } from "lucide-react";

const HireMe = () => {
  return (
    <section
      id="hireme"
      className="py-16 px-4 bg-[#f1f5f9] dark:bg-[#0f172a] text-gray-900 dark:text-white"
    >
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-lg mt-2 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          I'm available for freelance, contract, or full-time opportunities. If
          you have a project or position that fits my skills and experience,
          let’s connect!
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-xl shadow-md space-y-6">
        <div className="flex items-center gap-4 text-white">
          <div className="bg-cyan-600 p-3 rounded-full">
            <Mail size={24} />
          </div>
          <a
            href="mailto:sipsatripathy13@gmail.com"
            className="hover:underline text-lg"
          >
            sipsatripathy13@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4 text-white">
          <div className="bg-cyan-600 p-3 rounded-full">
            <Phone size={24} />
          </div>
          <a href="tel:+447401578896" className="hover:underline text-lg">
            +44 7401 578896
          </a>
        </div>
        <div className="text-center mt-8">
          <a
            href="#contact"
            className="bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
