import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Clients from '../components/Clients'; 

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients /> 
    </main>
  );
}

export default Home;