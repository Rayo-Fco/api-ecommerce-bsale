import { Op } from 'sequelize'
import Category from '../models/Category';
/* 
La paginacion generado dependiendo del modelo y dependiendo de las query params
*/
export const paginate = async (model: any, pageSize: any, pageLimit: any, search: any, order_by: any, order_direction: any, search_category: any) => {
    try {
        //se parsean los valores a number ya que vienen por string y si no viene adoptan el valor por defecto
        const limit = parseInt(pageLimit, 12) || 12;
        const page = parseInt(pageSize, 12) || 1;

        //se configura el where en la consulta para realizar un like a la base de datos con el nombre de los productos
        const where = search && search.length > 0 ? {
            name: {
                [Op.like]: `%${search}%`,
            }
        } : {}
        //se configura el orden de los fitros por si viene en la consulta y si no adopta uno por defecto
        let order: any = order_by ? [order_by, order_direction && order_direction.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'] : ['name', order_direction && order_direction.toUpperCase() === 'DESC' ? 'DESC' : 'ASC']

       
        //se configura el where en la consulta para las categorias por nombre
        const where_category = search_category && search_category.length > 0 ?
            {
                name: search_category
            } : {}

        //se obtiene el modelo que se pasa por la funcion y se realiza la busqueda en la DB para obtenes los datos
        
        const query = await model.findAndCountAll({
            offset: getOffset(page, limit),
            limit,
            where,
            order: [order],
            include: [{
                model: Category,
                required: true,
                attributes: ['name'],
                as: 'categoria',
                where: where_category
            }],
        });

        //Se obtiene el total de los elementos y se pasan a una constante 
        const totalItem = query.count || 1

        //se genera la respuesta en donde devuelve la paginacion junto a los productos
        const response = {
            totalPage: Math.ceil(totalItem / limit),
            currentPage: page,
            nextPage: getNextPage(page, limit, totalItem),
            previousPage: getPreviousPage(page),
            totalItem,
            data: query.rows,
        }

        return response;

    } catch (error) {
        console.log(error);
    }
}

const getOffset = (page: number, limit: number) => {
    return (page * limit) - limit;
}

const getNextPage = (page: number, limit: number, total: number) => {
    if ((total / limit) > page) {
        return page + 1;
    }

    return null
}

const getPreviousPage = (page: number) => {
    if (page <= 1) {
        return null
    }
    return page - 1;
}