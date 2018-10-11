Object.isObject = function (v) {
	return typeof v === 'function' || toString.call(v) === '[object Object]'
}
Object.isClass = function (v) {
	return typeof v === 'function' && /^\s*class\s+/.test(v.toString())
}
Object.assignDeep = function (target, ...args) {
	if (Object.isObject(target)) {
		for (let i = 0; i < args.length; i++) {
			if (Object.isObject(args[i])) {
				Object.keys(args[i]).forEach(key => {
					if (Object.isObject(target[key]) && Object.isObject(args[i][key])) {
						Object.assignDeep(target[key], args[i][key])
					} else {
						target[key] = args[i][key]
					}
				})
			}
		}
		return target
	} else {
		throw new Error('target is not a object')
	}
}