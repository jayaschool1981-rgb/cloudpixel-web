'use client';

import Hero from "../components/Hero";
import About from "../components/about";
import Services from "../components/Services"; // ✅ NEW (important)
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      {/* 🧠 Hero Section */}
      <Hero />

      {/* 🛠 Services Section (Razorpay Compliance) */}
      <Services />

      {/* 👤 About Me */}
      <About />

      {/* 💡 Skills */}
      <Skills />

      {/* 🚀 Projects */}
      <Projects />

      {/* 🎓 Education */}
      <Education />

      {/* 📞 Contact */}
      <Contact />
    </>
  );
}
