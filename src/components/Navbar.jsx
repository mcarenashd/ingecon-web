import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className={styles.navbarLinksContainer}>
        <div className={styles.navbarLinks}>
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;