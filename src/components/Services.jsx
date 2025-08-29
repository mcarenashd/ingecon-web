import React from 'react';
import ServiceCard from './ServiceCard';
import styles from '../styles/Services.module.css';

const servicesData = [
  { id: 1, title: 'Diseño y Construcción', description: 'Transformamos tus ideas en proyectos sólidos, desde el diseño conceptual hasta la entrega final.' },
  { id: 2, title: 'Gestión de Proyectos', description: 'Controlamos cada etapa para garantizar que tu proyecto se entregue a tiempo, dentro del presupuesto y con la más alta calidad.' },
  { id: 3, title: 'Infraestructura Urbana', description: 'Especialistas en obras civiles que mejoran la calidad de vida en la ciudad, como puentes y vías de acceso.' },
  { id: 4, title: 'Consultoría Técnica', description: 'Brindamos asesoría experta para optimizar tus procesos y solucionar desafíos de ingeniería complejos.' }
];

function Services() {
  return (
    <section className={styles.services}>
      <h2>Nuestros Servicios</h2>
      <div className={styles.cardGrid}>
        {servicesData.map(service => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;