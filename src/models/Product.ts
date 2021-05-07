import {Model, DataTypes }  from 'sequelize'
import {sequelize} from '../database'
import Category from './Category'


/* 
 Modelo de los Productos
*/

export interface IProduct{
    id: number;
    name: string;
    url_image: string;
    price:number;
    discount: number;
    category:number;
  };


class Product extends Model<IProduct>{}

 Product.init({
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    url_image: DataTypes.STRING,
    price:DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    category:DataTypes.INTEGER,
 },{
     sequelize,
     tableName:'product',
 })

 Product.hasOne(Category,{foreignKey:'id',sourceKey:'category', as:'categoria'})


 export default Product