const numbers = require('./numbers');
const operationsRouting = (router) => {
  router
    .post('/sum', (req, res) => {
        if(!req.body.value){
            res.send({
                "result": 'The field name must be: value'
            });
        }
        result_sum = numbers.sum(req.body.value);      
        res.send({
         "result": result_sum
        });
    })
    .post('/average', (req, res) => {
        if(!req.body.value){
            res.send({
                "result": 'The field name must be: value'
            });
        }
        result_sum = numbers.average(req.body.value);        
        res.send({
         "result": result_sum
        });
    });

  return router;
};

module.exports = operationsRouting;