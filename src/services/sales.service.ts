import { SalesModel } from '../models';

export const salesService = {
  getAll: async () => {
    return await SalesModel.find();
  },

  create: async (entity: object) => {
    return await SalesModel.create(entity);
  },

  update: async (id: string, body: object) => {
    return await SalesModel.findByIdAndUpdate(id, body);
  },

  delete: async (id: string) => {
    return await SalesModel.findByIdAndDelete(id);
  },
  updateMany: async (filter: object, update: object) => {
    return await SalesModel.updateMany(filter, update);
  },
};
