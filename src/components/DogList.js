// src/components/DogList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DogCard from './DogCard';

const DogList = () => {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/dogs');
        setDogs(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching dogs:', error);
        setError('Error fetching dogs');
      }
    };

    fetchDogs();
  }, []);

  const handleAdoption = (dogId) => {
    setDogs((prevDogs) => prevDogs.filter((dog) => dog._id !== dogId));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="dog-list">
      {dogs.map((dog) => (
        <DogCard key={dog._id} dog={dog} onAdopted={handleAdoption} />
      ))}
    </div>
  );
};


export default DogList;
