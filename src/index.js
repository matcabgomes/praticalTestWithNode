const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const operationsRouting = require('./modules/routing');

// Adicionando bodyParser para utilização do json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/operations', operationsRouting(express.Router()));

//Busca a porta que o sistema disponibilizar, ou a padrão:3000
const port = process.env.PORT || 3000;
app.listen(port);

const test = require('./modules/numbers');
test.sum(2,3);