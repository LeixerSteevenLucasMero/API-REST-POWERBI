import { Schema, model } from 'mongoose';

const productsSchema = new Schema({
  id: { type: String, required: true },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
});

export const ProductsModel = model('products', productsSchema);
