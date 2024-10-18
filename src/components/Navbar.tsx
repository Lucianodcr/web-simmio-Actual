import React, { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Cpu className="h-8 w-8 text-primary mr-2" />
              <span className="text-2xl font-bold text-gray-900">Simmio</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#home" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-primary">Inicio</a>
            <a href="#services" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary">Servicios</a>
            <a href="#portfolio" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary">Portafolio</a>
            <a href="#about" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary">Nosotros</a>
            <a href="#contact" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary">Contacto</a>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#home" className="bg-primary text-white block pl-3 pr-4 py-2 border-l-4 border-primary">Inicio</a>
            <a href="#services" className="text-gray-500 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-primary">Servicios</a>
            <a href="#portfolio" className="text-gray-500 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-primary">Portafolio</a>
            <a href="#about" className="text-gray-500 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-primary">Nosotros</a>
            <a href="#contact" className="text-gray-500 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-primary">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;