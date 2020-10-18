const express = require('express');
const booksController = require('./controllers/booksController');

const routes = express.Router();

routes.post('/books/espec', booksController.especificacao);
routes.get('/books/shipp', booksController.calcshipp);
module.exports = routes