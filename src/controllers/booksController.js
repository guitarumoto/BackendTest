const getBooks = require('../functions/getBooks.js')
const orderBy = require('../functions/orderBy.js')
const frete = require('../functions/frete.js')

module.exports = {
    async especificacao(request, response){
        const resultado = getBooks.getBooks();
        const parametro = request.body;
        var result = []
        resultado.map(book => {
            if(parametro['originally_published']){
                if(parametro['originally_published'] === book.specifications['Originally published'] ){
                    result.push(book)
                } 
            }
            if(parametro ['author']){
                if(parametro['author'] === book.specifications['Author'] ){
                    result.push(book)
                } 
            }
            if(parametro ['page_count']){
                if(parametro['page_count'] === book.specifications['Page count'] ){
                    result.push(book)
                }

            }
            if(parametro ['illustrator']){
                if(parametro['illustrator'] === book.specifications['Illustrator'] ){
                    result.push(book)
                }

            }
            if(parametro ['genres']){
                if(typeof book.specifications['Genres'] === 'object'){
                    book.specifications['Genres'].map(genre=>{
                        if (parametro['genres'] === genre){
                            result.push(book)
                        }
                    })
                }else if(book.specifications['Genres'] === parametro['genres']){
                    result.push(book)
                }
            }
        })
           if(parametro['order'] === 'asc'){
               return response.json(orderBy.orderbyasc(result))
           }else if(parametro['order'] === 'desc'){
              return response.json(orderBy.orderbydesc(result))
          }
},
    async calculaFrete(request, response){
        const listalivros = getBooks.getBooks();
        return response.json(frete.calculo(listalivros))
        
    }
}
