// src/components/DogCard.js
import React, { useState } from 'react';
import AdoptionForm from './AdoptionForm';

const DogCard = ({ dog, onAdopted }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="dog-card">
      <img src={dog.img} alt={dog.nombre} />
      <h3>{dog.nombre}</h3>
      <p>Edad: {dog.edad} años</p>
      <p>Raza: {dog.raza}</p>
      <p>Tamaño: {dog.tamaño}</p>
      <p>Vacunado: {dog.vacunado ? 'Sí' : 'No'}</p>
      <p>Desparasitado: {dog.desparasitado ? 'Sí' : 'No'}</p>
      <p>Descripción: {dog.descripcion}</p>
      <button onClick={toggleForm}>Adoptar</button>
      {showForm && <AdoptionForm dog={dog} onAdopted={onAdopted} />}
    </div>
  );
};


export default DogCard;
