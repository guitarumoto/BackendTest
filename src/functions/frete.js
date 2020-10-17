module.exports = {
    calculo(listalivros){
        var valores = []
        listalivros.map(valor =>{
            var valorFrete
            valorFrete = valor['price'] * 0.2
            valores.push(valorFrete)
        })
        return valores
    }
}