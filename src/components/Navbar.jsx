import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuLinks = [
    { name: "HOME", link: "#home", id: "home" },
    { name: "ABOUT", link: "#about", id: "about" },
    { name: "SKILLS", link: "#skills", id: "skills" },
    { name: "EXPERIENCE", link: "#experience", id: "experience" },
    // { name: "PROJECTS", link: "#projects", id: "projects" },
    { name: "EDUCATION", link: "#education", id: "education" },
    { name: "CONTACT", link: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full left-0 top-0 z-[999] bg-white shadow-md text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <h4 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Sipsa<span className="text-cyan-600">rani</span>
          </h4>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-8 text-lg font-medium">
            {menuLinks.map((menu, i) => (
              <li key={i}>
                <a
                  href={menu.link}
                  className={`transition-colors duration-300 ${
                    activeSection === menu.id
                      ? "text-cyan-600"
                      : "hover:text-cyan-600"
                  }`}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer z-[1001] md:hidden text-3xl text-gray-900"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* Mobile Menu Drawer */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: open ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="md:hidden fixed top-0 right-0 h-full w-2/3 bg-white text-gray-900 z-[1000] shadow-lg"
        >
          <ul className="flex flex-col justify-center items-center h-full gap-8 text-lg font-medium">
            {menuLinks.map((menu, i) => (
              <li key={i} onClick={() => setOpen(false)}>
                <a
                  href={menu.link}
                  className={`transition-colors duration-300 ${
                    activeSection === menu.id
                      ? "text-cyan-600"
                      : "hover:text-cyan-600"
                  }`}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
