// new Set([1,1,2,2,3,4]) // {1,2,3,4}

// [...new Set("referee")].join("") // 'ref'

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// // {[1,2,3] : true, [1,2,3] : false}

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = (arr) => {
	const arrCopy = new Set(arr)
	return arr.length !== arrCopy.size
}

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
const vowelCount = (str) => {
	const vowelsArr = Array.from(str).filter((char) => {
		return 'aeiou'.indexOf(char) !== -1
	})
	const vowelsMap = new Map()
	for (char of vowelsArr) {
		if (vowelsMap.has(char)) {
			vowelsMap.set(char, vowelsMap.get(char) + 1)
		} else {
			vowelsMap.set(char, 1)
		}
	}
	return vowelsMap
}
