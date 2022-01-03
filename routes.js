/* const { Router } = require('express');
const router = Router();
const { scrapeItExample }  = require("./scrape");

router.get('/', async(req,res)=>{
    try{
        scrapeItExample().then(({data,response})=>{
            return res.status(response.statusCode).json(data);
        }).catch((error)=>{
            console.log(error); 
            return false;
        });
    }catch(error){
        console.log(error); 
    }
}); 

module.Router = router;
 */
