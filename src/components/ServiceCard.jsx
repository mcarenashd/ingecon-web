import React from 'react';
import styles from '../styles/ServiceCard.module.css';

function ServiceCard({ title, description }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;