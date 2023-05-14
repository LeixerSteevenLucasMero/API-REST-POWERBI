"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesModel = void 0;
const mongoose_1 = require("mongoose");
const salesSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    total: { type: String, required: true },
    productos: { type: [String], required: true },
    cantidad: { type: String, required: true },
    fecha: { type: String, required: true },
    ventasAno: { type: String, required: true },
    descuento: { type: String, required: true },
    pago: { type: String, required: true },
    empleado: { type: String, required: true },
    cliente: { type: String, required: true },
});
exports.SalesModel = (0, mongoose_1.model)('sales', salesSchema);
