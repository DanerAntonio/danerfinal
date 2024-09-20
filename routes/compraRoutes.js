const express = require('express');
const router = express.Router();
const compraController = require('../controllers/compraController');

router.post('/compras', compraController.crearCompra);
router.get('/compras', compraController.listarCompras);

module.exports = router;
