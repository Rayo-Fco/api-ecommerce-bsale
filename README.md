# api-ecommerce-bsale

El Backend esta realizado por Typescript, en donde se ocupo express para el diseño de la api y sequelize para trabajar la base de datos como un ORM

El sistema se compone de siguiente estructura:

```
├── src
│   ├── config
│   │   └── index.ts 
│   ├── controllers
│   │   ├── ControllerCategory.ts
│   │   └── ControllerSearch.ts 
│   ├── helpers
│   │   └── pagination.ts 
│   ├── models
│   │   ├── Category.ts
│   │   └── Product.ts 
│   ├── routers
│   │   └── index.ts 
│   ├── app.ts
│   ├── database.ts 
│   └── index.ts 
├── packege.json
├── tsconfig.json
└── README.md
```


|      Archivo      |       Descripcion        | 
| ----------------- | ------------------------ | 
| ```config/index.ts```| Se configuran las variables en un json en donde se obtiene el puerto, los usuario de la base de datos y la url de la misma|
|```controllers/ControllerCategory.ts```| Es el controlador de las categorias en donde se pueden obtener las categorias y los productos por categorias |
|```controllers/ControllerSearch.ts```| Es el controlador de las busquedas en donde se pueden obtener las busquedas con los filtros determinados |
|```helpers/pagination.ts```| Es una funcion en donde genera una paginacion en la respuesta de la base de datos |
|```models/Category.ts```| Es el modelo de la base de datos de las Categorias |
|```models/Product.ts```| Es el modelo de la base de datos de los Productos |
|```routers/index.ts```| Es el controlador de todas las rutas en donde se importan los controladores para hacer su uso dependiendo de la ruta asociada |
|```app.ts```| Es la clase donde se cargan los componentes como router,config,database y middleware |
|```database.ts```| Es la conexion a la base de datos por medio de Sequelize hacia Mysql |
|```index.ts```| Es la clase donde se inicia la aplicacion llamando a la clase App() |

***Endpoint***

|      Ruta      |      Funcion      |       Valores Recibidos  |  Valor Retornado  |  Descripcion |      
 |------------- | ----------------- | ------------------------ | ------------------|--------------|
 |(GET) ```/```| searchProduct()| Request.query=>filtros y la pagina | ``` {totalPage:number;currentPage: number;nextPage: number; previousPage: number;totalItem:number; data: [];}```| Se Realiza la consulta en la base de datos para obtener los produtos dependiento de los filtros si aplican|
|(GET) ```/categories/all```| getCategory()| ningundo | categorias[] | Se Realiza la consulta en la base de datos para obtener las categorias pero solo su nombre|
|(GET) ```/category/:category```|(GET) getProductsByCategory()| Request.params=>category y Request.query=>filtros y la pagina | ``` {totalPage:number;currentPage: number;nextPage: number; previousPage: number;totalItem:number; data: [];}``` |Se obtiene los datos desde los parametros en la url como dentro de las query params para obtener los filtros y la paginacion|





