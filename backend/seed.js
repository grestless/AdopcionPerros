require('dotenv').config();
const mongoose = require('mongoose');
const Dog = require('./models/Dog');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

const seedDogs = async () => {
  await Dog.deleteMany({});

  const dogs = [
    { name: 'Fido', age: 3, breed: 'Labrador', image: '/images/perro1.jpg' },
    { name: 'Rex', age: 5, breed: 'German Shepherd', image: '/images/perro2.webp' },
    { name: 'Bella', age: 2, breed: 'Beagle', image: '/images/perro3.webp' },
  ];

  await Dog.insertMany(dogs);
  console.log('Dogs added to database');
  mongoose.disconnect();
};

seedDogs();
