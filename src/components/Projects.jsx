import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import styles from '../styles/Projects.module.css';

const projectsData = [
  // Proyectos para 'Principales trabajos realizados' (filtro 'all')
  { id: 1, title: 'Edificio Residencial', category: 'Edificaciones', description: 'Moderno complejo de apartamentos con 50 unidades y amplias zonas verdes.', imageUrl: 'https://via.placeholder.com/600x400/007bff/FFFFFF?text=Edificio' },
  { id: 2, title: 'Puente de Conexión', category: 'Interventoría de obras Viales', description: 'Estructura de concreto prefabricado que conecta dos importantes sectores de la ciudad.', imageUrl: 'https://via.placeholder.com/600x400/007bff/FFFFFF?text=Puente' },
  { id: 3, title: 'Estudios de Viabilidad', category: 'Estudios y Diseños', description: 'Análisis completo de viabilidad y factibilidad técnica de un proyecto a gran escala.', imageUrl: 'https://via.placeholder.com/600x400/007bff/FFFFFF?text=Estudios' },
  { id: 4, title: 'Gerencia en Proyectos Civiles', category: 'Interventorías y gerencias...', description: 'Servicios de gerencia y consultoría para proyectos de construcción a gran escala.', imageUrl: 'https://via.placeholder.com/600x400/007bff/FFFFFF?text=Gerencia' },
  { id: 5, title: 'Mantenimiento de Puentes', category: 'Interventoría y Mantenimiento de Obras Civiles', description: 'Mantenimiento y reparación de puentes para asegurar su durabilidad y seguridad.', imageUrl: 'https://via.placeholder.com/600x400/007bff/FFFFFF?text=Mantenimiento+Puentes' }
];

const categories = [
  'Principales trabajos realizados',
  'Interventoría de obras Viales',
  'Estudios y Diseños',
  'Interventoría y Mantenimiento de Obras Civiles',
  'Interventoría en Estudios y Diseños',
  'Interventorías y gerencias...',
];

function Projects() {
  const [filter, setFilter] = useState('Principales trabajos realizados');

  const filteredProjects = projectsData.filter(project => {
    if (filter === 'Principales trabajos realizados') {
      return true;
    }
    return project.category === filter;
  });

  return (
    <section className={styles.projects}>
      <h2>Experiencia</h2>
      <div className={styles.filterContainer}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.cardGrid}>
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;