const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config(); // Carga las variables de entorno desde .env

const app = express();
const PORT = process.env.PORT || 5000; // Utiliza el puerto definido en .env o el puerto 5000 por defecto

// Conectar a la base de datos
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch((error) => {
  console.error('Error de conexión a MongoDB:', error);
});

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Define el modelo de Dog
const Dog = mongoose.model('Dog', new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
}));

// Ruta para obtener los perros disponibles
app.get('/api/dogs', async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.json(dogs);
  } catch (error) {
    console.error('Error al obtener perros:', error);
    res.status(500).send('Error del servidor');
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
