// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Mail, Code, Smartphone, Github, Linkedin, ExternalLink, Download, Star, Zap } from 'lucide-react';

// const HeroSection = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.15
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: [0.22, 1, 0.36, 1]
//       }
//     }
//   };

//   const floatingVariants = {
//     animate: {
//       y: [-15, 15, -15],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const glowPulse = {
//     animate: {
//       boxShadow: [
//         "0 0 20px rgba(147, 51, 234, 0.3)",
//         "0 0 40px rgba(147, 51, 234, 0.6)",
//         "0 0 20px rgba(147, 51, 234, 0.3)"
//       ],
//       transition: {
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const skills = ["React Native", "Next.js", "AWS", "Node.js"];
//   const socialLinks = [
//     { icon: Github, label: "GitHub", href: "#" },
//     { icon: Linkedin, label: "LinkedIn", href: "#" },
//     { icon: Mail, label: "Email", href: "#" }
//   ];

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
//       {/* Enhanced Background Elements */}
//       <div className="absolute inset-0">
//         {/* Animated gradient orbs */}
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
//         {/* Enhanced dots pattern */}
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               width: `${2 + Math.random() * 4}px`,
//               height: `${2 + Math.random() * 4}px`,
//             }}
//             animate={{
//               opacity: [0.2, 0.8, 0.2],
//               scale: [1, 1.5, 1],
//               backgroundColor: [
//                 "rgba(147, 51, 234, 0.3)",
//                 "rgba(59, 130, 246, 0.3)",
//                 "rgba(147, 51, 234, 0.3)"
//               ]
//             }}
//             transition={{
//               duration: 3 + Math.random() * 3,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
        
//         {/* Subtle grid overlay */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="w-full h-full" style={{
//             backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
//                             linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)`,
//             backgroundSize: '50px 50px'
//           }}></div>
//         </div>
//       </div>
      
//       {/* Enhanced Floating Orbs */}
//       <motion.div 
//         className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"
//         variants={floatingVariants}
//         animate="animate"
//       />
//       <motion.div 
//         className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl"
//         variants={floatingVariants}
//         animate="animate"
//         transition={{ delay: 1.5 }}
//       />
//       <motion.div 
//         className="absolute top-1/2 left-0 w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl"
//         variants={floatingVariants}
//         animate="animate"
//         transition={{ delay: 2.5 }}
//       />

//       <div className="container mx-auto px-6 py-20 flex items-center min-h-screen relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
//           {/* Left Column - Enhanced Content */}
//           <motion.div 
//             className="space-y-10"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {/* Status Badge */}
//             {/* <motion.div variants={itemVariants}>
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium backdrop-blur-sm">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                 Available for new opportunities
//               </div>
//             </motion.div> */}

//             {/* Main Heading */}
//             <motion.div variants={itemVariants} className="space-y-6">
//               <motion.h1 
//                 className="text-6xl md:text-6xl lg:text-6xl font-bold leading-tight"
//                 variants={itemVariants}
//               >
//                 <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
//                   Hi, I'm
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
//                   Mahesh
//                 </span>
//                 <motion.span 
//                   className="inline-block ml-4"
//                   animate={{ 
//                     rotate: [0, 20, 0],
//                     scale: [1, 1.2, 1]
//                   }}
//                   transition={{ 
//                     duration: 0.6, 
//                     repeat: Infinity, 
//                     repeatDelay: 4,
//                     ease: "easeInOut"
//                   }}
//                 >
//                   👋
//                 </motion.span>
//               </motion.h1>
//             </motion.div>

//             {/* Role & Skills */}
//             <motion.div variants={itemVariants} className="space-y-6">
//               <div className="flex items-center gap-4 flex-wrap">
//                 <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
//                   <Code className="w-4 h-4 text-purple-400" />
//                   <span className="text-purple-200 text-sm font-medium">Full Stack</span>
//                 </div>
//                 <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
//                   <Smartphone className="w-4 h-4 text-blue-400" />
//                   <span className="text-blue-200 text-sm font-medium">Mobile Dev</span>
//                 </div>
//                 <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full backdrop-blur-sm">
//                   <Zap className="w-4 h-4 text-green-400" />
//                   <span className="text-green-200 text-sm font-medium">Performance</span>
//                 </div>
//               </div>
              
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-200 leading-relaxed">
//                 React Native & Next.js 
//                 <span className="block text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
//                   Developer
//                 </span>
//               </h2>
              
//               <motion.p 
//                 className="text-xl text-gray-300 leading-relaxed max-w-2xl"
//                 variants={itemVariants}
//               >
//                 Crafting pixel-perfect, high-performance web and mobile experiences with cutting-edge technologies. 
//                 Passionate about creating intuitive user interfaces that users love.
//               </motion.p>
//             </motion.div>

//             {/* Skills Pills */}
//             <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
//               {skills.map((skill, index) => (
//                 <motion.span
//                   key={skill}
//                   className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm rounded-full text-gray-300 text-sm font-medium hover:border-purple-500/50 transition-colors cursor-pointer"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 1.5 + index * 0.1 }}
//                   whileHover={{ scale: 1.05, borderColor: "rgba(147, 51, 234, 0.5)" }}
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </motion.div>

//             {/* Action Buttons */}
//             <motion.div 
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row gap-4 pt-6"
//             >
//               <motion.button
//                 className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 overflow-hidden"
//                 whileHover={{ scale: 1.02, y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 variants={glowPulse}
//                 animate="animate"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
//                 <Star className="w-5 h-5 relative z-10" />
//                 <span className="relative z-10">View Projects</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
//               </motion.button>
              
//               <motion.button
//                 className="group border-2 border-gray-600/50 hover:border-purple-400/50 bg-gray-900/20 backdrop-blur-sm px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-purple-600/10 flex items-center justify-center gap-3"
//                 whileHover={{ scale: 1.02, y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Download className="w-5 h-5" />
//                 Download CV
//               </motion.button>
//             </motion.div>

           
//           </motion.div>

//           {/* Right Column - Enhanced Animated Illustration */}
//           <motion.div 
//             className="relative flex justify-center items-center"
//             variants={itemVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div
//               className="relative"
//               animate={{
//                 rotate: [0, 1, -1, 0],
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             >
//               {/* Main Container with Glassmorphism */}
//               <div className="relative w-96 h-96 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl flex items-center justify-center backdrop-blur-lg border border-purple-500/20 shadow-2xl">
                
//                 {/* Code Editor Mockup - Enhanced */}
//                 <motion.div 
//                   className="w-80 h-64 bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden"
//                   initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
//                   animate={{ scale: 1, opacity: 1, rotateX: 0 }}
//                   transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
//                 >
//                   {/* Enhanced Title Bar */}
//                   <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-3 flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="flex gap-2">
//                         <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
//                         <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
//                       </div>
//                       <span className="text-gray-300 text-sm font-medium">portfolio.jsx</span>
//                     </div>
//                     <ExternalLink className="w-4 h-4 text-gray-500" />
//                   </div>
                  
//                   {/* Enhanced Code Content with Syntax Highlighting */}
//                   <div className="p-5 text-sm font-mono space-y-3 bg-gradient-to-b from-gray-900 to-gray-800">
//                     <motion.div 
//                       className="text-purple-400 font-semibold"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 1.5 }}
//                     >
//                       <span className="text-blue-400">const</span> developer = {'{'}
//                     </motion.div>
//                     <motion.div 
//                       className="text-blue-300 ml-4 flex items-center gap-2"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 2 }}
//                     >
//                       <span className="text-green-400">name:</span> 
//                       <span className="text-yellow-300">"Mahesh Kadam"</span>,
//                     </motion.div>
//                     <motion.div 
//                       className="text-blue-300 ml-4 flex items-center gap-2"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 2.3 }}
//                     >
//                       <span className="text-green-400">role:</span> 
//                       <span className="text-yellow-300">"Full Stack"</span>,
//                     </motion.div>
//                     <motion.div 
//                       className="text-blue-300 ml-4"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 2.6 }}
//                     >
//                       <span className="text-green-400">skills:</span> 
//                       <span className="text-cyan-300">[</span>
//                       <span className="text-yellow-300">"React"</span>
//                       <span className="text-cyan-300">]</span>
//                     </motion.div>
//                     <motion.div 
//                       className="text-purple-400 font-semibold"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 3 }}
//                     >
//                       {'}'}
//                     </motion.div>
//                   </div>
//                 </motion.div>

//                 {/* Enhanced Floating Tech Icons */}
//                 <motion.div
//                   className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-400/30 shadow-lg"
//                   animate={{ 
//                     rotate: [0, 10, -10, 0],
//                     y: [-8, 8, -8],
//                     scale: [1, 1.05, 1]
//                   }}
//                   transition={{ 
//                     duration: 5, 
//                     repeat: Infinity, 
//                     ease: "easeInOut" 
//                   }}
//                 >
//                   <span className="text-3xl filter drop-shadow-lg">⚛️</span>
//                 </motion.div>

//                 <motion.div
//                   className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-400/30 shadow-lg"
//                   animate={{ 
//                     rotate: [0, -15, 15, 0],
//                     x: [-5, 5, -5],
//                     scale: [1, 1.1, 1]
//                   }}
//                   transition={{ 
//                     duration: 4, 
//                     repeat: Infinity, 
//                     ease: "easeInOut",
//                     delay: 1
//                   }}
//                 >
//                   <span className="text-2xl filter drop-shadow-lg">📱</span>
//                 </motion.div>

//                 <motion.div
//                   className="absolute top-6 -left-8 w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-green-400/30 shadow-lg"
//                   animate={{ 
//                     scale: [1, 1.15, 1],
//                     rotate: [0, 20, -20, 0],
//                     y: [-3, 3, -3]
//                   }}
//                   transition={{ 
//                     duration: 3, 
//                     repeat: Infinity, 
//                     ease: "easeInOut",
//                     delay: 0.5
//                   }}
//                 >
//                   <span className="text-xl filter drop-shadow-lg">🚀</span>
//                 </motion.div>

//                 <motion.div
//                   className="absolute top-1/2 right-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-yellow-400/30 shadow-lg"
//                   animate={{ 
//                     rotate: [0, -10, 10, 0],
//                     x: [0, 5, -5, 0]
//                   }}
//                   transition={{ 
//                     duration: 6, 
//                     repeat: Infinity, 
//                     ease: "easeInOut",
//                     delay: 2
//                   }}
//                 >
//                   <span className="text-lg filter drop-shadow-lg">⚡</span>
//                 </motion.div>
//               </div>

//               {/* Ambient Glow Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Code, Smartphone, Github, Linkedin, ExternalLink, Download, Star, Zap, Sparkles, Terminal, Globe, Coffee } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = ['Full Stack Developer', 'React Native Expert', 'UI/UX Enthusiast', 'Problem Solver'];
  
  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "TypeScript", icon: "🔷", color: "from-indigo-500 to-blue-500" },
    { name: "Docker", icon: "🐳", color: "from-cyan-500 to-teal-500" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-purple-400" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
    { icon: Mail, label: "Email", href: "#", color: "hover:text-green-400" }
  ];

  const stats = [
    { number: "50+", label: "Projects", icon: "🚀" },
    { number: "3+", label: "Years Exp", icon: "⏰" },
    { number: "20+", label: "Happy Clients", icon: "😊" }
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-600/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
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
              backgroundColor: `rgba(${147 + Math.random() * 50}, ${51 + Math.random() * 100}, 234, ${0.3 + Math.random() * 0.4})`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 flex items-center min-h-screen relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          
          {/* Left Column - Enhanced Content */}
          <div className="space-y-12">
            {/* Status Badge with Animation */}
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-green-500/10 border border-green-500/30 rounded-full text-green-300 text-sm font-medium backdrop-blur-sm hover:bg-green-500/20 transition-all duration-300 group">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                <span className="group-hover:text-green-200 transition-colors">Available for opportunities</span>
                <Sparkles className="w-4 h-4 text-green-400" />
              </div>
            </div>

            {/* Main Heading with Enhanced Animation */}
            <div className="space-y-8">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none">
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
            <div className="space-y-6">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-3 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300 group">
                  <Code className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" />
                  <span className="text-purple-200 font-medium">Full Stack</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm hover:bg-blue-500/20 transition-all duration-300 group">
                  <Smartphone className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-blue-200 font-medium">Mobile Dev</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm hover:bg-green-500/20 transition-all duration-300 group">
                  <Zap className="w-5 h-5 text-green-400 group-hover:rotate-12 transition-transform" />
                  <span className="text-green-200 font-medium">Performance</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-200 leading-tight">
                  <span className="inline-block border-r-2 border-purple-400 animate-pulse min-h-[1.2em]">
                    {typedText}
                  </span>
                </h2>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Crafting pixel-perfect, high-performance web and mobile experiences with cutting-edge technologies. 
                  <span className="text-purple-300 font-medium"> Passionate about creating intuitive user interfaces</span> that users love and remember.
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
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
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

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-2xl group-hover:animate-bounce">{stat.icon}</span>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
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

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`group relative p-4 bg-gray-800/20 border border-gray-700/30 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-110 ${link.color} hover:border-purple-500/50`}
                >
                  <link.icon className="w-6 h-6 group-hover:scale-125 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Enhanced 3D Illustration */}
          <div className="relative flex justify-center items-center">
            <div className="relative group">
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
                            <span className="text-gray-300 font-medium">portfolio.tsx</span>
                          </div>
                        </div>
                        <Globe className="w-5 h-5 text-gray-500 hover:text-purple-400 transition-colors cursor-pointer" />
                      </div>
                      
                      {/* Code Content with Enhanced Syntax */}
                      <div className="p-6 text-sm font-mono space-y-4 bg-gradient-to-b from-gray-900 to-gray-800 h-full overflow-hidden">
                        <div className="text-purple-400 font-bold flex items-center gap-2">
                          <Coffee className="w-4 h-4" />
                          <span className="text-blue-400">const</span> developer = {'{'}
                        </div>
                        <div className="text-blue-300 ml-6 flex items-center gap-2">
                          <span className="text-green-400">name:</span> 
                          <span className="text-yellow-300">"Mahesh Kadam"</span>,
                        </div>
                        <div className="text-blue-300 ml-6 flex items-center gap-2">
                          <span className="text-green-400">role:</span> 
                          <span className="text-yellow-300">"Full Stack Developer"</span>,
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
                          <span className="text-pink-300">"Creating Magic ✨"</span>
                        </div>
                        <div className="text-purple-400 font-bold">{'}'}</div>
                      </div>
                    </div>

                    {/* Enhanced Floating Tech Icons */}
                    {[
                      { icon: "⚛️", position: "top-0 right-0", color: "from-blue-500/30 to-cyan-500/30", delay: 0 },
                      { icon: "📱", position: "bottom-0 left-0", color: "from-purple-500/30 to-pink-500/30", delay: 1 },
                      { icon: "🚀", position: "top-1/4 left-0", color: "from-green-500/30 to-emerald-500/30", delay: 0.5 },
                      { icon: "⚡", position: "top-1/2 right-0", color: "from-yellow-500/30 to-orange-500/30", delay: 2 },
                      { icon: "☁️", position: "bottom-1/4 right-1/4", color: "from-indigo-500/30 to-blue-500/30", delay: 1.5 },
                      { icon: "🔥", position: "top-1/3 right-1/3", color: "from-red-500/30 to-pink-500/30", delay: 2.5 }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`absolute ${item.position} w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg hover:scale-125 transition-all duration-500 cursor-pointer`}
                        style={{
                          animation: `float 4s ease-in-out infinite`,
                          animationDelay: `${item.delay}s`
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
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-15px) rotate(0deg); }
          75% { transform: translateY(-5px) rotate(-5deg); }
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