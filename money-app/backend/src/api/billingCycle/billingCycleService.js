const BillingCycle = require('./billingCycle');
const errorHandler = require('../common/errorHandler');

BillingCycle.methods(['get','post','put','delete']);
//Explicação em aula 90 - 3:30min
BillingCycle.updateOptions({
    new: true, //sempre retornar o último objeto persistido/alterado
    runValidators: true //sempre rodar validators no update
});

BillingCycle.after('post',errorHandler)
    .after('put',errorHandler);

BillingCycle.route('count', (req,res,next) => {
    BillingCycle.count((error,value)=>{
        if(error){
            res.status(500).json({errors: [error]});
        } else{
            res.json({value});
        }
    });
});

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
});

BillingCycle.before('get',function(req,res,next){
    let str = req.toString();
    console.log(`Executando um GET com ${str}`);
    next();
});

module.exports = BillingCycle;