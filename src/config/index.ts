/* 
 Archivo de configuracion 
*/

export default 
{
    port: process.env.PORT || 4000,
    database: {
        URL:process.env.MYSQL,
        database: 'bsale_test',
        username: 'bsale_test',
        password: 'bsale_test',
      }
 }