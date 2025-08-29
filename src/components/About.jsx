import React from 'react';
import styles from '../styles/About.module.css';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutImage}>
        {/* Aquí irá una imagen de la empresa o un icono */}
        <img src="https://via.placeholder.com/500" alt="Ingecon Team" />
      </div>
      <div className={styles.aboutContent}>
        <h2>Quiénes Somos</h2>
        <p>
          En Ingecon, somos un equipo de ingenieros y constructores apasionados por la excelencia. Con más de 20 años de experiencia, nos especializamos en la construcción de proyectos de infraestructura, industriales y residenciales, siempre cumpliendo con los más altos estándares de calidad y seguridad.
        </p>
        <p>
          Nuestra misión es transformar el entorno urbano y rural con soluciones innovadoras y sostenibles, dejando una huella de desarrollo y confianza en cada obra que emprendemos.
        </p>
      </div>
    </section>
  );
}

export default About;