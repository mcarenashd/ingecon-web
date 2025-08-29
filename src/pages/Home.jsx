import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Footer from '../components/Footer';


function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />

    </main>
  );
}

export default Home;