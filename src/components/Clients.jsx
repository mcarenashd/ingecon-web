import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/Clients.module.css';

import aeronauticaLogo from '../assets/aeronautica.png';
import aniLogo from '../assets/ani.png';
import enterritorioLogo from '../assets/enterritorio.png';
import iduLogo from '../assets/idu.png';
import inviasLogo from '../assets/invias.png';
import transcaribeLogo from '../assets/transcaribe.png';
import avanteLogo from '../assets/avante.png';
import metrocaliLogo from '../assets/metrocali.png';

const clientsData = [
  { id: 1, name: 'Client A', logoUrl: aeronauticaLogo },
  { id: 2, name: 'Client B', logoUrl: aniLogo },
  { id: 3, name: 'Client C', logoUrl: enterritorioLogo },
  { id: 4, name: 'Client D', logoUrl: iduLogo },
  { id: 5, name: 'Client E', logoUrl: inviasLogo },
  { id: 6, name: 'Client F', logoUrl: transcaribeLogo },
  { id: 7, name: 'Client G', logoUrl: avanteLogo },
  { id: 8, name: 'Client H', logoUrl: metrocaliLogo },
];

function Clients() {
  const settings = {
    dots: false,
    infinite: true,
    speed:500,
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className={styles.clients}>
      <h2>Nuestros Clientes</h2>
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {clientsData.map(client => (
            <div key={client.id} className={styles.clientLogo}>
              <img src={client.logoUrl} alt={client.name} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Clients;