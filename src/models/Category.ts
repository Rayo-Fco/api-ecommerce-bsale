import {Model, DataTypes }  from 'sequelize'
import {sequelize} from '../database'

/* 
Modelos de las Categorias desde sequelize
*/

export interface ICategory{
    id: number;
    name: string;
  };


class Category extends Model<ICategory>{}

Category.init({
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        
    },
    name: DataTypes.STRING,
 },{
     sequelize,
     tableName:'category'
 })


 export default Category