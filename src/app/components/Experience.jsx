"use client";
import React, { useState } from "react";
import { Briefcase, Calendar, Rocket, Code2, ArrowUpRight } from "lucide-react";

const ExperienceSection = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      title: "SDE Internship",
      company: "Delxn Tech",
      period: "September 2024 - Present",
      description:
        "Worked on 12 projects across diverse domains including insurance, metal, health, logistics, SaaS, and quick commerce. Focused on scalable, multi-tenant and high-performance web applications.",
      achievements: [
        "Developed multi-tenant SaaS applications like Garden Management (USA)",
        "Built a logistics tracking and quick-commerce e-com app",
        "Created insurance and mental healthcare dashboards",
        "Implemented CI/CD pipelines and design systems integration",
      ],
      technologies: [
        "Next.js",
        "React",
        "React Native",
        "AWS",
        "Node.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      period: "2023 - 2024",
      description:
        "Delivered custom web solutions for clients including a café management system, a saloon appointment booking platform, and an e-commerce store.",
      achievements: [
        "Developed complete Café Management System with analytics",
        "Built e-commerce app with cart, auth, and payment integration",
        "Delivered responsive booking platform for salons",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "JavaScript",
        "Firebase",
        "CSS3",
      ],
    },
  ];

  return (
    <section className="relative py-20 bg-white text-gray-800 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left column */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-0.5 w-16 bg-gradient-to-r from-purple-400 to-pink-400" />
              <h2 className="text-lg font-semibold text-purple-600 tracking-wider">
                CAREER JOURNEY
              </h2>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="">Experience</span>
            </h1>
            <p className="text-base text-gray-600 mb-10 max-w-md">
              Professional journey from solving client problems as a freelancer
              to building scalable solutions at tech companies.
            </p>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExperience(index)}
                  className={`group w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    activeExperience === index
                      ? "bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 shadow-md"
                      : "bg-gray-100 border border-gray-200 hover:bg-gray-200"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3
                        className={`text-xl font-bold ${
                          activeExperience === index
                            ? "text-gray-900"
                            : "text-gray-700"
                        }`}
                      >
                        {exp.title}
                      </h3>
                      <p className="text-purple-500 font-medium flex items-center gap-2 mt-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </p>
                    </div>
                    <ArrowUpRight
                      className={`w-6 h-6 ${
                        activeExperience === index
                          ? "text-pink-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-4 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="lg:w-2/3">
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 lg:p-12 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-100 rounded-xl">
                  {activeExperience === 0 ? (
                    <Rocket className="w-8 h-8 text-pink-500" />
                  ) : (
                    <Code2 className="w-8 h-8 text-purple-500" />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {experiences[activeExperience].title}
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-purple-600 font-medium">
                      {experiences[activeExperience].company}
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-500">
                      {experiences[activeExperience].period}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-base text-gray-700 mb-8 leading-relaxed">
                {experiences[activeExperience].description}
              </p>

              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="h-0.5 w-6 bg-gradient-to-r from-purple-400 to-pink-400" />
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {experiences[activeExperience].achievements.map(
                  (point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1.5">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  )
                )}
              </ul>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {experiences[activeExperience].technologies.map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
