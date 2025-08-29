import React from 'react';
import { useForm } from 'react-hook-form'; // Importamos el hook
import styles from '../styles/Contact.module.css';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data); 
    alert('¡Formulario enviado con éxito!');
  };

  return (
    <main className={styles.contactPage}>
      <h2>Contacto</h2>
      <p>Envíanos un mensaje y te responderemos lo antes posible.</p>

      <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)} data-vercel-form>
        <label htmlFor="name">Nombre:</label>
        <input 
          type="text" 
          id="name" 
          {...register("name", { required: "El nombre es obligatorio." })} 
        />
        {errors.name && <span className={styles.error}>{errors.name.message}</span>}
        
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          {...register("email", { 
            required: "El email es obligatorio.", 
            pattern: {
              value: /^\S+@\S+$/i,
              message: "El formato del email no es válido."
            }
          })} 
        />
        {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        
        <label htmlFor="message">Mensaje:</label>
        <textarea 
          id="message" 
          {...register("message", { required: "El mensaje es obligatorio." })} 
          rows="5"
        ></textarea>
        {errors.message && <span className={styles.error}>{errors.message.message}</span>}
        
        <button type="submit">Enviar Mensaje</button>
      </form>
    </main>
  );
}

export default Contact;