// routes/adoptions.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Adoption = require('../models/Adoption');
const Dog = require('../models/Dog');

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Puedes usar cualquier otro servicio de correo electrónico compatible
    auth: {
        user: process.env.EMAIL_USER, // Coloca tu correo electrónico
        pass: process.env.EMAIL_PASS  // Coloca tu contraseña
    }
});

// POST /api/adoptions - Crear una nueva adopción
router.post('/', async (req, res) => {
    const { dogId, adopterName, adopterEmail, adopterPhone } = req.body;
    try {
        const adoption = new Adoption({ dogId, adopterName, adopterEmail, adopterPhone });
        await adoption.save();

        // Marcar el perro como adoptado
        await Dog.findByIdAndUpdate(dogId, { adopted: true });

        // Enviar correo electrónico al adoptante
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: adopterEmail,
            subject: 'Solicitud de adopción recibida',
            text: `Hola ${adopterName},\n\nGracias por tu solicitud para adoptar a uno de nuestros perros. 
            Te invitamos a visitar nuestra dirección en Balcarse 123 para finalizar el proceso de adopción.\n\nSaludos,\nVeterinaria de Perros en Adopción`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error al enviar el correo:', error);
                return res.status(500).json({ message: 'Error al enviar el correo' });
            }
            console.log('Correo enviado:', info.response);
            res.status(201).json(adoption); // Responde una vez que el correo se haya enviado
        });

    } catch (error) {
        console.error('Error al crear la adopción:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
});

module.exports = router;
