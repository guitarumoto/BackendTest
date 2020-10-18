module.exports = {
	calc(listBooks) {
		var cost = []
		listBooks.map(price => {
			var shipping
			shipping = price['price'] * 0.2
			cost.push(shipping)
		})
		return cost
	}
}