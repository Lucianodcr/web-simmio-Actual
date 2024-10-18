import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`lg:text-center ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Contacto</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            ¿Listo para impulsar su negocio con Simmio?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Contáctenos hoy mismo para discutir cómo podemos ayudarle a alcanzar sus objetivos de marketing y tecnología.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-8 w-8 text-primary mr-4" />
                  <span className="text-lg">info@simmio.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-8 w-8 text-primary mr-4" />
                  <span className="text-lg">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-8 w-8 text-primary mr-4" />
                  <span className="text-lg">123 Innovation Ave, Ciudad Tecnológica, País</span>
                </div>
              </div>
            </div>
            <form className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary-dark transition duration-300">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;