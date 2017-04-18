const port = 3004;

const bodyParser = require('body-parser'); 
const express = require('express');
const allowCors = require('./cors')
const queryParser = require('express-query-int');

const server = express();

server.use(bodyParser.urlencoded({extended: true})); //explicação em aula 8/87 - 4:00min
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());


server.listen(port,function(){
    let date = new Date().toISOString().split('T')[1].replace('Z','');
    console.log(`[${date}] BACKEND running on port ${port}`);
})


module.exports = server;