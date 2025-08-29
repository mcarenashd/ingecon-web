import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/Clients.module.css';

const clientsData = [
  { id: 1, name: 'Client A', logoUrl: 'src/assets/aeronautica.png' },
  { id: 2, name: 'Client B', logoUrl: 'src/assets/ani.png' },
  { id: 3, name: 'Client C', logoUrl: 'src/assets/enterritorio.png' },
  { id: 4, name: 'Client D', logoUrl: 'src/assets/idu.png' },
  { id: 5, name: 'Client E', logoUrl: 'src/assets/invias.png' },
  { id: 6, name: 'Client F', logoUrl: 'src/assets/transcaribe.png' },
  { id: 7, name: 'Client G', logoUrl: 'src/assets/avante.png' },
  { id: 8, name: 'Client H', logoUrl: 'src/assets/metrocali.png' },
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