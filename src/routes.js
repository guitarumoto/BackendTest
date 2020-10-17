const express = require('express');
const booksController = require('./controllers/booksController');

const routes = express.Router();

routes.post('/books/espec', booksController.especificacao);
routes.get('/books/frete',booksController.calculaFrete);
module.exports = routes