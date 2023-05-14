"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModel = void 0;
const mongoose_1 = require("mongoose");
const productsSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
});
exports.ProductsModel = (0, mongoose_1.model)('products', productsSchema);
