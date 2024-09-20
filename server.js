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
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB Atlas
const mongoURI = "mongodb+srv://final:Chavo1705@atlascluster.bg0f9kx.mongodb.net/magnoedison?retryWrites=true&w=majority&appName=AtlasCluster";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
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
