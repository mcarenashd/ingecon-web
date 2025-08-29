import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Ingecon</h4>
          <p>Convirtiendo ideas en estructuras sólidas con experiencia y dedicación.</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Contacto</h4>
          <p>Teléfono: +57 123 4567</p>
          <p>Email: contacto@ingecon.com.co</p>
          <p>Dirección: Calle Falsa 123, Bogotá, Colombia</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/proyectos">Proyectos</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Ingecon. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;