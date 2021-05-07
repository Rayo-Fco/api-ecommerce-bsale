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


***Controller***


|      Funcion      |       Valores Recibidos  |  Valor Retornado  |  Descripcion |      
| ----------------- | ------------------------ | ------------------|--------------|




