import {Router} from 'express'
import CtrlSearch from '../controllers/ControllerSearch';
import CtrlCategory from '../controllers/ControllerCategory'

const api = Router()
/* 
 archivo donde se definen las rutas y se llaman al controlador 
*/

api.get('/',CtrlSearch.searchProduct)

api.get('/category/:category',CtrlCategory.getProductsByCategory)

api.get('/categories/all',CtrlCategory.getCategory)


export default api;
