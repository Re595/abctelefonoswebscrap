/* const cors = require('cors'); */
/* const dotenv = require('dotenv'); */
const express = require('express');
/* var fs = require('fs'); */
/* dotenv.config(); */

let f = new Date();
let fecha = f.getFullYear()+""+(f.getMonth() + 1)+""+f.getDate();
const router = require('./routes');

const app = express();

// SETTINGS

/* app.set('port', process.argv[2] || process.env.DATA_PORT || 83); */


// MIDDLEWARES 

/* app.use(cors({ exposedHeaders: 'Authorization' })); */
/* var logs = fs.createWriteStream(`logs/${fecha}.txt`, {flags : 'a'}); */
/* app.use(morgan({stream: logs})); */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
router(app);

module.exports = app;