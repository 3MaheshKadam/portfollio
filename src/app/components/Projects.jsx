// import React from "react";
// import {
//   ExternalLink,
//   Code,
//   Globe,
//   Smartphone,
//   Building,
//   ShoppingCart,
//   FileText,
//   Heart,
//   Users,
//   Car,
//   GraduationCap,
//   Stethoscope,
// } from "lucide-react";

// const Projects = () => {
//   const getDomainIcon = (domain) => {
//     const domainLower = domain.toLowerCase();
//     if (domainLower.includes("e-commerce") || domainLower.includes("retail"))
//       return ShoppingCart;
//     if (domainLower.includes("healthcare")) return Stethoscope;
//     if (domainLower.includes("education")) return GraduationCap;
//     if (domainLower.includes("society") || domainLower.includes("construction"))
//       return Building;
//     if (domainLower.includes("insurance") || domainLower.includes("document"))
//       return FileText;
//     if (domainLower.includes("delivery") || domainLower.includes("q-commerce"))
//       return Car;
//     if (domainLower.includes("corporate") || domainLower.includes("startup"))
//       return Users;
//     if (domainLower.includes("dairy")) return Heart;
//     return Globe;
//   };

//   const getTechBadgeColor = (tech) => {
//     if (!tech) return "bg-blue-100 text-blue-800";
//     const techLower = tech.toLowerCase();
//     if (techLower.includes("react native"))
//       return "bg-purple-100 text-purple-800";
//     if (techLower.includes("flutter")) return "bg-cyan-100 text-cyan-800";
//     return "bg-green-100 text-green-800";
//   };

//   const freelanceProjects = [
//     {
//       title: "Shrimant.in",
//       domain: "E-commerce",
//       url: "https://www.shrimant.in",
//       description:
//         "A traditional clothing e-commerce platform with product listing, cart management, and admin panel to manage orders and stock.",
//     },
//   ];

//   const delxnProjects = [
//     {
//       title: "Dokument Guru",
//       domain: "Document Request & Management",
//       url: "https://dokument-guru.vercel.app",
//       description:
//         "Ticket-based document processing platform with multi-desk workflow. Includes billing, credit management, and status tracking.",
//     },
//     {
//       title: "Rahul Nagar",
//       domain: "Society Reconstruction Management",
//       url: "https://www.rahulnagar.in",
//       description:
//         "A web portal for society management with features like event updates, document uploads, notice board, and meeting management.",
//     },
//     {
//       title: "Booking One Omega (USA Client)",
//       domain: "SaaS Multi-Tenant Booking System",
//       url: "https://booking-one-omega.vercel.app/",
//       description:
//         "Multi-tenant appointment booking system with SaaS architecture and admin roles.",
//     },
//     {
//       title: "Policy Sansar",
//       domain: "Insurance Lead Collection",
//       url: "https://www.policysansar.com",
//       description:
//         "Collects policy enquiries from users and passes them to agents via admin panel. Includes customer management and agent follow-ups.",
//     },

//     {
//       title: "Shree Siddhi Jewellers",
//       domain: "Retail / Inventory",
//       url: "https://shreesiddhijwellers.vercel.app/",
//       description:
//         "Showcases jewelry products and handles customer enquiries. Built with responsive UI and tailored to store branding.",
//     },
//     {
//       title: "Delxn Tech Official Website",
//       domain: "Corporate Portfolio",
//       url: "https://www.delxntech.com/",
//       description:
//         "Landing page and service listing site for Delxn Tech. Includes team info, contact, and tech expertise display.",
//     },
//     {
//       title: "Sathe Dairy App",
//       domain: "Dairy Product Management",
//       tech: "React Native",
//       description:
//         "Mobile app to manage daily milk orders, subscriptions, delivery tracking, and payments.",
//     },

//     {
//       title: "Quick Commerce App",
//       domain: "Q-Commerce / Delivery",
//       tech: "React Native",
//       description:
//         "Grocery delivery app with real-time tracking, inventory, and delivery agent integration.",
//     },

//     {
//       title: "Doctor Clinic SaaS Application",
//       domain: "Healthcare / SaaS",
//       description:
//         "App for multi-clinic management: doctor profiles, patient records, appointments, and analytics.",
//     },
//   ];

//   const ProjectCard = ({ project, category }) => {
//     const IconComponent = getDomainIcon(project.domain);

//     return (
//       <section>
//         <div
//           id="projects"
//           className="group bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out hover:border-blue-300 "
//         >
//           <div className="flex items-start justify-between mb-4">
//             <div className="flex items-center space-x-3">
//               <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
//                 <IconComponent className="w-5 h-5 text-blue-600" />
//               </div>
//               <div>
//                 {project.url ? (
//                   <a
//                     href={project.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group"
//                   >
//                     {project.title}
//                     <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
//                   </a>
//                 ) : (
//                   <h3 className="text-xl font-bold text-gray-900">
//                     {project.title}
//                   </h3>
//                 )}
//                 <p className="text-sm text-gray-600 mt-1">{project.domain}</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-2 mb-4">
//             <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
//               {category}
//             </span>
//             {project.tech && (
//               <span
//                 className={`px-3 py-1 text-xs font-medium rounded-full ${getTechBadgeColor(
//                   project.tech
//                 )} flex items-center gap-1`}
//               >
//                 <Code className="w-3 h-3" />
//                 {project.tech}
//               </span>
//             )}
//           </div>

//           <p className="text-gray-700 text-sm leading-relaxed">
//             {project.description}
//           </p>

//           {project.url && (
//             <div className="mt-4 pt-4 border-t border-gray-100">
//               <a
//                 href={project.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
//               >
//                 Visit Project
//                 <ExternalLink className="w-4 h-4 ml-1" />
//               </a>
//             </div>
//           )}
//         </div>
//       </section>
//     );
//   };

//   return (
//     <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             A showcase of my development journey, from freelance ventures to
//             collaborative team projects
//           </p>
//         </div>

//         {/* Freelance Projects */}
//         <div className="mb-16">
//           <div className="flex items-center mb-8">
//             <div className="flex items-center space-x-3">
//               <div className="p-2 bg-green-100 rounded-lg">
//                 <Users className="w-6 h-6 text-green-600" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900">
//                 🧑‍💻 Freelance Projects
//               </h3>
//             </div>
//             <div className="flex-1 h-px bg-gradient-to-r from-green-200 to-transparent ml-6"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {freelanceProjects.map((project, index) => (
//               <ProjectCard key={index} project={project} category="Freelance" />
//             ))}
//           </div>
//         </div>

//         {/* Delxn Tech Projects */}
//         <div>
//           <div className="flex items-center mb-8">
//             <div className="flex items-center space-x-3">
//               <div className="p-2 bg-blue-100 rounded-lg">
//                 <Building className="w-6 h-6 text-blue-600" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900">
//                 🏢 Delxn Tech Projects
//               </h3>
//             </div>
//             <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent ml-6"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {delxnProjects.map((project, index) => (
//               <ProjectCard
//                 key={index}
//                 project={project}
//                 category="Team Project"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//             <div className="space-y-2">
//               <div className="text-3xl font-bold text-blue-600">13+</div>
//               <div className="text-gray-600">Total Projects</div>
//             </div>
//             <div className="space-y-2">
//               <div className="text-3xl font-bold text-green-600">8</div>
//               <div className="text-gray-600">Live Projects</div>
//             </div>
//             <div className="space-y-2">
//               <div className="text-3xl font-bold text-purple-600">5</div>
//               <div className="text-gray-600">Different Domains</div>
//             </div>
//             <div className="space-y-2">
//               <div className="text-3xl font-bold text-orange-600">3</div>
//               <div className="text-gray-600">Tech Stacks</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
"use client";
import React from "react";
import {
  ExternalLink,
  Code,
  Globe,
  Building,
  ShoppingCart,
  FileText,
  Heart,
  Users,
  Car,
  GraduationCap,
  Stethoscope,
  Calendar,
  ArrowUpRight,
  Award,
  TrendingUp,
  CheckCircle,
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
    if (!tech)
      return "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100";
    const techLower = tech.toLowerCase();
    if (techLower.includes("react native"))
      return "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100";
    if (techLower.includes("next.js") && techLower.includes("aws"))
      return "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100";
    if (techLower.includes("next.js") && techLower.includes("vercel"))
      return "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100";
    if (techLower.includes("flutter"))
      return "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100";
    return "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100";
  };

  const freelanceProjects = [
    {
      title: "Shrimant.in",
      domain: "E-commerce",
      url: "https://www.shrimant.in",
      description:
        "Full-stack e-commerce platform for traditional clothing featuring comprehensive product management, shopping cart functionality, and administrative dashboard for inventory and order management.",
      status: "Live",
      year: "2024",
      tech: "Next.js / Vercel",
      impact: "Active production platform serving customers",
    },
  ];

  const delxnProjects = [
    {
      title: "Document Processing Platform",
      domain: "Document Management",
      tech: "Next.js / Vercel",
      description:
        "Enterprise-grade ticket-based document processing system with multi-desk workflow architecture, integrated billing system, credit management, and real-time status tracking capabilities.",
      complexity: "Enterprise",
      year: "2024",
      impact: "Streamlined document workflows",
    },
    {
      title: "Society Management Portal",
      domain: "Property Management",
      tech: "Next.js / Vercel",
      description:
        "Comprehensive society management solution featuring event coordination, document repository, digital notice board, meeting management, and resident communication tools.",
      complexity: "Professional",
      year: "2024",
      impact: "Enhanced community management",
    },
    {
      title: "Multi-Tenant Booking System",
      domain: "SaaS Platform",
      tech: "Next.js / Vercel",
      description:
        "Scalable SaaS appointment booking platform with multi-tenant architecture, role-based access control, and comprehensive administrative features for service providers.",
      complexity: "Enterprise",
      year: "2024",
      impact: "Scalable business solution",
    },
    {
      title: "Insurance Lead Management",
      domain: "Financial Services",
      tech: "Next.js / AWS",
      description:
        "Lead generation and management platform for insurance services with automated agent assignment, customer relationship management, and follow-up tracking system.",
      complexity: "Professional",
      year: "2024",
      impact: "Improved lead conversion",
    },
    {
      title: "Jewelry Showcase Platform",
      domain: "Retail / E-commerce",
      tech: "Next.js / Vercel",
      description:
        "Elegant product showcase platform for jewelry retail with responsive design, inquiry management, and brand-customized user interface optimized for conversion.",
      complexity: "Standard",
      year: "2024",
      impact: "Enhanced brand presence",
    },
    {
      title: "Corporate Website",
      domain: "Business Portfolio",
      tech: "Next.js / Vercel",
      description:
        "Professional corporate website showcasing services, team expertise, and company portfolio with optimized performance and modern design principles.",
      complexity: "Standard",
      year: "2024",
      impact: "Professional web presence",
    },
    {
      title: "Dairy Management System",
      domain: "Supply Chain",
      tech: "React Native",
      description:
        "Mobile application for dairy product management including subscription handling, delivery scheduling, payment processing, and customer order tracking.",
      complexity: "Professional",
      year: "2024",
      impact: "Streamlined operations",
    },
    {
      title: "Quick Commerce Platform",
      domain: "Delivery & Logistics",
      tech: "React Native",
      description:
        "On-demand grocery delivery application with real-time order tracking, inventory management, and delivery agent coordination system.",
      complexity: "Enterprise",
      year: "2024",
      impact: "Enhanced delivery efficiency",
    },
    {
      title: "Healthcare Management Suite",
      domain: "Healthcare Technology",
      tech: "React Native",
      description:
        "Comprehensive healthcare platform supporting multi-clinic operations with doctor profiles, patient record management, appointment scheduling, and analytics dashboard.",
      complexity: "Enterprise",
      year: "2024",
      impact: "Improved patient care",
    },
  ];

  const getComplexityColor = (complexity) => {
    switch (complexity?.toLowerCase()) {
      case "enterprise":
        return "bg-red-50 text-red-700 border-red-200 hover:bg-red-100";
      case "professional":
        return "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100";
      case "standard":
        return "bg-green-50 text-green-700 border-green-200 hover:bg-green-100";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100";
    }
  };

  const ProjectCard = ({ project, category, isFreelance = false }) => {
    const IconComponent = getDomainIcon(project.domain);

    return (
      <div className="group h-full">
        <div className="h-full bg-white rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1">
          {/* Header */}
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100 group-hover:bg-indigo-100 group-hover:border-indigo-200 transition-all duration-300">
                  <IconComponent className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700" />
                </div>
                <div className="flex-1 min-w-0">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-start gap-2 hover:text-indigo-600 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-slate-900 group-hover/link:text-indigo-600 leading-tight">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all duration-200 text-indigo-500 flex-shrink-0 mt-0.5" />
                    </a>
                  ) : (
                    <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                      {project.title}
                    </h3>
                  )}
                  <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </p>
                </div>
              </div>
              {project.status === "Live" && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-50 text-green-700 text-xs font-medium border border-green-200 hover:bg-green-100">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Live
                </span>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100">
                {category}
              </span>
              {project.tech && (
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${getTechBadgeColor(
                    project.tech
                  )}`}
                >
                  <Code className="w-3 h-3 mr-1" />
                  {project.tech}
                </span>
              )}
              {project.complexity && (
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${getComplexityColor(
                    project.complexity
                  )}`}
                >
                  {project.complexity}
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {project.impact && (
              <div className="flex items-center gap-2 mb-4 p-3 bg-indigo-50 rounded-md border border-indigo-100 hover:bg-indigo-100 transition-colors">
                <TrendingUp className="w-4 h-4 text-indigo-600" />
                <span className="text-xs text-indigo-700 font-medium">
                  {project.impact}
                </span>
              </div>
            )}

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors duration-200"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg mb-6 shadow-md hover:shadow-lg transition-shadow">
            <Code className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Project Portfolio
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of development projects spanning multiple
            industries and technology stacks, demonstrating expertise in
            full-stack development and system architecture.
          </p>
        </div>

        {/* Freelance Projects */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg shadow">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Independent Projects
                </h3>
                <p className="text-sm text-slate-600">
                  Client-focused development and entrepreneurial initiatives
                </p>
              </div>
            </div>
            <div className="flex-1 ml-8 h-px bg-gradient-to-r from-slate-200 via-indigo-200 to-slate-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freelanceProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                category="Independent"
                isFreelance={true}
              />
            ))}
          </div>
        </div>

        {/* Delxn Tech Projects */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg shadow">
                <Building className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Team Collaboration Projects
                </h3>
                <p className="text-sm text-slate-600">
                  Enterprise solutions developed at Delxn Tech • September 2024
                  - Present
                </p>
              </div>
            </div>
            <div className="flex-1 ml-8 h-px bg-gradient-to-r from-slate-200 via-indigo-200 to-slate-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {delxnProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                category="Enterprise"
                isFreelance={false}
              />
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-100 p-8 hover:shadow-md transition-shadow">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg mb-4 shadow">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Development Metrics
            </h3>
            <p className="text-slate-600">
              Quantitative overview of project portfolio and technical expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="p-6 rounded-lg bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mr-2" />
                  <div className="text-2xl font-bold text-slate-900">10+</div>
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  Completed Projects
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="p-6 rounded-lg bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="w-5 h-5 text-indigo-600 mr-2" />
                  <div className="text-2xl font-bold text-slate-900">8</div>
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  Production Systems
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="p-6 rounded-lg bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all">
                <div className="flex items-center justify-center mb-2">
                  <Building className="w-5 h-5 text-indigo-600 mr-2" />
                  <div className="text-2xl font-bold text-slate-900">9</div>
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  Industry Sectors
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="p-6 rounded-lg bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all">
                <div className="flex items-center justify-center mb-2">
                  <Code className="w-5 h-5 text-indigo-600 mr-2" />
                  <div className="text-2xl font-bold text-slate-900">5+</div>
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  Technology Stacks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
