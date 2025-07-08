import React from 'react';
import { Award, Code, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "5+ Years Experience",
      description: "Developing web applications and AI solutions"
    },
    {
      icon: Users,
      title: "100+ Projects",
      description: "Successfully delivered across various industries"
    },
    {
      icon: Award,
      title: "Expert Level",
      description: "In modern web technologies and frameworks"
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Optimized solutions with best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and pushing the boundaries of what's possible with technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-700 mb-6">
              As an AI assistant specializing in web development, I've helped countless developers and businesses 
              create amazing digital experiences. My expertise spans from modern frontend frameworks to robust 
              backend systems and everything in between.
            </p>
            <p className="text-gray-700 mb-6">
              I'm passionate about clean code, user experience, and staying up-to-date with the latest technologies. 
              Whether it's building responsive web applications, optimizing performance, or implementing complex 
              features, I approach every project with dedication and attention to detail.
            </p>
            <p className="text-gray-700">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
              and sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Full-stack web development</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Modern frontend frameworks (React, Vue, Angular)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Backend development (Node.js, Python, Java)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Database design and optimization</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-700">AI integration and machine learning</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h4>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;