import React from 'react';
import styles from '../styles/About.module.css';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutImage}>
        {/* Aquí irá una imagen de la empresa o un icono */}
        <img src="src/assets/about-us.png" alt="Ingecon Team" />
      </div>
      <div className={styles.aboutContent}>
        <h2>Quiénes Somos</h2>
        <p>
          Somos una organización dedicada a la Interventoría, Consultoría y Gerencia. La Empresa nació en el año de 1.978 con el nombre de Ingenierías Ltda.; a partir de Agosto de 1.998 cambió su razón social a INGECON S.A. y a partir del 5 de Septiembre de 2012 cambió su razón social a <strong>INGENIERIA Y CONSULTORIA INGECON S.A.S</strong>. En lo que respecta a los servicios de Interventoría los define como “el control ejercido, tanto técnico, como administrativo, por la empresa interventora a las empresas diseñadoras y/o constructoras”. Este servicio se caracteriza porque tiene un componente no material (el servicio profesional de consultoría) y un componente material (los documentos que resultan del control).
        </p>
        <p>
          Nuestra <strong>misión</strong> está encaminada a la prestación de servicios de Ingeniería, buscando la satisfacción del cliente, proveedores y de nuestro recurso humano, a través del mejoramiento continuo. Nuestras actividades se desarrollan con gran sentido de respeto por la comunidad beneficiaria y usuaria de nuestra labor.
        </p>
        <p>Nuestra <strong>visión</strong>, es consolidarnos en el año de 2015, como una de las mejores y más reconocidas empresas de ingeniería, especializada en la ejecución de Interventoría de la construcción y diseño, contribuyendo de esta forma al desarrollo del país, aportando los mejores recursos humanos y técnicos.”</p>
        <p>La <strong>calidad</strong> en <strong>INGECON</strong>, está entendida como: "Nuestro compromiso, actitud e innovación" para satisfacer al cliente mediante el desarrollo de trabajos que cumplan en un todo sus requisitos, necesidades y expectativas. Nuestra política se orienta a la obtención de la confianza y respeto de nuestro recurso humano, brindando la suficiente capacitación, así como los elementos de motivación e innovación dirigidos hacia la obtención de un gran sentido de pertenencia, que permita alcanzar los objetivos y metas de la empresa, mejorando continuamente la eficacia del Sistema de Gestión de Calidad.</p>
      </div>
    </section>
  );
}

export default About;