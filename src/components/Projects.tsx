import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const visibleSections = useScrollAnimation();
  const isVisible = visibleSections.has('projects');

  const projects = [
    {
      title: "St. Joseph News",
      description: "Modern news platform with real-time updates",
      liveUrl: "https://stjoseph-news.netlify.app",
      githubUrl: "https://github.com/woolyDestroy77/StJoseph.News.git",
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "MindMate AI",
      description: "AI-powered mental wellness platform",
      liveUrl: "https://puremindai.netlify.app",
      githubUrl: "https://github.com/woolyDestroy77/MindMateAi.git",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      tags: ["TypeScript", "AI/ML", "Supabase"]
    },
    {
      title: "Nottingham Academy",
      description: "Educational platform for online learning",
      liveUrl: "https://nottingham-academy.netlify.app",
      githubUrl: "https://github.com/woolyDestroy77/Nottingham-Academy-Website.git",
      image: "https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      tags: ["React", "Express", "MongoDB"]
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping experience",
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      comingSoon: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool",
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      tags: ["React", "Socket.io", "Node.js"],
      comingSoon: true
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather visualization app",
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      tags: ["Vue.js", "Chart.js", "API"],
      comingSoon: true
    }
  ];

  return (
    <section id="projects" data-animate className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-purple-600">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating amazing web experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {project.comingSoon && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {!project.comingSoon && (
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;