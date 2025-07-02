"use client";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/3MaheshKadam",
      icon: Github,
      color: "hover:text-violet-400",
    },
    {
      href: "https://www.linkedin.com/in/mahesh-kadam3/",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    { href: "#", icon: Twitter, color: "hover:text-indigo-400" },
  ];

  // Enhanced smooth scroll function with easing
  const smoothScroll = useCallback((e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 90;
      const targetPosition = targetElement.offsetTop - headerHeight;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = Math.min(1000, Math.abs(distance) * 2);
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        // Enhanced easing function for smoother animation
        const easeInOutQuart =
          percentage < 0.5
            ? 8 * percentage * percentage * percentage * percentage
            : 1 - Math.pow(-2 * percentage + 2, 4) / 2;

        window.scrollTo(0, startPosition + distance * easeInOutQuart);

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
      window.history.replaceState(null, null, href);
    }
  }, []);

  // Enhanced scroll handler with intersection observer
  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;
    const scrollThreshold = 30;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(lastScrollY > scrollThreshold);

          // Enhanced active section detection
          const sections = document.querySelectorAll("section");
          const viewportHeight = window.innerHeight;

          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            if (
              sectionTop <= viewportHeight * 0.3 &&
              sectionTop + sectionHeight > viewportHeight * 0.3
            ) {
              setActiveSection(section.id);
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isOnHome = activeSection === "home";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-xl shadow-blue-500/5 border-b border-blue-100/20 py-3"
          : isOnHome
          ? "bg-gradient-to-r from-blue-50/80 via-violet-50/80 to-indigo-50/80 backdrop-blur-lg py-5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <div className="transform hover:scale-110 transition-all duration-300 hover:rotate-1">
            <a
              href="#home"
              className="flex items-center group"
              onClick={(e) => smoothScroll(e, "#home")}
            >
              <span
                className={`text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent hover:from-violet-600 hover:to-blue-600 transition-all duration-300 ${
                  scrolled ? "drop-shadow-sm" : ""
                }`}
              >
                Mahesh Kadam
              </span>
              <div className="ml-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full animate-pulse"></div>
            </a>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a
                  href={item.href}
                  className={`relative px-4 py-2.5 mx-1 font-medium rounded-full transition-all duration-300 group overflow-hidden ${
                    activeSection === item.href.replace("#", "")
                      ? "text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg shadow-blue-500/25 scale-105"
                      : "text-gray-700 hover:text-white hover:scale-105"
                  }`}
                  onClick={(e) => smoothScroll(e, item.href)}
                >
                  {/* Animated background for hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-110 transition-all duration-500"></div>

                  <span className="relative z-10">{item.name}</span>

                  {/* Active indicator */}
                  {activeSection === item.href.replace("#", "") && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  )}
                </a>
              </div>
            ))}

            {/* Enhanced Social Links */}
            <div className="flex gap-2 ml-6 pl-6 border-l border-gradient-to-b from-blue-200 to-violet-200">
              {socialLinks.map((social, index) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 transition-all duration-300 rounded-full hover:scale-110 hover:rotate-12 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-500 hover:shadow-lg hover:shadow-blue-500/25"
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <a
              href="mailto:maheshkadam9298@gmail.com"
              className="ml-6 px-6 py-3 text-white rounded-full font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                Hire Me
                <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </a>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            className={`md:hidden p-3 transition-all duration-300 focus:outline-none rounded-full hover:scale-110 ${
              scrolled
                ? "text-blue-600 hover:bg-blue-50"
                : "text-violet-600 hover:bg-violet-50"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative">
              {isOpen ? (
                <X className="w-6 h-6 transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 transform transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-3 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl shadow-blue-500/10 border border-blue-100/20">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block font-medium py-3 px-5 rounded-xl transition-all duration-300 hover:scale-105 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg shadow-blue-500/25"
                      : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-500"
                  }`}
                  onClick={(e) => smoothScroll(e, item.href)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </a>
              ))}

              <div className="flex gap-4 pt-6 px-2 border-t border-gradient-to-r from-blue-100 to-violet-100">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-500 transition-all duration-300 rounded-full hover:scale-110 hover:rotate-12"
                    style={{ animationDelay: `${(index + 5) * 100}ms` }}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <a
                href="mailto:maheshkadam9298@gmail.com"
                className="mt-6 px-6 py-4 text-white rounded-xl font-semibold text-center bg-gradient-to-r from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Hire Me
                  <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
