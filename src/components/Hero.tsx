import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-300"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Available for work</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-pulse">
                Sai Mukesh
              </span>
            </h1>

            <div className="mb-6">
              <p className="text-xl md:text-2xl text-blue-200 mb-2 font-semibold">
                Full-Stack Developer 
              </p>
              <div className="flex items-center text-gray-300 mb-4">
                <MapPin size={16} className="mr-2" />
                <span>India,Andhra Pradesh</span>
              </div>
            </div>

           

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                Let's Work Together
              </a>
              <a
                href="#projects"
                className="border-2 border-blue-400/50 text-blue-200 px-8 py-4 rounded-full font-semibold hover:border-blue-400 hover:text-white hover:bg-blue-400/10 transition-all duration-300 text-center backdrop-blur-sm"
              >
                View My Work
              </a>
              <button className="border-2 border-gray-500/50 text-gray-300 px-6 py-4 rounded-full font-semibold hover:border-gray-400 hover:text-white hover:bg-gray-400/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm">
                <Download size={18} />
                <span>Resume</span>
              </button>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:bolt@example.com"
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Decorative elements around image */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-blue-400/30 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-purple-400/30 rounded-full"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 border border-cyan-400/30 rounded-full"></div>
              
              {/* Main profile image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1 hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-gray-900">
                    <img
                      src="src\components\WhatsApp Image 2025-07-08 at 19.59.16_0745bb27.jpg"
                      alt="Bolt - Full Stack Developer"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                {/* Floating skill badges */}
                <div className="absolute -top-6 right-8 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span className="text-white text-sm font-medium">React</span>
                </div>
                <div className="absolute top-1/4 -left-8 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span className="text-white text-sm font-medium">Node.js</span>
                </div>
                <div className="absolute bottom-1/4 -right-6 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span className="text-white text-sm font-medium">AI</span>
                </div>
                <div className="absolute -bottom-6 left-8 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span className="text-white text-sm font-medium">TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="text-gray-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;