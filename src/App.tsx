import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <About />
      <Contact />
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Simmio. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;