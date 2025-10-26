import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import deckImg from "../assets/logo-ingecon.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <img
          className={styles.logoImage}
          src={deckImg}
          alt="logo-ingecon"
        />
      </div>

      <button className={styles.hamburger} onClick={toggleMobileMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <div className={`${styles.navbarLinksContainer} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.navbarLinks}>
          <Link to="/" onClick={toggleMobileMenu}>Inicio</Link>
          <Link to="/servicios" onClick={toggleMobileMenu}>Servicios</Link>
          <Link to="/proyectos" onClick={toggleMobileMenu}>Proyectos</Link>
          <Link to="/contacto" onClick={toggleMobileMenu}>Contacto</Link>
          <Link to="/politica-de-datos" onClick={toggleMobileMenu}>Política de Datos</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;