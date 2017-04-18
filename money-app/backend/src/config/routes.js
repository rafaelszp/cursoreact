const express = require('express');

module.exports = function(server){
    
    //Definindo URL BASE
    const router = express.Router();
    server.use('/api',router);

    //Rotas de ciclo de pagto
    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(router,'/billingCycles');

}