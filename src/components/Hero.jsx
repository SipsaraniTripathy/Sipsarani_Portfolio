import React, { useEffect, useRef, useState } from "react";
import my2 from "../assets/images/my2.jpg";
import Type from "./Type";

const socialMediaLinks = [
  "https://github.com",
  "https://www.linkedin.com/in/sipsarani-tripathy-458658190",
];

const socialMediaIcons = ["logo-github", "logo-linkedin"];

const Hero = () => {
  const contactRef = useRef(null);
  const [showConnect, setShowConnect] = useState(false);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleConnect = () => {
    setShowConnect((prev) => !prev);
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowConnect(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-10 bg-[#0f172a]"
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          <span className="text-cyan-500">
            Hello!
            <br />
          </span>
          My Name is <br />
          <span className="text-cyan-400">Sipsarani Tripathy</span>
        </h1>

        <h4 className="text-xl md:text-2xl font-semibold text-gray-300 mt-4">
          <Type />
        </h4>

        <button
          onClick={toggleConnect}
          className="mt-8 px-6 py-3 text-white font-medium bg-cyan-600 hover:bg-cyan-700 rounded-full transition duration-300 shadow-lg"
        >
          Connect with Me
        </button>

        {/* Modal */}
        {showConnect && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={toggleConnect}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 rounded-xl p-8 flex flex-col items-center gap-6 min-w-[280px] cursor-default transition transform scale-100"
            >
              <h3 className="text-white text-2xl font-semibold mb-4">
                Connect with Me
              </h3>
              <a
                href={socialMediaLinks[1]}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 text-center bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition"
              >
                LinkedIn Profile
              </a>
              {/* <a
                href={socialMediaLinks[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 text-center bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition"
              >
                GitHub Profile
              </a> */}
              <button
                onClick={toggleConnect}
                className="mt-4 px-4 py-2 text-gray-300 hover:text-white border border-gray-600 rounded-md transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Social Icons */}
        <div className="mt-8 flex justify-center md:justify-start gap-6 text-3xl">
          {socialMediaIcons.map((icon, index) => (
            <a
              key={icon}
              href={socialMediaLinks[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
            >
              <ion-icon name={icon}></ion-icon>
            </a>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <img
          src={my2}
          alt="Sipsarani Tripathy"
          className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-cyan-500"
        />
      </div>

      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;
