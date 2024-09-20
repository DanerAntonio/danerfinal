const express = require('express');
const router = express.Router();
const proveedorController = require('../controller/proveedorController');

// Rutas de proveedores
router.get('/', proveedorController.getAllProveedores);
router.get('/:id', proveedorController.getProveedorById);
router.post('/', proveedorController.createProveedor);
router.put('/:id', proveedorController.updateProveedor);
router.delete('/:id', proveedorController.deleteProveedor);

module.exports = router;
