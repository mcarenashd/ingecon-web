import React from 'react';
import styles from '../styles/ProjectCard.module.css';

function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className={styles.card}>
      {imageUrl && <img src={imageUrl} alt={title} className={styles.cardImage} />}
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;