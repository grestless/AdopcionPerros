import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Bienvenido a la Veterinaria de Perros en Adopción</h1>
      <p>
        Somos una organización dedicada a encontrar hogares amorosos para perros
        abandonados. Aquí puedes encontrar información sobre nuestros perros en adopción
        y cómo puedes ayudar.
      </p>
      <section className="about">
        <h2>Sobre Nosotros</h2>
        <p>
          En nuestra veterinaria, nos enfocamos en el bienestar y la salud de los perros.
          Nuestro objetivo es encontrar el hogar perfecto para cada perro que rescatamos.
          Todos nuestros perros están vacunados, desparasitados y esterilizados.
        </p>
      </section>
      <section className="adoption-process">
        <h2>Proceso de Adopción</h2>
        <p>
          Nuestro proceso de adopción es sencillo y transparente. Primero, explora los
          perfiles de los perros disponibles en nuestra página. Luego, selecciona el perro
          que deseas adoptar y completa el formulario de adopción. Nos pondremos en contacto
          contigo para concertar una cita y conocer al perro.
        </p>
      </section>
      <section className="contact">
        <h2>Contacto</h2>
        <p>
          Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos:
        </p>
        <ul>
          <li>Teléfono: (123) 456-7890</li>
          <li>Email: contacto@veterinariaadopcion.com</li>
          <li>Dirección: Calle Falsa 123, Ciudad, País</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
