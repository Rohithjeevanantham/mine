import React, { useState, useEffect } from 'react';
import { Motion } from 'lucide-react';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    console.log("Portfolio.js is rendering"); // Debugging log
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    // Your project details remain unchanged
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-900">RJ</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition duration-300">About</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-900 transition duration-300">Experience</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-900 transition duration-300">Projects</a>
              <a href="#contact" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-blue-900 mb-6">
                Transforming Ideas into Intelligent Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                AI Engineer & Technical Writer specializing in machine learning, computer vision, and natural language processing
              </p>
              <div className="flex space-x-4">
                <a href="#contact" className="bg-blue-900 text-white px-8 py-3 rounded hover:bg-blue-800 transition duration-300">
                  Get in Touch
                </a>
                <a href="#projects" className="border border-blue-900 text-blue-900 px-8 py-3 rounded hover:bg-blue-50 transition duration-300">
                  View Projects
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <Motion className="w-full h-auto text-blue-900" size={400} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 mb-12">Innovative solutions driving real-world impact</p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-blue-900">{project.title}</h3>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-900 transition duration-300"
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
                </div>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-4 py-1 bg-blue-50 text-blue-900 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-50 p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Let's Connect</h2>
            <div className="flex justify-center space-x-8">
              <a 
                href="mailto:jeevananthamrohith@gmail.com" 
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-900 transition duration-300"
              >
                <i className="fas fa-envelope text-xl"></i>
                <span>Email</span>
              </a>
              <a 
                href="https://github.com/rohithjj" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-900 transition duration-300"
              >
                <i className="fab fa-github text-xl"></i>
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/rohithjj" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-900 transition duration-300"
              >
                <i className="fab fa-linkedin text-xl"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
