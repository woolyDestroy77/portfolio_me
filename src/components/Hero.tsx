import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [userName, setUserName] = useState('');

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/Youssef_Arafat_Resume.docx';
    link.download = 'Youssef_Arafat_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-teal-300 dark:bg-teal-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-3 mb-8">
              <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="px-4 py-2 rounded-lg border-2 border-purple-200 dark:border-purple-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm focus:border-purple-500 dark:focus:border-purple-400 outline-none transition-colors duration-200 text-gray-800 dark:text-white"
              />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              Hi{userName && `, ${userName}`},
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                I'm Youssef
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Full-Stack Developer crafting beautiful, functional web experiences with 
              <span className="text-purple-600 dark:text-purple-400 font-semibold"> 3 years of expertise</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="flex items-center space-x-2">
                <span>View My Work</span>
                <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-200" />
              </span>
            </button>
            
            <button 
              onClick={downloadResume}
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-all duration-200"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;