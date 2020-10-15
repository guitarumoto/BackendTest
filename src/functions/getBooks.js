const fs = require('fs');
const path = require('path')

module.exports = {
    getBooks(){
        var contents = fs.readFileSync(path.resolve(__dirname,'..','..','books.json'));
        var livros = JSON.parse(contents);
        var listaLivros = []
        for (var i = 0; i < livros.length; i++) {
            listaLivros.push(livros[i]);
        }
        return listaLivros
    }
}