const fs = require('fs');
const path = require('path')

module.exports = {
	getBooks() {
		var contents = fs.readFileSync(path.resolve(__dirname, '..', '..', 'books.json'));
		var books = JSON.parse(contents);
		var listBooks = []
		for (var i = 0; i < books.length; i++) {
			listBooks.push(books[i]);
		}
		return listBooks
	}
}