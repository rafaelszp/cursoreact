const port=3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');

//Adicionando middlewares
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port,function(){
    console.log(`BACKEND RUNNING ON PORT ${port}`);

}); 

//Section 4/36 - 5:00min
module.exports = server;