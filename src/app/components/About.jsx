"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const AboutSection = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -60, rotateX: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-24 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? "#3b82f6" : "#8b5cf6"
              } 0%, transparent 70%)`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main Title with Advanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: -100, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <motion.h2
              className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              About Me
            </motion.h2>

            {/* Glowing underline */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
              }}
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Main Content Cards */}
            {[
              {
                text: "I'm a developer passionate about creating seamless digital experiences through web and mobile applications. My expertise lies in Next.js and React Native, technologies I've used to build real-world solutions for clients ranging from e-commerce platforms to mobile apps that solve everyday problems.",
                gradient: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-500/30",
              },
              {
                text: "What drives me is the problem-solving aspect of development—taking an idea and transforming it into something functional and meaningful. I've had the opportunity to work on diverse projects, each teaching me something new about user experience, performance optimization, and clean code practices.",
                gradient: "from-purple-500/20 to-pink-500/20",
                border: "border-purple-500/30",
              },
              {
                text: "Currently, I'm expanding my skill set by learning Java to strengthen my backend development capabilities and deepen my understanding of programming fundamentals. I believe in continuous learning because technology evolves rapidly, and staying curious keeps me sharp.",
                gradient: "from-orange-500/20 to-red-500/20",
                border: "border-orange-500/30",
              },
              {
                text: "When I'm not coding, you'll find me on the cricket field or in the pool. Both sports have taught me patience, strategy, and the importance of consistent practice—qualities that translate well into programming.",
                gradient: "from-green-500/20 to-emerald-500/20",
                border: "border-green-500/30",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  z: 50,
                }}
                className={`relative p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br ${item.gradient} border ${item.border} group cursor-pointer`}
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                  backdropFilter: "blur(20px)",
                }}
              >
                <p className="text-gray-100 text-lg leading-relaxed font-medium">
                  {item.text}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} blur-xl`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Interactive Skills & Hobbies */}
          <motion.div style={{ y, opacity }} className="space-y-12">
            {/* Tech Stack Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Tech Arsenal
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    name: "Next.js",
                    level: 90,
                    color: "from-gray-600 to-black",
                    icon: "⚡",
                  },
                  {
                    name: "React Native",
                    level: 85,
                    color: "from-blue-400 to-blue-600",
                    icon: "📱",
                  },
                  {
                    name: "JavaScript",
                    level: 88,
                    color: "from-yellow-400 to-orange-500",
                    icon: "🚀",
                  },
                  {
                    name: "Java",
                    level: 40,
                    color: "from-orange-500 to-red-600",
                    icon: "📚",
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    className="relative p-6 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-white font-semibold">
                        {skill.name}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                    <span className="text-gray-300 text-sm">
                      {skill.level}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hobbies Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Beyond Code
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    name: "Cricket",
                    icon: "🏏",
                    description: "Strategy & Teamwork",
                    gradient: "from-green-400 to-blue-500",
                  },
                  {
                    name: "Swimming",
                    icon: "🏊‍♂️",
                    description: "Discipline & Focus",
                    gradient: "from-blue-400 to-cyan-500",
                  },
                ].map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    variants={floatingVariants}
                    animate="float"
                    transition={{ delay: index * 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      rotateZ: index % 2 === 0 ? 2 : -2,
                    }}
                    className="relative p-6 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 group cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${hobby.gradient} flex items-center justify-center text-2xl shadow-lg`}
                      >
                        {hobby.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {hobby.name}
                        </h4>
                        <p className="text-gray-300">{hobby.description}</p>
                      </div>
                    </div>

                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100"
                      style={{
                        borderImage: `linear-gradient(45deg, transparent, ${hobby.gradient}, transparent) 1`,
                      }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;