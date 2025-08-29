import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
    </main>
  );
}

export default Home;