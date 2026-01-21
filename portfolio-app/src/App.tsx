import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ArrowRight, Code, Database, Globe, Laptop, Award, GraduationCap, Star, ExternalLink } from 'lucide-react';
import './App.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(el => observer.observe(el));

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleSubscribe = () => {
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        @keyframes spin-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-counter-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .scroll-animate {
          opacity: 1;
        }
        .scroll-animate.animate-in {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .scroll-animate-left {
          opacity: 1;
        }
        .scroll-animate-left.animate-in {
          animation: fade-in-left 0.6s ease-out forwards;
        }
        .scroll-animate-right {
          opacity: 1;
        }
        .scroll-animate-right.animate-in {
          animation: fade-in-right 0.6s ease-out forwards;
        }
        .scroll-animate-scale {
          opacity: 1;
        }
        .scroll-animate-scale.animate-in {
          animation: scale-in 0.6s ease-out forwards;
        }
        .orbit-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: center center;
        }
        .orbit-item {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
        }
        /* Large orbits */
        .orbit-1-large {
          width: 320px;
          height: 320px;
          margin-left: -160px;
          margin-top: -160px;
          animation: spin-clockwise 8s linear infinite;
        }
        .orbit-1-large .orbit-item {
          animation: spin-counter-clockwise 8s linear infinite;
        }
        .orbit-1-reverse-large {
          width: 320px;
          height: 320px;
          margin-left: -160px;
          margin-top: -160px;
          animation: spin-counter-clockwise 8s linear infinite;
        }
        .orbit-1-reverse-large .orbit-item {
          animation: spin-clockwise 8s linear infinite;
        }
        .orbit-2-large {
          width: 480px;
          height: 480px;
          margin-left: -240px;
          margin-top: -240px;
          animation: spin-clockwise 12s linear infinite;
        }
        .orbit-2-large .orbit-item {
          animation: spin-counter-clockwise 12s linear infinite;
        }
        .orbit-2-reverse-large {
          width: 480px;
          height: 480px;
          margin-left: -240px;
          margin-top: -240px;
          animation: spin-counter-clockwise 12s linear infinite;
        }
        .orbit-2-reverse-large .orbit-item {
          animation: spin-clockwise 12s linear infinite;
        }
        .orbit-3-large {
          width: 640px;
          height: 640px;
          margin-left: -320px;
          margin-top: -320px;
          animation: spin-clockwise 16s linear infinite;
        }
        .orbit-3-large .orbit-item {
          animation: spin-counter-clockwise 16s linear infinite;
        }
        .orbit-3-offset-90-large {
          width: 640px;
          height: 640px;
          margin-left: -320px;
          margin-top: -320px;
          animation: spin-clockwise 16s linear infinite;
          animation-delay: -4s;
        }
        .orbit-3-offset-90-large .orbit-item {
          animation: spin-counter-clockwise 16s linear infinite;
          animation-delay: -4s;
        }
        .orbit-3-offset-180-large {
          width: 640px;
          height: 640px;
          margin-left: -320px;
          margin-top: -320px;
          animation: spin-clockwise 16s linear infinite;
          animation-delay: -8s;
        }
        .orbit-3-offset-180-large .orbit-item {
          animation: spin-counter-clockwise 16s linear infinite;
          animation-delay: -8s;
        }
        .orbit-3-offset-270-large {
          width: 640px;
          height: 640px;
          margin-left: -320px;
          margin-top: -320px;
          animation: spin-clockwise 16s linear infinite;
          animation-delay: -12s;
        }
        .orbit-3-offset-270-large .orbit-item {
          animation: spin-counter-clockwise 16s linear infinite;
          animation-delay: -12s;
        }
      `}</style>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden relative" style={{ boxSizing: 'border-box' }}>
      
      {/* Global box-sizing */}
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }
      `}</style>
      
      {/* Unified Background Overlay with Gradient Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-600/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-600/5 via-transparent to-transparent"></div>
      </div>
      {/* Animated Cursor Follow Effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Aahan Trikha
          </div>
          <div className="hidden md:flex space-x-8 text-sm">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Skills' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-purple-400 transition-colors duration-300 ${
                  activeSection === item.id ? 'text-purple-400' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:aahantrikha19@gmail.com" className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm transform hover:scale-105">
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-12 px-6 relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative">
          
          {/* 3D Atomic Tech Stack Animation - Background */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] flex items-center justify-center overflow-visible opacity-60">
            {/* Central nucleus */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-2 border-purple-500/50 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-purple-500/50 animate-pulse-slow">
                <div className="text-center">
                  <Code size={48} className="mx-auto mb-2 text-purple-400" />
                  <div className="text-base font-bold text-white">Tech Stack</div>
                </div>
              </div>
            </div>

            {/* Orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-80 h-80 border border-purple-500/20 rounded-full"></div>
              <div className="absolute w-[480px] h-[480px] border border-blue-500/20 rounded-full"></div>
              <div className="absolute w-[640px] h-[640px] border border-pink-500/20 rounded-full"></div>
            </div>

            {/* Orbit 1 - Inner orbit (React & Node.js) */}
            <div className="orbit-container orbit-1-large">
              <div className="orbit-item">
                <div className="px-6 py-3 rounded-full border-2 border-blue-500/70 bg-blue-600/20 backdrop-blur-sm text-blue-400 font-semibold transition-all duration-300 cursor-pointer shadow-lg shadow-blue-500/30 hover:scale-125 hover:bg-blue-600/40 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/60 hover:rotate-12 pointer-events-auto">
                  React
                </div>
              </div>
            </div>

            <div className="orbit-container orbit-1-reverse-large">
              <div className="orbit-item">
                <div className="px-6 py-3 rounded-full border-2 border-green-500/70 bg-green-600/20 backdrop-blur-sm text-green-400 font-semibold transition-all duration-300 cursor-pointer shadow-lg shadow-green-500/30 hover:scale-125 hover:bg-green-600/40 hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/60 hover:-rotate-12 pointer-events-auto">
                  Node.js
                </div>
              </div>
            </div>

            {/* Orbit 2 - Middle orbit (Python & Docker) */}
            <div className="orbit-container orbit-2-large">
              <div className="orbit-item">
                <div className="px-6 py-3 rounded-full border-2 border-yellow-500/70 bg-yellow-600/20 backdrop-blur-sm text-yellow-400 font-semibold transition-all duration-300 cursor-pointer shadow-lg shadow-yellow-500/30 hover:scale-125 hover:bg-yellow-600/40 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/60 hover:rotate-12 pointer-events-auto">
                  Python
                </div>
              </div>
            </div>

            <div className="orbit-container orbit-2-reverse-large">
              <div className="orbit-item">
                <div className="px-6 py-3 rounded-full border-2 border-red-500/70 bg-red-600/20 backdrop-blur-sm text-red-400 font-semibold transition-all duration-300 cursor-pointer shadow-lg shadow-red-500/30 hover:scale-125 hover:bg-red-600/40 hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/60 hover:-rotate-12 pointer-events-auto">
                  Docker
                </div>
              </div>
            </div>

            {/* Orbit 3 - Outer orbit (MongoDB, Firebase, AWS, TypeScript) */}
            <div className="orbit-container orbit-3-large">
              <div className="orbit-item">
                <div className="px-6 py-3 rounded-full border-2 border-purple-500/70 bg-purple-600/20 backdrop-blur-sm text-purple-400 font-semibold transition-all duration-300 cursor-pointer shadow-lg shadow-purple-500/30 hover:scale-125 hover:bg-purple-600/40 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/60 hover:rotate-12 pointer-events-auto">
                  MongoDB
                </div>
              </div>
            </div>

            <div className="orbit-container orbit-3-offset-90-large">
              <div className="orbit-item">
                <div className="px-6 py-3 rounded-full border-2 border-orange-500/70 bg-orange-600/20 backdrop-blur-sm text-orange-400 font-semibold transition-all duration-300 cursor-pointer shadow-lg shadow-orange-500/30 hover:scale-125 hover:bg-orange-600/40 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/60 hover:-rotate-12 pointer-events-auto">
                  Firebase
                </div>
              </div>
            </div>

            <div className="orbit-container orbit-3-offset-180-large">
              <div className="orbit-item">
                <div className="px-5 py-2 rounded-full border-2 border-cyan-500/70 bg-cyan-600/20 backdrop-blur-sm text-cyan-400 font-semibold transition-all duration-300 cursor-pointer shadow-lg shadow-cyan-500/30 hover:scale-125 hover:bg-cyan-600/40 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/60 hover:rotate-12 pointer-events-auto">
                  AWS
                </div>
              </div>
            </div>

            <div className="orbit-container orbit-3-offset-270-large">
              <div className="orbit-item">
                <div className="px-5 py-2 rounded-full border-2 border-yellow-500/70 bg-yellow-600/20 backdrop-blur-sm text-yellow-300 font-semibold transition-all duration-300 cursor-pointer shadow-lg shadow-yellow-500/30 hover:scale-125 hover:bg-yellow-600/40 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/60 hover:-rotate-12 pointer-events-auto">
                  TypeScript
                </div>
              </div>
            </div>

            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 blur-3xl pointer-events-none"></div>
          </div>

          {/* Hero Content - Foreground */}
          <div className="relative z-20 max-w-3xl space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hello Guys<br />
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient">Aahan Trikha</span><br />
              <span className="text-2xl md:text-3xl text-gray-400 font-light">Software Developer</span>
            </h1>
            
            <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
              Computer Science major skilled in Java, C++, and Python, with expertise in data structures & algorithms. Passionate about leveraging technical skills and modern AI tools to innovate in fast-paced tech environments.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-gray-600 text-gray-300 hover:border-purple-400 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                HIRE ME
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <a href="https://github.com/aahantrikha" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 border border-gray-700 hover:border-purple-400 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/50">
                <Github size={18} className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/aahan-trikha-090a7a220" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-600 flex items-center justify-center transition-all duration-300 border border-gray-700 hover:border-blue-400 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50">
                <Linkedin size={18} className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              </a>
              <a href="mailto:aahantrikha19@gmail.com" className="group w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gradient-to-br hover:from-pink-600 hover:to-red-600 flex items-center justify-center transition-all duration-300 border border-gray-700 hover:border-pink-400 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/50">
                <Mail size={18} className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              </a>
              <a href="tel:9540519594" className="group w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gradient-to-br hover:from-green-600 hover:to-emerald-600 flex items-center justify-center transition-all duration-300 border border-gray-700 hover:border-green-400 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50">
                <Phone size={18} className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>
            
            <div className="max-w-3xl mx-auto text-gray-300">
              <p className="text-base leading-relaxed">
                Passionate Computer Science student with a drive for innovation and excellence in software development. As a Computer Science student at K.R. Mangalam University, I specialize in creating efficient, scalable software solutions. My expertise spans mobile development, full-stack web applications, and AI integration. I'm passionate about leveraging modern technologies and AI tools to solve real-world problems and deliver exceptional results. From road safety apps to queue management systems, I focus on creating impact through technology.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 transition-all duration-300 hover:bg-gray-800 hover:bg-opacity-70 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 hover:scale-105 cursor-pointer group scroll-animate-left">
                <h3 className="text-2xl font-bold mb-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">Education</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="w-6 h-6 text-blue-400 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <div>
                      <h4 className="font-semibold group-hover:text-white transition-colors duration-300">Bachelor of Technology - Computer Science</h4>
                      <p className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">K.R. Mangalam University</p>
                      <p className="text-sm text-gray-400">Sept 2022 - July 2026 (Expected)</p>
                      <p className="text-sm text-gray-300 mt-2">Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java, C++), Python Programming, Software Engineering, Database Management Systems, Operating Systems, Computer Networks</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 transition-all duration-300 hover:bg-gray-800 hover:bg-opacity-70 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:scale-105 cursor-pointer group scroll-animate-left" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-bold mb-4 text-purple-400 group-hover:text-blue-300 transition-colors duration-300">Personal Info</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <p className="text-gray-400">Location</p>
                    <p className="font-semibold group-hover:text-white transition-colors duration-300">Delhi, India</p>
                  </div>
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <p className="text-gray-400">Age</p>
                    <p className="font-semibold group-hover:text-white transition-colors duration-300">22 Years</p>
                  </div>
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <p className="text-gray-400">Email</p>
                    <p className="font-semibold group-hover:text-white transition-colors duration-300">aahantrikha19@gmail.com</p>
                  </div>
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <p className="text-gray-400">Phone</p>
                    <p className="font-semibold group-hover:text-white transition-colors duration-300">+91 9540519594</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 transition-all duration-300 hover:bg-gray-800 hover:bg-opacity-70 hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2 hover:scale-105 cursor-pointer group scroll-animate-right">
                <h3 className="text-2xl font-bold mb-6 text-purple-400 group-hover:text-pink-300 transition-colors duration-300">What I Do</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 transition-all duration-300 hover:translate-x-2">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-blue-500/50">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-white transition-colors duration-300">Full-Stack Development</h4>
                      <p className="text-sm text-gray-400">Building end-to-end web applications with modern frameworks</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 transition-all duration-300 hover:translate-x-2">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-green-500/50">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-white transition-colors duration-300">Mobile App Development</h4>
                      <p className="text-sm text-gray-400">Cross-platform mobile solutions with React Native</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 transition-all duration-300 hover:translate-x-2">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-purple-500/50">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-white transition-colors duration-300">AI Integration</h4>
                      <p className="text-sm text-gray-400">Implementing AI/ML solutions and API integrations</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 transition-all duration-300 hover:translate-x-2">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-orange-500/50">
                      <Laptop className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-white transition-colors duration-300">System Design</h4>
                      <p className="text-sm text-gray-400">Scalable architecture and cloud deployment solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Innovative solutions that showcase my technical expertise and problem-solving abilities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animate">
            {/* BlinkShield Project */}
            <a href="https://github.com/aahantrikha" target="_blank" rel="noopener noreferrer" className="block h-full">
              <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=400&fit=crop" alt="BlinkShield - Driver Safety" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors duration-300">BlinkShield</h3>
                    <div className="flex space-x-2">
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                      <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">March 2025</p>
                  <p className="text-gray-300 text-sm mb-4 flex-1">
                    Cross-platform mobile app using React Native enabling 750M+ smartphone users in India to self-assess fitness to drive with a 30-second AI-powered blink test.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-xs">React Native</span>
                    <span className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded-full text-xs">OpenCV</span>
                    <span className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-400 rounded-full text-xs">Gemini API</span>
                    <span className="px-3 py-1 bg-orange-500 bg-opacity-20 text-orange-400 rounded-full text-xs">FastAPI</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>• AI-powered HGN test adaptation</p>
                    <p>• Cloud video processing with instant deletion</p>
                    <p>• Offline support for rural areas</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Eline Project */}
            <a href="https://github.com/aahantrikha" target="_blank" rel="noopener noreferrer" className="block h-full">
              <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop" alt="Eline - Queue Management" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors duration-300">Eline</h3>
                    <div className="flex space-x-2">
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                      <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">2024</p>
                  <p className="text-gray-300 text-sm mb-4 flex-1">
                    Full-stack queue management platform with real-time tracking, SMS alerts, and AI analytics, reducing customer wait times by 60% across multi-shop operations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded-full text-xs">Node.js</span>
                    <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-xs">Express.js</span>
                    <span className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-400 rounded-full text-xs">PostgreSQL</span>
                    <span className="px-3 py-1 bg-yellow-500 bg-opacity-20 text-yellow-400 rounded-full text-xs">Prisma ORM</span>
                    <span className="px-3 py-1 bg-pink-500 bg-opacity-20 text-pink-400 rounded-full text-xs">Twilio</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>• RESTful API with JWT authentication</p>
                    <p>• Google Gemini AI integration</p>
                    <p>• Handles 1,000+ transactions/day</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Blockchain Research - Best Paper Award */}
            <a href="https://github.com/aahantrikha" target="_blank" rel="noopener noreferrer" className="block h-full">
              <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop" alt="Blockchain Research" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors duration-300">Blockchain Research</h3>
                  <div className="flex space-x-2">
                    <a href="https://ijmsrt.com" target="_blank" rel="noopener noreferrer" title="View on International Journal of Modern Science and Research Technology">
                      <ExternalLink className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-300" />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-3">IESS 2025 | International Journal of Modern Science and Research Technology</p>
                <p className="text-gray-300 text-sm mb-4 flex-1">
                  Award-winning research paper on emerging blockchain solutions presented at International Conference on Emerging Smart Systems (IESS) 2025. Won Best Paper Award for innovative research contributions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-500 bg-opacity-20 text-yellow-400 rounded-full text-xs">Blockchain</span>
                  <span className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-400 rounded-full text-xs">Research</span>
                  <span className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded-full text-xs">Best Paper</span>
                  <span className="px-3 py-1 bg-orange-500 bg-opacity-20 text-orange-400 rounded-full text-xs">IJMSRT</span>
                </div>
                <div className="text-sm text-gray-400">
                  <p>• Best Paper Award winner</p>
                  <p>• International conference</p>
                  <p>• Innovative blockchain solutions</p>
                  <p>• Published in IJMSRT</p>
                </div>
              </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technical Skills</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive expertise across modern development technologies and frameworks</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Programming Languages */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Languages</h3>
              <div className="space-y-3">
                {[
                  { name: 'Java', level: 90 },
                  { name: 'C++', level: 88 },
                  { name: 'Python', level: 85 },
                  { name: 'JavaScript', level: 92 },
                  { name: 'HTML/CSS', level: 95 }
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-400">Frameworks</h3>
              <div className="space-y-3">
                {[
                  { name: 'React.js', level: 90 },
                  { name: 'React Native', level: 85 },
                  { name: 'Node.js', level: 88 },
                  { name: 'Express.js', level: 85 },
                  { name: 'FastAPI', level: 80 }
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases & Cloud */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">Database & Cloud</h3>
              <div className="space-y-3">
                {[
                  { name: 'MongoDB', level: 85 },
                  { name: 'MySQL', level: 88 },
                  { name: 'PostgreSQL', level: 82 },
                  { name: 'Firebase', level: 88 },
                  { name: 'Supabase', level: 80 }
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Tools & DevOps</h3>
              <div className="space-y-3">
                {[
                  { name: 'Git/GitHub', level: 92 },
                  { name: 'Docker', level: 80 },
                  { name: 'VS Code', level: 95 },
                  { name: 'Vercel/Render', level: 88 },
                  { name: 'REST APIs', level: 90 }
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Data Structures & Algorithms', 'Agile Development', 'DevOps', 'Version Control (Git)', 'REST APIs', 'Prisma ORM', 'JWT Authentication'].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-400 rounded-full text-sm cursor-pointer transition-all duration-300 hover:bg-purple-500 hover:bg-opacity-40 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-4 text-blue-400">AI & Integration</h3>
              <div className="flex flex-wrap gap-2">
                {['Google Gemini API', 'OpenCV', 'Twilio', 'AI Automation', 'Machine Learning', 'Computer Vision'].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:bg-opacity-40 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 transition-all duration-300 hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-4 text-green-400">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Strong Communication', 'Problem-Solving', 'Teamwork', 'Time Management', 'Adaptability', 'Leadership'].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded-full text-sm cursor-pointer transition-all duration-300 hover:bg-green-500 hover:bg-opacity-40 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 hover:-translate-y-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Achievements & Recognition</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Milestones that reflect my dedication to excellence and continuous learning</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 scroll-animate">
            {[
              { 
                icon: '🏆', 
                title: 'Best Paper Award', 
                subtitle: 'IESS 2025', 
                desc: 'Presented a research paper on emerging blockchain solutions at the International Conference on Emerging Smart Systems (IESS) 2025 and won the prestigious Best Paper Award for innovative research contributions.',
                date: '2025',
                color: 'from-yellow-400 to-orange-500'
              },
              { 
                icon: '🥇', 
                title: '1st Prize Coding Competition', 
                subtitle: 'CSI Club - K.R. Mangalam University', 
                desc: 'Secured 1st Prize in the Coding Competition organized by the Computer Society of India (CSI) Club at K.R. Mangalam University, demonstrating exceptional problem-solving and programming skills.',
                date: '2024',
                color: 'from-blue-400 to-purple-500'
              },
              { 
                icon: '🎪', 
                title: 'Event Host', 
                subtitle: 'Edude-Fiesta', 
                desc: 'Successfully hosted Edude-Fiesta, the university\'s annual cultural fest, managing event flow, coordinating teams, leading promotional campaigns, and ensuring seamless execution for 500+ participants.',
                date: '2024',
                color: 'from-green-400 to-blue-500'
              },
              { 
                icon: '🚀', 
                title: 'Co-leader TechOdyssey', 
                subtitle: 'University Technology Event', 
                desc: 'Led and organized TechOdyssey, a university-wide technology event, coordinating with technical teams, managing logistics, and showcasing innovation across multiple technology domains.',
                date: '2024',
                color: 'from-purple-400 to-pink-500'
              },
              { 
                icon: '📚', 
                title: 'Published Research', 
                subtitle: 'ISSN: 2584-2706', 
                desc: 'Published research paper on "Intelligent Token Based Reward System for Enhancing Student and Real-Time Academic Progress Tracking" contributing to educational technology innovation.',
                date: '2024',
                color: 'from-cyan-400 to-blue-500'
              },
              { 
                icon: '💻', 
                title: 'Active LeetCode Solver', 
                subtitle: 'Competitive Programming', 
                desc: 'Actively solving data structures and algorithms problems on LeetCode, demonstrating expertise in Java, C++, and Python through consistent problem-solving and algorithmic thinking.',
                date: 'Ongoing',
                color: 'from-orange-400 to-red-500'
              }
            ].map((achievement, i) => (
              <div 
                key={i}
                className="group bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:-translate-y-4 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 border border-gray-700 hover:border-purple-500"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${achievement.color} mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  {achievement.icon}
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">{achievement.title}</h3>
                  <p className="text-purple-400 font-semibold mb-2">{achievement.subtitle}</p>
                  <p className="text-sm text-gray-400 mb-3">{achievement.date}</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {achievement.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '6+', label: 'Projects Completed', icon: Code },
              { number: '750M+', label: 'Potential Users Reached', icon: Globe },
              { number: '60%', label: 'Efficiency Improvement', icon: Star },
              { number: '100%', label: 'Client Satisfaction', icon: Award }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Let's Work Together</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Ready to bring your ideas to life? Let's discuss how we can create something amazing together.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Get In Touch</h3>
              
              {[
                { 
                  icon: Mail, 
                  label: 'Email', 
                  value: 'aahantrikha19@gmail.com', 
                  href: 'mailto:aahantrikha19@gmail.com', 
                  color: 'blue',
                  desc: 'Send me an email for project inquiries'
                },
                { 
                  icon: Phone, 
                  label: 'Phone', 
                  value: '+91 9540519594', 
                  href: 'tel:9540519594', 
                  color: 'green',
                  desc: 'Call me for urgent discussions'
                },
                { 
                  icon: Linkedin, 
                  label: 'LinkedIn', 
                  value: 'Connect with me', 
                  href: 'https://www.linkedin.com/in/aahan-trikha-090a7a220', 
                  color: 'blue',
                  desc: 'Professional networking and updates'
                },
                { 
                  icon: Github, 
                  label: 'GitHub', 
                  value: 'View my repositories', 
                  href: 'https://github.com/aahantrikha', 
                  color: 'purple',
                  desc: 'Check out my latest code projects'
                }
              ].map((contact, i) => (
                <a
                  key={i}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block group bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${contact.color}-500 to-${contact.color}-600 rounded-lg flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-${contact.color}-500/50`}>
                      <contact.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1 group-hover:text-purple-300 transition-colors duration-300">{contact.label}</h4>
                      <p className="text-purple-400 group-hover:text-purple-200 transition-colors duration-300 font-medium">
                        {contact.value}
                      </p>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 mt-1 transition-colors duration-300">{contact.desc}</p>
                    </div>
                  </div>
                </a>
              ))}

              {/* Availability Status */}
              <div className="bg-green-500 bg-opacity-20 border border-green-500 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available for Work</span>
                </div>
                <p className="text-sm text-gray-300">Currently accepting new projects and opportunities</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Send Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 bg-opacity-80 py-12 px-6 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Aahan Trikha</h3>
              <p className="text-gray-400 text-sm mb-6 max-w-md">
                Computer Science student and passionate software developer, dedicated to creating innovative solutions that make a difference. Always excited to take on new challenges and learn cutting-edge technologies.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/aahantrikha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/aahan-trikha-090a7a220" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:aahantrikha19@gmail.com" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/50">
                  <Mail size={20} />
                </a>
                <a href="tel:9540519594" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50">
                  <Phone size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-purple-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {['Home', 'About', 'Projects', 'Skills', 'Achievements', 'Contact'].map((link, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-purple-400">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-4">Subscribe for the latest updates on my projects and tech insights.</p>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 px-4 py-2 rounded-l-full bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
                <button 
                  onClick={handleSubscribe} 
                  className="bg-purple-600 hover:bg-purple-700 px-6 rounded-r-full transition-all duration-300 transform hover:scale-105 group"
                >
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2025 Aahan Trikha. All rights reserved. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
