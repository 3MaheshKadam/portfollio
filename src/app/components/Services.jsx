"use client";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Requirement Gathering",
      description:
        "Turn your ideas into clear, actionable project specifications and documentation.",
      icon: "📋",
      gradient: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      hoverBorder: "group-hover:border-blue-400",
    },
    {
      title: "Time & Planning",
      description:
        "Accurate project estimates and milestone planning to keep things on track.",
      icon: "📅",
      gradient: "from-purple-50 to-purple-100",
      border: "border-purple-200",
      hoverBorder: "group-hover:border-purple-400",
    },
    {
      title: "UI/UX Collaboration",
      description:
        "Bridge the gap between design and development for pixel-perfect results.",
      icon: "🎨",
      gradient: "from-pink-50 to-pink-100",
      border: "border-pink-200",
      hoverBorder: "group-hover:border-pink-400",
    },
    {
      title: "Full-Stack Development",
      description:
        "End-to-end solutions using React Native and Next.js for web and mobile.",
      icon: "⚡",
      gradient: "from-yellow-50 to-yellow-100",
      border: "border-yellow-200",
      hoverBorder: "group-hover:border-yellow-400",
    },
    {
      title: "Testing & Debugging",
      description:
        "Thorough testing processes and quick bug fixes to ensure quality delivery.",
      icon: "🔍",
      gradient: "from-green-50 to-green-100",
      border: "border-green-200",
      hoverBorder: "group-hover:border-green-400",
    },
    {
      title: "Production Deployment",
      description:
        "Smooth launches with proper environment setup and performance optimization.",
      icon: "🚀",
      gradient: "from-cyan-50 to-cyan-100",
      border: "border-cyan-200",
      hoverBorder: "group-hover:border-cyan-400",
    },
    {
      title: "Domain Configuration",
      description:
        "Complete domain setup, DNS management, and SSL certificate configuration.",
      icon: "🌐",
      gradient: "from-indigo-50 to-indigo-100",
      border: "border-indigo-200",
      hoverBorder: "group-hover:border-indigo-400",
    },
    {
      title: "Server Management",
      description:
        "Reliable server setup, monitoring, and maintenance for optimal performance.",
      icon: "🖥️",
      gradient: "from-gray-50 to-gray-100",
      border: "border-gray-200",
      hoverBorder: "group-hover:border-gray-400",
    },
    {
      title: "CI/CD Pipeline",
      description:
        "Automated deployment workflows for faster, more reliable code releases.",
      icon: "🔄",
      gradient: "from-orange-50 to-orange-100",
      border: "border-orange-200",
      hoverBorder: "group-hover:border-orange-400",
    },
    {
      title: "Bug & Error Solving",
      description:
        "Quick diagnosis and resolution of technical issues and performance problems.",
      icon: "🛠️",
      gradient: "from-red-50 to-red-100",
      border: "border-red-200",
      hoverBorder: "group-hover:border-red-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Can I Help With?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial concept to production deployment, I provide
            comprehensive development services to bring your ideas to life with
            modern technologies and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className={`group relative bg-gradient-to-br ${service.gradient} rounded-2xl p-6 border-2 ${service.border} ${service.hoverBorder} transition-all duration-300 cursor-pointer h-48`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 rounded-2xl opacity-10">
                <div
                  className="h-full w-full rounded-2xl"
                  style={{
                    backgroundImage: `
                    radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 40% 80%, rgba(120, 219, 226, 0.3) 0%, transparent 50%)
                  `,
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  className="text-4xl mb-4"
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-4 flex items-center text-gray-600 text-sm font-medium"
                >
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl`}
                />
              </div>

              {/* Border Animation */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                whileHover={{
                  borderImageSource: `linear-gradient(45deg, ${
                    service.border.includes("blue")
                      ? "#3b82f6"
                      : service.border.includes("purple")
                      ? "#8b5cf6"
                      : service.border.includes("pink")
                      ? "#ec4899"
                      : service.border.includes("yellow")
                      ? "#f59e0b"
                      : service.border.includes("green")
                      ? "#10b981"
                      : service.border.includes("cyan")
                      ? "#06b6d4"
                      : service.border.includes("indigo")
                      ? "#6366f1"
                      : service.border.includes("orange")
                      ? "#f97316"
                      : service.border.includes("red")
                      ? "#ef4444"
                      : "#6b7280"
                  }, transparent, ${
                    service.border.includes("blue")
                      ? "#3b82f6"
                      : service.border.includes("purple")
                      ? "#8b5cf6"
                      : service.border.includes("pink")
                      ? "#ec4899"
                      : service.border.includes("yellow")
                      ? "#f59e0b"
                      : service.border.includes("green")
                      ? "#10b981"
                      : service.border.includes("cyan")
                      ? "#06b6d4"
                      : service.border.includes("indigo")
                      ? "#6366f1"
                      : service.border.includes("orange")
                      ? "#f97316"
                      : service.border.includes("red")
                      ? "#ef4444"
                      : "#6b7280"
                  })`,
                  borderImageSlice: 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and see how I can help bring your
              vision to life with clean code, modern practices, and reliable
              delivery.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
