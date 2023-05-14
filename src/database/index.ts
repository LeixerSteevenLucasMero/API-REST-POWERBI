import mongoose from 'mongoose';
import { MONGO_URI } from '../config';

export const connectDB = () => {
  mongoose.set('strictQuery', true);
  mongoose.connect(MONGO_URI as string, {}, () => {
    console.log('Conectado a MONGODB');
  });
}
