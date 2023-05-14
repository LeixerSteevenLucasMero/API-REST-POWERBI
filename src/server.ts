import express,{Express} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import {connectDB} from './database';
import {PORT} from './config'
import {routes} from './routes'

export class Server{
  private app:Express;

  constructor(){
    this.app = express();
    connectDB();
    this.configuration();
    this.middlewares();
    this.routes();
  }

  configuration(){
    this.app.set('port', PORT || 3000);
  }

  middlewares(){
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes(){
    this.app.get('/', (req, res)=>{
      res.status(200).json({
        name:'API REST'
      })
    });

    this.app.use('/api/sales', routes.SalesRoute);
    this.app.use('/api/products', routes.ProductsRoute);

  }

  listen(){
    this.app.listen(this.app.get('port'), ()=>{
      console.log(`Server esta corriendo en el puerto ${this.app.get('port')}`);      
    })
  }

}