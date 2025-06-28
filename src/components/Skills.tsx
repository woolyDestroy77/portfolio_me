import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const visibleSections = useScrollAnimation();
  const isVisible = visibleSections.has('skills');

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-700" },
        { name: "Tailwind CSS", level: 95, color: "from-teal-500 to-cyan-500" },
        { name: "Next.js", level: 85, color: "from-gray-700 to-gray-900" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-500 to-green-600" },
        { name: "Express", level: 85, color: "from-gray-600 to-gray-700" },
        { name: "PostgreSQL", level: 80, color: "from-blue-600 to-indigo-600" },
        { name: "Supabase", level: 85, color: "from-emerald-500 to-green-500" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Docker", level: 75, color: "from-blue-500 to-blue-600" },
        { name: "AWS", level: 70, color: "from-yellow-500 to-orange-500" },
        { name: "Figma", level: 80, color: "from-purple-500 to-pink-500" }
      ]
    }
  ];

  return (
    <section id="skills" data-animate className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical <span className="text-purple-600">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm proficient in a wide range of technologies and continuously learning new ones to stay current with industry trends.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-105`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Git'].map((tech, index) => (
                <div
                  key={index}
                  className={`group bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {tech.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;