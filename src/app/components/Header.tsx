"use client";
import { useState, useEffect } from "react";

export default function FloatingHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // show header when scrolling up and not at the very top
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setIsVisible(true);
      }
      // hide header when scrolling down or at the very top
      else if (currentScrollY > lastScrollY || currentScrollY <= 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <nav className="bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
        <ul className="flex items-center space-x-8 text-white text-sm font-medium">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("experiences")}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Experiences
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Testimonials
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
