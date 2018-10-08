String.prototype.toUnderscore = function () {
	return this.replace(/[A-Z]/g, function (x, i) {
		x = x.toLowerCase()
		return i ? `_${x}` : x
	})
}

String.prototype.toCapitalize = function () {
	return this.replace(/^[a-z]/g, x => x.toUpperCase()).replace(/\ [a-z]/g, x => x.toUpperCase())
}