const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    raza: { type: String, required: true },
    tamaño: { type: String, required: true },
    vacunado: { type: Boolean, required: true },
    desparasitado: { type: Boolean, required: true },
    descripcion: { type: String, required: true },
    img: { type: String, required: true }
});

const Dog = mongoose.model('Dog', dogSchema);
module.exports = Dog;
