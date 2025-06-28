import React from 'react';
import { Code2, Coffee, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const visibleSections = useScrollAnimation();
  const isVisible = visibleSections.has('about');

  return (
    <section id="about" data-animate className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-purple-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience building 
                exceptional digital experiences. I specialize in creating robust, scalable 
                applications that solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in web development started with a curiosity for how things work 
                behind the scenes. Today, I help businesses and individuals bring their 
                ideas to life through clean code and thoughtful design.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/30 px-4 py-2 rounded-lg">
                  <Code2 className="h-5 w-5 text-purple-600" />
                  <span className="text-purple-800 dark:text-purple-300 font-medium">Clean Code</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
                  <Coffee className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800 dark:text-blue-300 font-medium">Coffee Lover</span>
                </div>
                <div className="flex items-center space-x-2 bg-teal-50 dark:bg-teal-900/30 px-4 py-2 rounded-lg">
                  <Heart className="h-5 w-5 text-teal-600" />
                  <span className="text-teal-800 dark:text-teal-300 font-medium">Problem Solver</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-1">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Experience</span>
                      <span className="font-bold text-gray-900 dark:text-white">3+ Years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Projects Completed</span>
                      <span className="font-bold text-gray-900 dark:text-white">50+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Happy Clients</span>
                      <span className="font-bold text-gray-900 dark:text-white">30+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Technologies</span>
                      <span className="font-bold text-gray-900 dark:text-white">15+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-20 transform rotate-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;