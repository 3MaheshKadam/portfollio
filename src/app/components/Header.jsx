"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-sky-500 flex items-center justify-center text-white font-bold text-xl">
                MK
              </div>
              <span className="text-xl font-semibold text-gray-800 hidden sm:block">
                Mahesh Kadam
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <div className="flex gap-4 ml-4">
              <a
                href="https://github.com/3MaheshKadam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mahesh-kadam3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-sky-600 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <a
              href="mailto:maheshkadam9298@gmail.com"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-full font-medium hover:shadow-md transition-all duration-200"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex gap-4 pt-2 px-4">
                <a
                  href="https://github.com/3MaheshKadam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mahesh-kadam3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-sky-600 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>

              <a
                href="mailto:maheshkadam9298@gmail.com"
                className="mt-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-full font-medium text-center hover:shadow-md transition-all duration-200"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
