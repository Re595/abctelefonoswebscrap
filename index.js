var express = require('express');
const path = require('path');
const { toWeb }  = require("./scrape");
var app = express();

const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/* Rutas estaticas para el Home index*/
app.use("/home", express.static(__dirname + "/home"));
app.use("/css", express.static(__dirname + "/home/css"));
app.use("/js", express.static(__dirname + "/home/js"));
/* Ruta get :query, es la principal, ver el index.html para ver ejemplo de consumo a esta ruta*/
app.get('/ubication/', async (req,res)=>{
    let { query } = req;  
    console.log(query.country); 
    try{
        let headersList = {
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"  
           }
           
           let reqOptions = {
             url: `https://www.abctelefonos.com/ubicacion?=country=${query.country}&term=${query.term}`,
             method: "GET",
             headers: headersList,
             responseEncoding: 'latin1',
           }
           const response = await axios.request(reqOptions); 
           let { data } = response;  
           return await res.send(data);
    }catch(error){
        console.log(error);
        return res.status(500).json({ error: error });
    }
}); 
app.get('/:query/', (req,res)=>{
    let { url } = req; 
    try{
        toWeb(url).then(async (response)=>{
            res.set({ 'content-type': 'application/json; charset=latin1' });
            return await res.json(response);
        }).catch((error)=>{
            return res.status(500).json({ error: error });
            
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({ error: error });
    }
}); 
/*Ruta inicial vacia*/
app.get('/', (req,res)=>{
    let { url } = req; 
    try{
        toWeb(url).then(async (response)=>{
            res.set({ 'content-type': 'application/json; charset=latin1' });
            return await res.json(response);
        }).catch((error)=>{
            return res.status(500).json({ error: error });
            
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({ error: error });
    }
}); 
/*Ruta post para carga de paginas con formato de abctelefonos.es */ 
app.post('/',async(req, res)=>{
        console.log(await req.body);
        let { to_page } = await req.body;

        url = to_page;
        try {
            toWeb(url).then(async (response) => {
                res.set({ 'content-type': 'application/json; charset=utf-8' });
                return await res.json(response);
            }).catch((error) => {
                console.log(error);
                return res.status(500).json({ error: error });
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error });
        }
    }); 
/*La app inicializa en el Puerto 80 por defecto, cambiar en caso de querer usar otro */

const server = require('http').createServer(app);
const port = process.env.PORT || 80;
server.listen(port, () => console.log(`Listening on ${port}`));
//app.listen(port, 'localhost');