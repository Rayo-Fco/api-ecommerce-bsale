import { Request, Response } from 'express';
import Category from '../models/Category'
import { paginate } from '../helpers/pagination'
import Product from '../models/Product'

/* 
    Controlador de las categorias en donde se reciben los parametros pueden por medio de la url o las query params
*/
export class ControllerCategory {
    constructor() { }

    

    public async getCategory(req: Request, res: Response){
        //se realiza la consulta para el modelo de la base de datos para obtener las categorias ordenadas por nombre
        const categories = await Category.findAll({
            attributes:['name'],
            order:[['name','ASC']]
        })
        return res.status(200).send(categories)
    }

    public async getProductsByCategory(req: Request, res: Response){
        /* se obtiene el nombre del parametro de la url para realizar la consulta a la base de datos con junto los parametros de la query para aplicar los filtros y la paginacion*/
        const { category } = req.params
        const { page = '', limit = '', order_by, order_direction } = req.query
        const product = await paginate(Product, page, limit, null, order_by, order_direction, category)
        return res.status(200).send(product)
    }

}

export default new ControllerCategory()