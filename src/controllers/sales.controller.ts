import { Response, Request } from 'express'
import { salesService } from '../services'

export const salesController = {
  getAllSales: async (req: Request, res: Response) => {
    try {
      const data = await salesService.getAll();
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      })
    }
  },

  createSale: async (req: Request, res: Response) => {
    try {
      const data = await salesService.create(req.body);
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      })
    }
  },

  updateSale: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await salesService.update(id, req.body);
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      })
    }
  },

  deleteSale: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await salesService.delete(id);
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      })
    }
  },
//actualizar el campo de la fecha al modelo de ventas y poner fechas random
  actualizarFechaVentas: async (req: Request, res: Response) => {
    try {
      const fechaInicio = new Date('2020-01-01');
      const fechaFin = new Date('2022-12-31');
      const actualizacion = { $set: { fechaVenta: generarFechaAleatoria(fechaInicio, fechaFin) } };
      const data = await salesService.updateMany({}, actualizacion);
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      });
    }
  },
}

// Función para generar una fecha aleatoria entre dos fechas dadas
function generarFechaAleatoria(fechaInicio: Date, fechaFin: Date): Date {
  const tiempoInicio = fechaInicio.getTime();
  const tiempoFin = fechaFin.getTime();
  const tiempoAleatorio = Math.random() * (tiempoFin - tiempoInicio) + tiempoInicio;
  return new Date(tiempoAleatorio);
}

