import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Education from "./components/Education";
import ExperienceSection from "./components/ExperienceSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <ExperienceSection />
      <Hireme />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
