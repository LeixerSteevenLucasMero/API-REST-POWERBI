import {ProductsModel} from '../models';

export const productsService = {
  getAll: async()=>{
    return await ProductsModel.find();
  },

  create: async(entity: object)=>{
    return await ProductsModel.create(entity);
  },

  update: async(id:string, body:object)=>{
    return await ProductsModel.findByIdAndUpdate(id, body);
  },

  delete: async(id:string)=>{
    return await ProductsModel.findByIdAndDelete(id);
  }
}
