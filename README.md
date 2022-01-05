# WebScrap to Abctelefonos.es / WebScrap a AbcTelefonos.es
_EN: It's a simple way to convert searchable querys to AbcTelefonos.es to JSON, for consume it from any website_ 
_ES: Es una simple herramienta que permite convertir los search query a AbcTelefonos.es en un JSON que puede ser consumido desde cualquier web_ 

## Comenzando 🚀

_EN: just npm install to download the depedencies and node index.js to run it, make http request to localhost to test or just access to localhost/home/index.html for use the GUI_
_ES: tan solo npm install para descargar las dependencias y usa node index.js para correrlo, haz peticiones a localhost para ir probando o accede a locahost/home/index.html para hacer uso de la GUI_


### Pre-requisitos 📋

_EN: last test on node 14.18.2 and npm 6.14.15_
_ES: probado por ultima vez en node 14.18.2 y npm 6.14.15_

## Endpoints

- **Route: get:// :query | "Use the query url format of abctelefonos.es to make the petition"**
Code
...
//query_url format: /search?q=Pepe&l=&t=comercio&country=all
fetch('http://localhost/search?q=Pepe&l=&t=comercio&country=all',
        {
            method: "GET",
            headers: new Headers(),
            mode: 'cors',
            cache: 'default', 
        }.then(response => response).then( async data =>{
            let resjson = await data.json();
            console.log(resjson)
        });
...
Result
...
js
{
    "results": [
        {
            "name": "Pepe",
            "phone": "(011) 4781-0259",
            "street": "Aguilar 2487",
            "locality": "Capital Federal",
            "country": "Argentina"
        },
        {
            "name": "Astraldi Luis E",
            "phone": "(011) 4781-9808",
            "street": "Aguilar 2589 05 A",
            "locality": "Capital Federal",
            "country": "Argentina"
        },
        {
            "name": "Pepe Piriz",
            "phone": "(03482) 42-4936",
            "street": "Calle 31 Jorge 143",
            "locality": "Reconquista, Santa Fe",
            "country": "Argentina"
        },
    ],
    "pages": [
        {
            "to": "Siguiente",
            "link": "/comercio/argentina/pepe/pag_2"
        },
        {
            "to": "Siguiente",
            "link": "/comercio/chile/pepe/pag_2"
        },
        {
            "to": "Siguiente",
            "link": "/comercio/espana/pepe/pag_2"
        },
        {
            "to": "Siguiente",
            "link": "/comercio/usa/pepe/pag_2"
        },
        {
            "to": "Siguiente",
            "link": "/comercio/mexico/pepe/pag_2"
        },
        {
            "to": "Siguiente",
            "link": "/comercio/venezuela/pepe/pag_2"
        }
    ]
}
...
- **[Route: post:// ]("Send through post the query_url string on the body in a 'to_page' identificaor ")**

```
Ejemplo.png
```

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Express.js](https://expressjs.com/) - Framework para el Back / Framework for the Back
* [Axios](https://github.com/axios/axios) - Gestor de solicitudes HTTP / HTTP Request Manager
* [Scrape It](https://github.com/IonicaBizau/scrape-it) - Libreria que facilita el Web Scrap / Library to facilitate the Web Scraping
* [Tabulator](https://github.com/olifolkerd/tabulator) - Libreria para las tablas del index.html y su debida exportacion / Library for the tables and exporting the data


## Autores ✒️

* **Renato Galindo** - [Re595](https://github.com/Re595/)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.



---
⌨️ con ❤️ por [Renato Galindo Re595](https://github.com/Re595/) 😎😎
