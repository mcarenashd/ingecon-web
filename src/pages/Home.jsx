import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Clients from '../components/Clients'; // Importa el nuevo componente
import Footer from '../components/Footer';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients /> 
      <Footer />
    </main>
  );
}

export default Home;