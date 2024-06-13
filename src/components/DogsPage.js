import React from 'react';
import DogCard from '../components/DogCard';
import AdoptionForm from '../components/AdoptionForm';

const DogsPage = () => {
  const dogs = [
    { id: 1, name: 'Max', age: '3 años', image: 'max.jpg' },
    { id: 2, name: 'Bella', age: '2 años', image: 'bella.jpg' },
    // Agrega más perros aquí
  ];

  return (
    <div className="dogs-page">
      <h1>Perros en Adopción</h1>
      <div className="dogs-list">
        {dogs.map((dog) => (
          <div key={dog.id}>
            <DogCard dog={dog} />
            <AdoptionForm dog={dog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogsPage;
