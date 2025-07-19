"use client";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
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
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      // Use requestAnimationFrame for smoother scrolling
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 800;
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const easeInOutQuart = (t) => {
          return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
        };

        const progressRatio = Math.min(progress / duration, 1);
        const easedProgress = easeInOutQuart(progressRatio);

        window.scrollTo(0, startPosition + distance * easedProgress);

        if (progress < duration) {
          window.requestAnimationFrame(step);
        } else {
          window.history.replaceState(null, null, href);
          setActiveSection(targetId);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, []);

  // Enhanced scroll handler with throttling and smoothed values
  useEffect(() => {
    let ticking = false;
    let lastScrollTop = 0;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.pageYOffset;
          setScrollY(currentScrollY);

          const newScrolled = currentScrollY > 30;
          if (newScrolled !== scrolled) {
            setScrolled(newScrolled);
          }

          if (Math.abs(currentScrollY - lastScrollTop) > 10) {
            const sections = document.querySelectorAll("section");
            let currentSection = "home";

            sections.forEach((section) => {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.offsetHeight;
              const scrollPosition = currentScrollY + 120;

              if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
              ) {
                currentSection = section.id;
              }
            });

            if (currentSection !== activeSection) {
              setActiveSection(currentSection);
            }

            lastScrollTop = currentScrollY;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, activeSection]);

  const isOnHome = activeSection === "home";
  const headerOpacity = Math.min(scrollY / 100, 1);
  const backgroundOpacity = scrolled ? 0.95 : isOnHome ? 0.85 : 0.1;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-700 ease-out will-change-transform`}
      style={{
        backgroundColor: scrolled
          ? `rgba(255, 255, 255, ${backgroundOpacity})`
          : isOnHome
          ? `rgba(239, 246, 255, ${backgroundOpacity})`
          : `rgba(255, 255, 255, ${backgroundOpacity})`,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? `1px solid rgba(59, 130, 246, ${headerOpacity * 0.1})`
          : "none",
        boxShadow: scrolled
          ? `0 20px 25px -5px rgba(59, 130, 246, ${
              headerOpacity * 0.05
            }), 0 10px 10px -5px rgba(59, 130, 246, ${headerOpacity * 0.04})`
          : "none",
        paddingTop: scrolled ? "12px" : "20px",
        paddingBottom: scrolled ? "12px" : "20px",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="transform hover:scale-110 transition-all duration-500 hover:rotate-1 will-change-transform">
            <a
              href="#home"
              className="flex items-center group"
              onClick={(e) => smoothScroll(e, "#home")}
            >
              <span
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent hover:from-violet-600 hover:to-blue-600 transition-all duration-500 will-change-contents"
                style={{
                  filter: scrolled
                    ? "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))"
                    : "none",
                }}
              >
                Mahesh Kadam
              </span>
              <div className="ml-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full animate-pulse"></div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <div
                  key={item.name}
                  className="transition-all duration-500 will-change-transform"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    transform: isActive ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <a
                    href={item.href}
                    className="relative px-4 py-2.5 mx-1 font-medium rounded-full overflow-hidden group will-change-transform"
                    onClick={(e) => smoothScroll(e, item.href)}
                  >
                    {/* Background layer - matches text timing */}
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-violet-600 opacity-100 scale-100"
                          : "bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                      }`}
                    />

                    {/* Shadow layer */}
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        isActive
                          ? "shadow-lg shadow-blue-500/20"
                          : "shadow-lg shadow-blue-500/0 group-hover:shadow-blue-500/20"
                      }`}
                    />

                    {/* Text - same timing as background */}
                    <span
                      className={`relative z-10 transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-gray-700 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <div
                        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full transition-all duration-300"
                        style={{
                          animation:
                            "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                        }}
                      />
                    )}
                  </a>
                </div>
              );
            })}

            {/* Social Links */}
            <div
              className="flex gap-2 ml-6 pl-6 transition-all duration-500"
              style={{
                borderLeft: `1px solid rgba(59, 130, 246, ${
                  headerOpacity * 0.3
                })`,
              }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-2.5 rounded-full overflow-hidden group will-change-transform transition-transform duration-300 hover:scale-110 hover:rotate-12"
                  style={{ animationDelay: `${(index + 6) * 50}ms` }}
                >
                  {/* Background */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  {/* Icon - matches background timing */}
                  <social.icon className="w-5 h-5 relative z-10 text-gray-600 group-hover:text-white transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="mailto:maheshkadam9298@gmail.com"
              className="ml-6 px-6 py-3 rounded-full font-semibold relative overflow-hidden group will-change-transform transition-all duration-300 hover:scale-105"
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* Shadow */}
              <div className="absolute inset-0 shadow-xl shadow-blue-500/0 group-hover:shadow-blue-500/20 transition-all duration-300 rounded-full" />

              {/* Content - matches background timing */}
              <span className="relative z-10 flex items-center gap-2 text-white transition-all duration-300">
                Hire Me
                <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-full relative overflow-hidden group will-change-transform transition-all duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Background */}
            <div
              className="absolute inset-0 rounded-full transition-all duration-300"
              style={{
                backgroundColor: scrolled
                  ? "rgba(59, 130, 246, 0.05)"
                  : "rgba(139, 92, 246, 0.05)",
              }}
            />

            {/* Icon - matches background timing */}
            <div className="relative z-10">
              {isOpen ? (
                <X
                  className="w-6 h-6 transform rotate-180 transition-all duration-300"
                  style={{
                    color: scrolled ? "#3B82F6" : "#8B5CF6",
                  }}
                />
              ) : (
                <Menu
                  className="w-6 h-6 transition-all duration-300"
                  style={{
                    color: scrolled ? "#3B82F6" : "#8B5CF6",
                  }}
                />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-700 ease-out will-change-transform ${
            isOpen ? "max-h-96 opacity-100 mt-6 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="flex flex-col space-y-3 rounded-2xl p-6 shadow-2xl border transition-all duration-500"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderColor: "rgba(59, 130, 246, 0.1)",
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.1)",
              transform: isOpen ? "translateY(0)" : "translateY(-20px)",
            }}
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative block font-medium py-3 px-5 rounded-xl overflow-hidden group will-change-transform transition-transform duration-300 hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                  onClick={(e) => smoothScroll(e, item.href)}
                >
                  {/* Background - matches text timing */}
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-violet-600 opacity-100"
                        : "bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  {/* Shadow */}
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "shadow-lg shadow-blue-500/20"
                        : "shadow-lg shadow-blue-500/0 group-hover:shadow-blue-500/20"
                    }`}
                  />

                  {/* Text - same timing as background */}
                  <span
                    className={`relative z-10 transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-700 group-hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                </a>
              );
            })}

            <div
              className="flex gap-4 pt-6 px-2 transition-all duration-500"
              style={{
                borderTop: "1px solid rgba(59, 130, 246, 0.1)",
              }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-3 rounded-full overflow-hidden group will-change-transform transition-all duration-300 hover:scale-110 hover:rotate-12"
                  style={{ animationDelay: `${(index + 6) * 100}ms` }}
                >
                  {/* Background */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  {/* Icon - matches background timing */}
                  <social.icon className="w-5 h-5 relative z-10 text-gray-600 group-hover:text-white transition-all duration-300" />
                </a>
              ))}
            </div>

            <a
              href="mailto:maheshkadam9298@gmail.com"
              className="relative mt-6 px-6 py-4 rounded-xl font-semibold text-center overflow-hidden group will-change-transform transition-all duration-300 hover:scale-105"
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* Shadow */}
              <div className="absolute inset-0 shadow-xl shadow-blue-500/20 transition-all duration-300 rounded-xl" />

              {/* Content - matches background timing */}
              <span className="relative z-10 flex items-center justify-center gap-2 text-white transition-all duration-300">
                Hire Me
                <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
