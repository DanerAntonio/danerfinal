const Compra = require('../models/Compra');

// Crear una compra
exports.crearCompra = async (req, res) => {
    try {
        const nuevaCompra = new Compra(req.body);
        const compraGuardada = await nuevaCompra.save();
        res.status(201).json(compraGuardada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Listar todas las compras
exports.listarCompras = async (req, res) => {
    try {
        const compras = await Compra.find().populate('cliente').populate('productos.productoId');
        res.status(200).json(compras);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
