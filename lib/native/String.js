String.prototype.toUnderscore = function () {
	return this.replace(/[A-Z]/g, function (x, i) {
		x = x.toLowerCase()
		return i ? `_${x}` : x
	})
}