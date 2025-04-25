export const isPrime = (n: number) => {
	let flag = 1
	if (n < 2) return (flag = 0)
	let i = 2
	while (i < n) {
		if (n % i == 0) {
			flag = 0
			break
		}
		i++
	}
	return flag
}

// create a positive prime number list small than n
export const generatePrimeList = (n: number) => {
	let i = 0,
		check = 0,
		result: Array<number> = []
	while (i < n) {
		check = isPrime(i)
		if (check == 1) result.push(i)
		++i
	}
	return result
}

// get valid key by choosing random number from list that delN % list[index] !== 0
export const getPrivateKey = (list: number[], delN: number) => {
	let validPrivateKeyList: Array<number> = []

	for (let index = 0; index < list.length; index++) {
		const element = list[index]
		if (element > 1 && delN % list[index] !== 0) validPrivateKeyList.push(list[index])
	}
	// get a valid list contain the value smaller than 100
	const newList = validPrivateKeyList.filter((i) => i < 100)
	let privateKey = newList[Math.floor(Math.random() * newList.length)]
	return privateKey
}

// get 2 random numbers (positive prime number) from list
export const randomizeTwoPrime = (n: number) => {
	const list = generatePrimeList(n)
	let item1 = list[Math.floor(Math.random() * list.length)]

	const newList = list.filter((item) => item !== item1)
	let item2 = newList[Math.floor(Math.random() * newList.length)]
	const numberList = { p: item1, q: item2 }
	return numberList
}

export const moduloInverseEuclidean = (a: number, m: number) => {
	// let y0: number = 0,
	// 	y1: number = 1
	// do {
	// 	let r = m % a
	// 	if (r == 0) break
	// 	let q = Math.floor(m % a)
	// 	let y = y0 - y1 * q
	// 	y0 = y1
	// 	y1 = y
	// 	m = a
	// 	a = r
	// 	if (a > 1) {
	// 		return
	// 	} else return y
	// } while (a > 0)
	for (let i = 1; i < m; i++) {
		let x = ((i * a) % m) - 1
		if (x == 0) return i
	}
}

export const getBalanceNumber = (a: number, b: number, mod: number) => {
	let res = 1
	for (let i = b; i; i >>= 1) {
		if (i & 1) res = (res * a) % mod
		a = (a * a) % mod
	}
	return res
}
