import express from 'express'
import cors from 'cors';
import morgan from 'morgan';
import config from './config'
import api from './routes'
import { Database } from './database'


/* 
Clase para iniciar el proyecto en donde se llaman la middleware,routes,config y database
*/

class App{
  public express: express.Application;

  constructor(){
    this.express = express()
    this.middleware()
    this.routes()
    this.config()
    this.database()
    
  }

  
  private config():void {
    this.express.set('port', config.port)
  }

  private middleware(): void {
    this.express.use(morgan('dev'));
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(express.urlencoded({extended: false}));
  }

  private routes(): void {
    this.express.use(api)
  }
  private database(): void {
    new Database()
  }

}

export default new App().express;
