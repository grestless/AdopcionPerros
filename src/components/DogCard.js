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
      <img src={dog.image} alt={dog.name} />
      <h3>{dog.name}</h3>
      <p>Edad: {dog.age}</p>
      <button onClick={toggleForm}>Adoptar</button>
      {showForm && <AdoptionForm dog={dog} onAdopted={onAdopted} />}
    </div>
  );
};

export default DogCard;
