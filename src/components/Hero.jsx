import React from 'react';
import styles from '../styles/Hero.module.css';
import heroBackground from '../assets/calle-92.png'; // Importa tu imagen aquí

function Hero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className={styles.overlay}></div> {/* Capa oscura semitransparente */}
      <div className={styles.heroContent}>
        <h1>Construyendo el futuro, hoy.</h1>
        <p>En Ingecon, convertimos ideas en estructuras sólidas. Somos líderes en construcción, ingeniería y gestión de proyectos con un enfoque en la innovación y la calidad.</p>
        <button className={styles.heroButton}>Conoce Nuestros Proyectos</button>
      </div>
    </section>
  );
}

export default Hero;