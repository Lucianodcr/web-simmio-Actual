import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`lg:text-center ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Sobre Nosotros</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Expertos en Marketing y Sistemas
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            En Simmio, combinamos nuestra pasión por la innovación con años de experiencia en marketing digital y desarrollo de sistemas para ofrecer soluciones integrales que impulsan el crecimiento de su negocio.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
              <p className="text-lg text-gray-600">
                Nuestra misión es proporcionar soluciones innovadoras en marketing y sistemas que permitan a nuestros clientes alcanzar sus objetivos de negocio de manera eficiente y efectiva, manteniéndose a la vanguardia en un mundo digital en constante evolución.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Nuestros Valores</h3>
              <ul className="space-y-2">
                {['Innovación constante', 'Excelencia en el servicio', 'Integridad y transparencia', 'Colaboración y trabajo en equipo', 'Enfoque en resultados'].map((value, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <span className="text-gray-600">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Equipo Simmio"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;