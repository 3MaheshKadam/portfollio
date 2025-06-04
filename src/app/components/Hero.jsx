"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Mail,
  Code,
  Smartphone,
  Github,
  Linkedin,
  Download,
  Star,
  Zap,
  Terminal,
  Globe,
  Coffee,
} from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    "Full Stack Developer",
    "React Native Expert",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let index = 0;
    const timer = setInterval(() => {
      if (index <= currentRole.length) {
        setTypedText(currentRole.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentRoleIndex]);

  const skills = [
    { name: "React Native", icon: "📱", color: "from-blue-500 to-cyan-500" },
    { name: "Next.js", icon: "⚡", color: "from-purple-500 to-pink-500" },
    { name: "AWS", icon: "☁️", color: "from-orange-500 to-yellow-500" },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-purple-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-400",
    },
    { icon: Mail, label: "Email", href: "#", color: "hover:text-green-400" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden relative">
      {/* Enhanced Interactive Background */}
      <div className="absolute inset-0">
        {/* Dynamic gradient orbs that follow mouse */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${20 + (mousePosition.x / window.innerWidth) * 10}%`,
            top: `${20 + (mousePosition.y / window.innerHeight) * 10}%`,
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            right: `${20 + (mousePosition.x / window.innerWidth) * 10}%`,
            bottom: `${20 + (mousePosition.y / window.innerHeight) * 10}%`,
          }}
        />

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 animate-pulse" />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-600/10 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Enhanced floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              backgroundColor: `rgba(${147 + Math.random() * 50}, ${
                51 + Math.random() * 100
              }, 234, ${0.3 + Math.random() * 0.4})`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.4) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 flex items-center min-h-screen relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          {/* Left Column - Enhanced Content */}
          <div className="space-y-8">
            {/* Status Badge with Animation */}

            {/* Main Heading with Enhanced Animation */}
            <div className="space-y-8">
              <h1 className="text-6xl md:text-6xl lg:text-8xl font-black leading-none">
                <div className="overflow-hidden">
                  <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default">
                    Hi, I'm
                  </span>
                </div>
                <div className="flex items-center gap-6 mt-4">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-1000 cursor-default">
                    Mahesh
                  </span>
                  <div className="relative">
                    <span className="inline-block text-6xl animate-bounce hover:animate-spin hover:scale-125 transition-all duration-500 cursor-pointer">
                      👋
                    </span>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </h1>
            </div>

            {/* Dynamic Role Display */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-3 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300 group">
                  <Code className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" />
                  <span className="text-purple-200 font-medium">
                    Full Stack
                  </span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm hover:bg-blue-500/20 transition-all duration-300 group">
                  <Smartphone className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-blue-200 font-medium">Mobile Dev</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm hover:bg-green-500/20 transition-all duration-300 group">
                  <Zap className="w-5 h-5 text-green-400 group-hover:rotate-12 transition-transform" />
                  <span className="text-green-200 font-medium">
                    Performance
                  </span>
                </div>
              </div>

              <div className="">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-200 leading-tight">
                  <span className="inline-block border-r-2 border-purple-400 animate-pulse min-h-[1.2em]">
                    {typedText}
                  </span>
                </h2>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Crafting pixel-perfect, high-performance web and mobile
                  experiences with cutting-edge technologies.
                  <span className="text-purple-300 font-medium">
                    {" "}
                    Passionate about creating intuitive user interfaces
                  </span>{" "}
                  that users love and remember.
                </p>
              </div>
            </div>

            {/* Enhanced Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative p-4 bg-gray-800/20 border border-gray-700/30 backdrop-blur-sm rounded-2xl hover:border-purple-500/50 transition-all duration-500 cursor-pointer hover:scale-105 hover:bg-gray-800/40"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  />
                  <div className="relative flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 ">
              <button className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-4 overflow-hidden hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-pink-600/40 blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <Star className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />

                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </button>

              <button className="group relative border-2 border-gray-600/50 hover:border-purple-400/50 bg-gray-900/10 backdrop-blur-sm px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:bg-purple-600/10 flex items-center justify-center gap-4 hover:scale-105">
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Right Column - Enhanced 3D Illustration */}
          <div className="relative flex justify-center items-center">
            <div className="relative group">
              {/* Social Links */}
              <div className="flex items-center gap-6 pt-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`group relative p-4 bg-gray-800/20 border border-gray-700/30 backdrop-blur-sm rounded-xl transition-all duration-300  ${link.color} `}
                  >
                    <link.icon className="w-6 h-6 group-hover:scale-125 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 " />
                  </a>
                ))}
              </div>
              {/* Main 3D Container */}
              <div className="relative w-[500px] h-[500px] perspective-1000">
                <div className="relative w-full h-full transform-gpu transition-all duration-1000 hover:rotate-y-12 hover:rotate-x-3">
                  {/* Glass Container */}
                  <div className="relative w-full h-full bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-3xl flex items-center justify-center backdrop-blur-2xl border border-purple-500/20 shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-1000">
                    {/* Enhanced Code Editor */}
                    <div className="relative w-96 h-80 bg-gray-900/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden transform transition-all duration-1000 hover:scale-105 group-hover:rotate-3">
                      {/* Title Bar */}
                      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex gap-2">
                            <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg hover:scale-125 transition-transform cursor-pointer" />
                            <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg hover:scale-125 transition-transform cursor-pointer" />
                            <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg hover:scale-125 transition-transform cursor-pointer" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-purple-400" />
                            <span className="text-gray-300 font-medium">
                              portfolio.jsx
                            </span>
                          </div>
                        </div>
                        <Globe className="w-5 h-5 text-gray-500 hover:text-purple-400 transition-colors cursor-pointer" />
                      </div>

                      {/* Code Content with Enhanced Syntax */}
                      <div className="p-6 text-sm font-mono space-y-4 bg-gradient-to-b from-gray-900 to-gray-800 h-full overflow-hidden">
                        <div className="text-purple-400 font-bold flex items-center gap-2">
                          <Coffee className="w-4 h-4" />
                          <span className="text-blue-400">const</span> developer
                          = {"{"}
                        </div>
                        <div className="text-blue-300 ml-6 flex items-center gap-2">
                          <span className="text-green-400">name:</span>
                          <span className="text-yellow-300">
                            "Mahesh Kadam"
                          </span>
                          ,
                        </div>
                        <div className="text-blue-300 ml-6 flex items-center gap-2">
                          <span className="text-green-400">role:</span>
                          <span className="text-yellow-300">
                            "Full Stack Developer"
                          </span>
                          ,
                        </div>
                        <div className="text-blue-300 ml-6">
                          <span className="text-green-400">skills:</span>
                          <span className="text-cyan-300">[</span>
                        </div>
                        <div className="text-yellow-300 ml-10 space-y-1">
                          <div>"React Native" 📱,</div>
                          <div>"Next.js" ⚡,</div>
                          <div>"AWS" ☁️,</div>
                        </div>
                        <div className="text-cyan-300 ml-6">],</div>
                        <div className="text-blue-300 ml-6">
                          <span className="text-green-400">passion:</span>
                          <span className="text-pink-300">
                            "Creating Magic ✨"
                          </span>
                        </div>
                        <div className="text-purple-400 font-bold">{"}"}</div>
                      </div>
                    </div>

                    {/* Enhanced Floating Tech Icons */}
                    {[
                      {
                        icon: "⚛️",
                        position: "top-0 right-0",
                        color: "from-blue-500/30 to-cyan-500/30",
                        delay: 0,
                      },
                      {
                        icon: "📱",
                        position: "bottom-0 left-0",
                        color: "from-purple-500/30 to-pink-500/30",
                        delay: 1,
                      },
                      {
                        icon: "☁️",
                        position: "top-1/4 left-0",
                        color: "from-green-500/30 to-emerald-500/30",
                        delay: 0.5,
                      },
                      {
                        icon: "⚡",
                        position: "top-1/2 right-0",
                        color: "from-yellow-500/30 to-orange-500/30",
                        delay: 2,
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`absolute ${item.position} w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg hover:scale-125 transition-all duration-500 cursor-pointer`}
                        style={{
                          animation: `float 4s ease-in-out infinite`,
                          animationDelay: `${item.delay}s`,
                        }}
                      >
                        <span className="text-3xl filter drop-shadow-lg hover:animate-spin">
                          {item.icon}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Glow Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 rounded-3xl blur-3xl -z-10 group-hover:from-purple-600/20 group-hover:via-pink-600/20 group-hover:to-blue-600/20 transition-all duration-1000" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(5deg);
          }
          50% {
            transform: translateY(-15px) rotate(0deg);
          }
          75% {
            transform: translateY(-5px) rotate(-5deg);
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-gpu {
          transform-style: preserve-3d;
        }

        .hover\\:rotate-y-12:hover {
          transform: rotateY(12deg);
        }

        .hover\\:rotate-x-3:hover {
          transform: rotateX(3deg);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
