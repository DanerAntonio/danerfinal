const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String },
    direccion: { type: String },
    compras: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Compra' }]
});

module.exports = mongoose.model('Cliente', ClienteSchema);
