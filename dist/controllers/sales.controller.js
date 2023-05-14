"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesController = void 0;
const services_1 = require("../services");
exports.salesController = {
    getAllSales: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield services_1.salesService.getAll();
            return res.json(data);
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }),
    createSale: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield services_1.salesService.create(req.body);
            return res.json(data);
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }),
    updateSale: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const data = yield services_1.salesService.update(id, req.body);
            return res.json(data);
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }),
    deleteSale: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const data = yield services_1.salesService.delete(id);
            return res.json(data);
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }),
    //actualizar el campo de la fecha al modelo de ventas y poner fechas random
    actualizarFechaVentas: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const fechaInicio = new Date('2020-01-01');
            const fechaFin = new Date('2022-12-31');
            const actualizacion = { $set: { fechaVenta: generarFechaAleatoria(fechaInicio, fechaFin) } };
            const data = yield services_1.salesService.updateMany({}, actualizacion);
            return res.json(data);
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }),
};
// Función para generar una fecha aleatoria entre dos fechas dadas
function generarFechaAleatoria(fechaInicio, fechaFin) {
    const tiempoInicio = fechaInicio.getTime();
    const tiempoFin = fechaFin.getTime();
    const tiempoAleatorio = Math.random() * (tiempoFin - tiempoInicio) + tiempoInicio;
    return new Date(tiempoAleatorio);
}
