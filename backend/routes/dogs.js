const express = require('express');
const router = express.Router();
const Dog = require('../models/Dog'); // Importa el modelo de perro

// GET /api/dogs - Obtener todos los perros
router.get('/', async (req, res) => {
    try {
        const dogs = await Dog.find();
        res.json(dogs);
    } catch (error) {
        console.error('Error al obtener los perros:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
});

module.exports = router;
