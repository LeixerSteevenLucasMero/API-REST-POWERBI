import { Response, Request } from 'express';
import { productsService } from '../services';

export const productsController = {
  getAllProducts: async (req: Request, res: Response) => {
    try {
      const data = await productsService.getAll();
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const data = await productsService.create(req.body);
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await productsService.update(id, req.body);
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await productsService.delete(id);
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
};
