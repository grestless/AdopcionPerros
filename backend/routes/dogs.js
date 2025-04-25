const express = require('express');
const router = express.Router();
const Dog = require('../models/Dog'); // Importa el modelo de perro

// GET /api/dogs - Obtener todos los perros
router.get('/api/dogs', async (req, res) => {
    try {
        const dogs = await Dog.find();
        res.json(dogs);
    } catch (error) {
        console.error('Error al obtener los perros:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
});

// POST /api/dogs - Agregar un nuevo perro
router.post('/', async (req, res) => {
    try {
        const newDog = new Dog(req.body);
        await newDog.save();
        res.status(201).json(newDog); // Responde con el perro creado
    } catch (error) {
        console.error('Error al agregar un perro:', error);
        res.status(400).json({ message: 'Error al crear el perro' });
    }
});
  

module.exports = router;
