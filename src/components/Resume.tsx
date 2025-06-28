import React from 'react';
import { Download, Mail, Phone, MapPin, Linkedin, Github, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Resume = () => {
  const visibleSections = useScrollAnimation();
  const isVisible = visibleSections.has('resume');

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
    <section id="resume" data-animate className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In <span className="text-purple-600">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="text-gray-900 dark:text-white font-medium">youssef.arafat09@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="text-gray-900 dark:text-white font-medium">+201552059114</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-gray-900 dark:text-white font-medium">Available Worldwide</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Find me online
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/youssef-arafat-26322426b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href="https://github.com/woolyDestroy77"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-gray-900 rounded-lg flex items-center justify-center transition-colors duration-200"
                      title="GitHub Profile"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href="https://www.upwork.com/freelancers/~0109abf4d69a1132fb?viewMode=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                      title="Upwork Profile"
                    >
                      <Briefcase className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Download & CTA */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to collaborate?
                </h3>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  I'm always excited to work on new projects and help bring innovative ideas to life. 
                  Let's create something amazing together!
                </p>
                
                <div className="space-y-4">
                  <button 
                    onClick={downloadResume}
                    className="w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download Resume</span>
                  </button>
                  
                  <a
                    href="https://www.upwork.com/freelancers/~0109abf4d69a1132fb?viewMode=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Briefcase className="h-5 w-5" />
                    <span>Hire me on Upwork</span>
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  What I Can Help With
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Full-stack web application development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Modern frontend with React/TypeScript</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span>Backend APIs and database design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Code review and mentoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;