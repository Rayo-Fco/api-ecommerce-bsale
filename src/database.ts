import { Sequelize } from 'sequelize'
import config from './config';
/* 
conexion a la base de datos con sequelize para trabajarla con objeto

*/
export const sequelize = new Sequelize(
  config.database.database,
  config.database.username,
  config.database.password,{
      host:config.database.URL,
      dialect:'mysql',
      define:{ timestamps:false},
      logging: false 
  }
)

export class Database {
  constructor() { 
    this.mysql()
    
  }

  private mysql(): void {

    console.log( 'Connecting to database....')

    sequelize.authenticate().then(()=>{
        console.log('Successful connection')
        console.log( 'Connected to database')
    }).catch(err=>{
        console.log('Error connecting to database', err)
    })

  }

}