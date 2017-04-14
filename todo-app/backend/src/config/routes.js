const express = require('express');

//Section 4-36
module.exports = function(server){

    //API ROUTES
    const router = express.Router();
    server.use('/api', router);

    //TODO ROUTES minuto 3:30
    const todoService = require('../api/todo/todoService');
    todoService.register(router,'/todos');
}