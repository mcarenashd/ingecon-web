import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import ProjectCard from './ProjectCard';
import styles from '../styles/Projects.module.css';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
});

const categories = [
  'Principales trabajos realizados',
  'Interventoría de obras Viales',
  'Estudios y Diseños',
  'Interventoría y Mantenimiento de Obras Civiles',
  'Interventoría en Estudios y Diseños',
  'Interventorías y gerencias...',
];

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('Principales trabajos realizados');
  const [projectsToShow, setProjectsToShow] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'proyecto'
        });
        
        // Filtra cualquier item nulo o indefinido directamente de la respuesta
        const validItems = response.items.filter(item => item && item.fields);

        if (validItems.length > 0) {
          const fetchedProjects = validItems.map(item => ({
            id: item.sys.id,
            title: item.fields.title,
            description: item.fields.description,
            category: item.fields.category,
            imageUrl: item.fields.image?.fields?.file?.url
          }));
          
          setProjects(fetchedProjects);
        } else {
          setProjects([]);
        }

      } catch (error) {
        console.error("Error fetching projects from Contentful:", error);
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(project => {
    if (filter === 'Principales trabajos realizados') {
      return true;
    }
    return project.category === filter;
  });

  const handleLoadMore = () => {
    setProjectsToShow(prev => prev + 6);
  };

  const displayedProjects = filteredProjects.slice(0, projectsToShow);

  if (isLoading) {
    return <div className={styles.loading}>Cargando proyectos...</div>;
  }

  return (
    <section className={styles.projects}>
      <h2>Experiencia</h2>
      <div className={styles.filterContainer}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
            onClick={() => {
              setFilter(category);
              setProjectsToShow(6);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.cardGrid}>
        {displayedProjects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
      {projectsToShow < filteredProjects.length && (
        <button onClick={handleLoadMore} className={styles.loadMoreButton}>
          Cargar Más
        </button>
      )}
    </section>
  );
}

export default Projects;