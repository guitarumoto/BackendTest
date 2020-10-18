# Passo a Passo

1 - Clonar este repositório; 

2 - Esse projeto foi desenvolvido no NodeJs versão 12.19.0;

3 - No terminal, dentro do repositório, rode o comando, para instalar as dependências;
```
npm install
```

4 - No Terminal, dentro do repositório, rode o comando para executar o scrpit que inicia o server na porta 3001;
```
npm run dev
```

5 - Use o programa  "Insomnia" ou "Postman" para visualizar e enviar requisições do client side;

6 - Para acessar os endpoints utilize na IDE de teste:
```
http://localhost:3001/-enpoint-
```

# Endpoints

## /books/espec POST:
Para realizar uma busca de livro pela suas especificações, no corpo da requisição insira se quer a lista em ASC ou DESC, em seguida a especificação e a palavra que deseja buscar. Exemplo de corpo de requisição:
```
{
	"order" : "asc",
	"genres": "Adventure fiction"
}
```
A resposta será
```
[
  {
    "id": 2,
    "name": "20,000 Leagues Under the Sea",
    "price": 10.1,
    "specifications": {
      "Originally published": "June 20, 1870",
      "Author": "Jules Verne",
      "Page count": 213,
      "Illustrator": [
        "Édouard Riou",
        "Alphonse-Marie-Adolphe de Neuville"
      ],
      "Genres": "Adventure fiction"
    }
  },
  {
    "id": 1,
    "name": "Journey to the Center of the Earth",
    "price": 10,
    "specifications": {
      "Originally published": "November 25, 1864",
      "Author": "Jules Verne",
      "Page count": 183,
      "Illustrator": "Édouard Riou",
      "Genres": [
        "Science Fiction",
        "Adventure fiction"
      ]
    }
  }
]
```


## /books/shipp GET:
Para visualizar o método que calcula o preço do frete dos livros entre no endpoint e somente envie a requisição sem corpo. A respposta será:
```
[
  2,
  2.02,
  1.462,
  2.23,
  1.2300000000000002
]
```