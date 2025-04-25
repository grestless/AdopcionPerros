// app.js
const express = require('express');
const cors = require('cors'); // <-- AGREGADO
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // <-- AGREGADO: habilita todas las solicitudes de cualquier origen
app.use(bodyParser.json());

// Rutas
const adoptionRoutes = require('./routes/adoptions');
const dogRoutes = require('./routes/dogs');

app.use('/api/adoptions', adoptionRoutes);
app.use('/api/dogs', dogRoutes);

// Conexión a la base de datos
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Conectado a la base de datos'));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
