import React from "react";
import {
  ExternalLink,
  Code,
  Globe,
  Smartphone,
  Building,
  ShoppingCart,
  FileText,
  Heart,
  Users,
  Car,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

const Projects = () => {
  const getDomainIcon = (domain) => {
    const domainLower = domain.toLowerCase();
    if (domainLower.includes("e-commerce") || domainLower.includes("retail"))
      return ShoppingCart;
    if (domainLower.includes("healthcare")) return Stethoscope;
    if (domainLower.includes("education")) return GraduationCap;
    if (domainLower.includes("society") || domainLower.includes("construction"))
      return Building;
    if (domainLower.includes("insurance") || domainLower.includes("document"))
      return FileText;
    if (domainLower.includes("delivery") || domainLower.includes("q-commerce"))
      return Car;
    if (domainLower.includes("corporate") || domainLower.includes("startup"))
      return Users;
    if (domainLower.includes("dairy")) return Heart;
    return Globe;
  };

  const getTechBadgeColor = (tech) => {
    if (!tech) return "bg-blue-100 text-blue-800";
    const techLower = tech.toLowerCase();
    if (techLower.includes("react native"))
      return "bg-purple-100 text-purple-800";
    if (techLower.includes("flutter")) return "bg-cyan-100 text-cyan-800";
    return "bg-green-100 text-green-800";
  };

  const freelanceProjects = [
    {
      title: "Shrimant.in",
      domain: "E-commerce",
      url: "https://www.shrimant.in",
      description:
        "A traditional clothing e-commerce platform with product listing, cart management, and admin panel to manage orders and stock.",
    },
  ];

  const delxnProjects = [
    {
      title: "Rahul Nagar",
      domain: "Society Reconstruction Management",
      url: "https://www.rahulnagar.in",
      description:
        "A web portal for society management with features like event updates, document uploads, notice board, and meeting management.",
    },
    {
      title: "Policy Sansar",
      domain: "Insurance Lead Collection",
      url: "https://www.policysansar.com",
      description:
        "Collects policy enquiries from users and passes them to agents via admin panel. Includes customer management and agent follow-ups.",
    },
    {
      title: "Dokument Guru",
      domain: "Document Request & Management",
      url: "https://dokument-guru.vercel.app",
      description:
        "Ticket-based document processing platform with multi-desk workflow. Includes billing, credit management, and status tracking.",
    },
    {
      title: "Shree Siddhi Jewellers",
      domain: "Retail / Inventory",
      description:
        "Showcases jewelry products and handles customer enquiries. Built with responsive UI and tailored to store branding.",
    },
    {
      title: "Delxn Tech Official Website",
      domain: "Corporate Portfolio",
      url: "https://www.delxntech.com/",
      description:
        "Landing page and service listing site for Delxn Tech. Includes team info, contact, and tech expertise display.",
    },
    {
      title: "Sathe Dairy App",
      domain: "Dairy Product Management",
      tech: "React Native",
      description:
        "Mobile app to manage daily milk orders, subscriptions, delivery tracking, and payments.",
    },
    {
      title: "Booking One Omega (USA Client)",
      domain: "SaaS Multi-Tenant Booking System",
      url: "https://booking-one-omega.vercel.app/",
      description:
        "Multi-tenant appointment booking system with SaaS architecture and admin roles.",
    },
    {
      title: "Quick Commerce App",
      domain: "Q-Commerce / Delivery",
      tech: "Flutter",
      description:
        "Grocery delivery app with real-time tracking, inventory, and delivery agent integration.",
    },
    {
      title: "Innosntech",
      domain: "Startup IT Company Website",
      description:
        "Landing page for IT startup consulting company. Highlights services, team, and contact.",
    },
    {
      title: "Anantshree.co.in",
      domain: "Construction Landing Page",
      url: "https://www.anantshree.co.in/",
      description:
        "Static responsive site for showcasing projects and values of a real estate firm.",
    },
    {
      title: "Debugger Tech",
      domain: "Education Platform",
      description:
        "E-learning platform with programming content, student registration, and course access.",
    },
    {
      title: "Doctor Clinic SaaS Application",
      domain: "Healthcare / SaaS",
      description:
        "App for multi-clinic management: doctor profiles, patient records, appointments, and analytics.",
    },
  ];

  const ProjectCard = ({ project, category }) => {
    const IconComponent = getDomainIcon(project.domain);

    return (
      <div className="group bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out hover:border-blue-300">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
              <IconComponent className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group"
                >
                  {project.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ) : (
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
              )}
              <p className="text-sm text-gray-600 mt-1">{project.domain}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
            {category}
          </span>
          {project.tech && (
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${getTechBadgeColor(
                project.tech
              )} flex items-center gap-1`}
            >
              <Code className="w-3 h-3" />
              {project.tech}
            </span>
          )}
        </div>

        <p className="text-gray-700 text-sm leading-relaxed">
          {project.description}
        </p>

        {project.url && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
            >
              Visit Project
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my development journey, from freelance ventures to
            collaborative team projects
          </p>
        </div>

        {/* Freelance Projects */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                🧑‍💻 Freelance Projects
              </h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-green-200 to-transparent ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freelanceProjects.map((project, index) => (
              <ProjectCard key={index} project={project} category="Freelance" />
            ))}
          </div>
        </div>

        {/* Delxn Tech Projects */}
        <div>
          <div className="flex items-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                🏢 Delxn Tech Projects
              </h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {delxnProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                category="Team Project"
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">13+</div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">8</div>
              <div className="text-gray-600">Live Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">5</div>
              <div className="text-gray-600">Different Domains</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">3</div>
              <div className="text-gray-600">Tech Stacks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
