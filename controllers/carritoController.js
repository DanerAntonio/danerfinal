const Carrito = require('../models/Carrito');

// Agregar producto al carrito
exports.agregarProducto = async (req, res) => {
    const { clienteId, productoId, cantidad } = req.body;

    try {
        let carrito = await Carrito.findOne({ cliente: clienteId });

        if (!carrito) {
            carrito = new Carrito({ cliente: clienteId, productos: [] });
        }

        const productoExistente = carrito.productos.find(p => p.productoId == productoId);
        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            carrito.productos.push({ productoId, cantidad });
        }

        const carritoGuardado = await carrito.save();
        res.status(200).json(carritoGuardado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
