import React from 'react';
import ServiceCard from './ServiceCard';
import styles from '../styles/Services.module.css';

const servicesData = [
  { id: 1, title: 'Interventoría integral de Edificios, Obras Sanitarias, Obras Arquitectónicas', description: 'Transformamos tus ideas en proyectos sólidos, desde el diseño conceptual hasta la entrega final.' },
  { id: 2, title: 'Interventoría integral de Carreteras y Vías', description: 'Controlamos cada etapa para garantizar que tu proyecto se entregue a tiempo, dentro del presupuesto y con la más alta calidad.' },
  { id: 3, title: 'Interventoría de obras de Urbanismo', description: 'Especialistas en obras civiles que mejoran la calidad de vida en la ciudad, como puentes y vías de acceso.' },
  { id: 4, title: 'Diseño de Pavimentos', description: 'Brindamos asesoría experta para optimizar tus procesos y solucionar desafíos de ingeniería complejos.' },
  { id: 5, title: 'Diseños de Señalización y Demarcación', description: 'Brindamos asesoría experta para optimizar tus procesos y solucionar desafíos de ingeniería complejos.' },
  { id: 6, title: 'Diseños Estructurales y de Cimentaciones', description: 'Brindamos asesoría experta para optimizar tus procesos y solucionar desafíos de ingeniería complejos.' },
  { id: 7, title: 'Diseños Hidráulicos, Sanitarios y Eléctricos', description: 'Brindamos asesoría experta para optimizar tus procesos y solucionar desafíos de ingeniería complejos.' },
  { id: 8, title: 'Diseños y Trazados Viales', description: 'Brindamos asesoría experta para optimizar tus procesos y solucionar desafíos de ingeniería complejos.' },
  { id: 9, title: 'Estudios de Impacto y Planes de Manejo Ambiental', description: 'Brindamos asesoría experta para optimizar tus procesos y solucionar desafíos de ingeniería complejos.' },
  { id: 10, title: 'Estudios de Tráfico y Capacidad Vial', description: 'Brindamos asesoría experta para optimizar tus procesos y solucionar desafíos de ingeniería complejos.' },
  { id: 11, title: 'Gerencia de proyectos civiles, mecánicos, eléctricos, mineros y ambientales', description: 'Brindamos asesoría experta para optimizar tus procesos y solucionar desafíos de ingeniería complejos.' }
];

function Services() {
  return (
    <section className={styles.services}>
      <h2>Nuestros Servicios</h2>
      <p className={styles.text}>Nuestros servicios están directamente enfocados hacia el logro del óptimo desarrollo de los procesos de Consultoría e Interventoría, lo cual permite asegurar que los trabajos se ejecuten bajo los más estrictos estándares de eficiencia, calidad y cumplimiento. Entre otros, prestamos los siguientes servicios:</p>
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