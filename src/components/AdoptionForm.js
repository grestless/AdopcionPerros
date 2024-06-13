// src/components/AdoptionForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AdoptionForm = ({ dog, onAdopted }) => {
  const [adopterName, setAdopterName] = useState('');
  const [adopterEmail, setAdopterEmail] = useState('');
  const [adopterPhone, setAdopterPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/adoptions', {
        dogId: dog._id,
        adopterName,
        adopterEmail,
        adopterPhone,
      });
      setMessage('Solicitud de adopción enviada exitosamente');
      onAdopted(dog._id);
      // Clear the form
      setAdopterName('');
      setAdopterEmail('');
      setAdopterPhone('');
    } catch (error) {
      console.error('Error al enviar la solicitud de adopción:', error);
      setMessage('Error al enviar la solicitud de adopción');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adoptar a {dog.name}</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={adopterName}
          onChange={(e) => setAdopterName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={adopterEmail}
          onChange={(e) => setAdopterEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Teléfono:</label>
        <input
          type="tel"
          value={adopterPhone}
          onChange={(e) => setAdopterPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit">Enviar solicitud</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default AdoptionForm;
