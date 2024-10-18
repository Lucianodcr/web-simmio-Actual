import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Sistema de Gestión de Inventario',
    description: 'Solución integral para el control de inventario en tiempo real.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    details: {
      images: [
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      ],
      features: [
        'Control de stock en tiempo real',
        'Gestión de proveedores',
        'Alertas de reabastecimiento',
        'Informes personalizados',
      ],
    },
  },
  {
    title: 'Plataforma de E-commerce',
    description: 'Tienda en línea personalizada con integración de pagos y gestión de pedidos.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    details: {
      images: [
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      ],
      features: [
        'Diseño responsive',
        'Integración con múltiples pasarelas de pago',
        'Sistema de gestión de pedidos',
        'Panel de administración intuitivo',
      ],
    },
  },
  {
    title: 'Dashboard de Análisis de Datos',
    description: 'Visualización interactiva de KPIs y métricas de negocio en tiempo real.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    details: {
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      ],
      features: [
        'Gráficos interactivos en tiempo real',
        'Personalización de métricas y KPIs',
        'Integración con múltiples fuentes de datos',
        'Exportación de informes',
      ],
    },
  },
  {
    title: 'App de Gestión de Proyectos',
    description: 'Herramienta colaborativa para la planificación y seguimiento de proyectos.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    details: {
      images: [
        'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      ],
      features: [
        'Gestión de tareas y subtareas',
        'Asignación de recursos',
        'Seguimiento de tiempo y costos',
        'Colaboración en tiempo real',
      ],
    },
  }
];

const Portfolio: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const openModal = (item: typeof portfolioItems[0]) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Portafolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nuestros Sistemas en Acción
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explore algunos de los sistemas innovadores que hemos desarrollado para nuestros clientes.
          </p>
        </div>

        <div ref={ref} className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {portfolioItems.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 ${
                  inView ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(item)}
              >
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {selectedItem.details.images.map((image, index) => (
                <img key={index} src={image} alt={`${selectedItem.title} ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
              ))}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Características principales:</h3>
            <ul className="list-disc list-inside mb-4">
              {selectedItem.details.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
            <a
              href={`https://wa.me/1234567890?text=Hola, estoy interesado en obtener más información sobre el sistema "${selectedItem.title}".`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 inline-block"
            >
              Solicitar información por WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;