import React from 'react';
import { useInView } from 'react-intersection-observer';

const clients = [
  { name: 'Cliente 1', logo: 'https://via.placeholder.com/150?text=Logo+1' },
  { name: 'Cliente 2', logo: 'https://via.placeholder.com/150?text=Logo+2' },
  { name: 'Cliente 3', logo: 'https://via.placeholder.com/150?text=Logo+3' },
  { name: 'Cliente 4', logo: 'https://via.placeholder.com/150?text=Logo+4' },
  { name: 'Cliente 5', logo: 'https://via.placeholder.com/150?text=Logo+5' },
  { name: 'Cliente 6', logo: 'https://via.placeholder.com/150?text=Logo+6' },
];

const Clients: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Nuestros Clientes</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Marcas que confían en nosotros
          </p>
        </div>
        <div ref={ref} className="mt-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`flex justify-center items-center ${
                  inView ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  className="h-16 object-contain"
                  src={client.logo}
                  alt={client.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;