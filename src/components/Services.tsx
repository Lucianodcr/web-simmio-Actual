import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Rocket, Cpu, BarChart, Code, Megaphone, Users } from 'lucide-react';

const services = [
  {
    title: 'Marketing Digital',
    description: 'Estrategias personalizadas para aumentar su presencia online y atraer clientes potenciales.',
    icon: Megaphone,
  },
  {
    title: 'Desarrollo de Sistemas',
    description: 'Soluciones tecnológicas a medida para optimizar sus procesos de negocio.',
    icon: Code,
  },
  {
    title: 'Análisis de Datos',
    description: 'Insights valiosos para tomar decisiones informadas y mejorar el rendimiento de su negocio.',
    icon: BarChart,
  },
  {
    title: 'Automatización de Procesos',
    description: 'Optimizamos sus operaciones mediante la implementación de sistemas inteligentes.',
    icon: Cpu,
  },
  {
    title: 'Consultoría Tecnológica',
    description: 'Asesoramiento experto para alinear la tecnología con sus objetivos empresariales.',
    icon: Users,
  },
  {
    title: 'Innovación Empresarial',
    description: 'Impulsamos la transformación digital para mantener su competitividad en el mercado.',
    icon: Rocket,
  },
];

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Servicios</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Soluciones integrales para su negocio
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            En Simmio, ofrecemos una gama completa de servicios diseñados para impulsar su crecimiento y éxito en la era digital.
          </p>
        </div>

        <div ref={ref} className="mt-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {services.map((service, index) => (
              <div key={service.title} className={`relative ${inView ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.title}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;