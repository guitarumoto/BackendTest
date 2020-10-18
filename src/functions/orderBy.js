module.exports = {
	orderbyasc(result) {
		var asc = []
		result.map(booksonarray => {
			asc.push(booksonarray)
			asc.sort(function (a, b) {
				return parseFloat(a.price) - parseFloat(b.price)
			});
		})


		return asc
	},
	orderbydesc(result) {
		var desc = []
		result.map(booksonarray => {
			desc.push(booksonarray)
			desc.sort(function (a, b) {
				return parseFloat(b.price) - parseFloat(a.price)
			});
		})

		return desc
	}
}