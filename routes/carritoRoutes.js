const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

router.post('/carrito', carritoController.agregarProducto);

module.exports = router;
