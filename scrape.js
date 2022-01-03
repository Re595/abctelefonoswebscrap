const scrapeIt = require("scrape-it");
const axios = require('axios');

/*Aqui es donde se realiza el web scrap a Abctelefonos.es */
async function toWeb(query) { 
    /* Esta funcion es la que hace la solicitud a la web */
    const axiosResponse = await axios.request({
        method: 'GET',
        url: `https://www.abctelefonos.com${query}`, /* Aqui se pone la url que se quiere scrapear, 
                                                        el query se genera en el front, se pasa a la ruta :query 
                                                        (o en su defecto por POST de forma manual a la ruta POST, y aqui llega, 
                                                        creando la ruta completa de abctelefonos.es)*/
        responseType: 'arraybuffer',
        responseEncoding: 'latin1',
        /*Importante el encode a latin1 por compatibilidad con caracteres especiales */
    }); 
    /*Se guarda en una variable todo el html de la web consultada */ 
    const htmlstring = axiosResponse.data.toString('latin1');
    /*Y a ese html se le aplicara el webscrap */
    const scrapeResult = await scrapeIt.scrapeHTML(htmlstring, {
        results:{
            listItem: '.resultItem', 
            /*En data es donde se encuenta la info esencial*/ 
            data: {
                name: '.name', //Nombre
                phone: '.phone', //Telefono
                street:'[itemprop=streetAddress]', //Calle
                locality:'[itemprop=addressLocality]',//Localidad
                country:'[itemprop=addressCountry]',//Pais
            },
            
        },pages:{ //Paginas
            listItem:'.pager li',
            data: { //Y aqui se guardan las diferentes rutas de paginacion, siendo to el nombre (siguiente y anterior) y el link siendo el url
                to:'a',
                link:{
                    selector: 'a',
                    attr:'href' 
                }
            } 
        }
            
        
    });
    return scrapeResult; //Aqui se regresa el json resultante de este scraping
}
module.exports.toWeb = toWeb; 