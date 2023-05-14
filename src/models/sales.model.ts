import {Schema, model} from 'mongoose';

const salesSchema = new Schema({
    id:{type: String, required: true},
    total:{type: String, required: true},
    productos:{type: [String], required: true},
    cantidad:{type: String, required: true},
    fecha:{type: String, required: true},
    ventasAno:{type: String, required: true},
    descuento:{type: String, required: true},
    pago:{type: String, required: true},
    empleado:{type: String, required: true},
    cliente:{type: String, required: true},
});

export const SalesModel = model('sales', salesSchema);