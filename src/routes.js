const express = require('express');
const booksController = require('./controllers/booksController');

const routes = express.Router();

routes.post('/books/espec', booksController.especificacao);
module.exports = routes