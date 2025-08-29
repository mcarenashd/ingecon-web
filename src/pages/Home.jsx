import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      {/* Aquí irán las siguientes secciones: About, Services, etc. */}
    </main>
  );
}

export default Home;