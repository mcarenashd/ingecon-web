import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Ingecon</h4>
          <p>
            Convirtiendo ideas en estructuras sólidas con experiencia y
            dedicación.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h4>Contacto</h4>
          <p>Teléfonos: +(57) 1 467.2384 - 467.2385</p>
          <p>
            Email: <a href="mailto:info@ingecon.com.co">info@ingecon.com.co</a>
          </p>
          <p>Calle 148 No. 7G-42 Barrio Cedritos, Bogotá, Colombia</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/servicios">Servicios</a>
            </li>
            <li>
              <a href="/proyectos">Proyectos</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Ingecon. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
