import { Request, Response } from 'express';
import Product from '../models/Product'
import { paginate } from '../helpers/pagination'

/* 
    Controlador de las Busquedas en donde se reciben las query params
*/

export class ControllerSearch {
    constructor() { }

    //Metodo para buscar el productos por el nombre digitado en el buscador junto a los filtros y la paginacion 
    public async searchProduct(req: Request, res: Response) {
        const { search = '', page = '', limit = '', order_by, order_direction } = req.query
        const product = await paginate(Product, page, limit, search, order_by, order_direction, null)
        return res.status(200).send(product)
    }

}

export default new ControllerSearch()