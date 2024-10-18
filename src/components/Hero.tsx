import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="home" className="bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div ref={ref} className={`text-center ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="flex justify-center items-center mb-8">
            <Cpu className="h-16 w-16 text-primary mr-4" />
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900">
              Simmio
            </h1>
          </div>
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Innovación en <span className="text-primary">Marketing y Sistemas</span>
          </p>
          <p className="mt-3 max-w-md mx-auto text-xl text-gray-600 sm:text-2xl md:mt-5 md:max-w-3xl">
            Impulsamos su negocio con estrategias de marketing innovadoras y soluciones tecnológicas de vanguardia.
          </p>
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
            <div className="rounded-md shadow">
              <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10">
                Contáctanos
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="#services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Nuestros Servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;