import React from 'react';
import styles from '../styles/Navbar.module.css';
import deckImg from "../assets/logo-ingecon.png";


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <img
          className={styles.logoImage}
          src={deckImg}
          alt="logo-ingecon"
        />
      </div>
      <div className={styles.navbarLinksContainer}> {/* Nuevo contenedor para los links */}
        <div className={styles.navbarLinks}>
          <a href="/">Inicio</a>
          <a href="/servicios">Servicios</a>
          <a href="/proyectos">Proyectos</a>
          <a href="/contacto">Contacto</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;