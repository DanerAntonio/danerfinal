require('dotenv').config(); // Importante para usar variables de entorno
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Rutas
const clienteRoutes = require('./routes/clienteRoutes');
const compraRoutes = require('./routes/compraRoutes');
const carritoRoutes = require('./routes/carritoRoutes');

// Inicialización de la app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB Atlas utilizando una variable de entorno
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch((error) => console.error('Error al conectar con MongoDB Atlas:', error));

// Rutas de la API
app.use('/api', clienteRoutes);
app.use('/api', compraRoutes);
app.use('/api', carritoRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
