// Challenge 1
const range = (start, end, tab = 1) => {
	const arr = [];
	if(tab < 0) {
		for(let i = start; i >= end; i -= -tab) {
			arr.push(i);
		}
	} else {
		for(let i = start; i <= end; i += tab) {
			arr.push(i);
		}}
	return arr;
};

const sum = (nums) => {
	let result = 0;
	for(let i = 0; i < nums.length; i += 1) {
		result += nums[i];
	}

	return result;
};


console.log(sum(range(1, 10)));
console.log(range(10, 1, -2));

// Challenge 2
const reverseArray = (arr) => {
	let reversedArr = [];
	for(let i = 0; i < arr.length; i += 1) {
		reversedArr.unshift(arr[i]);
	}
	return reversedArr;
};

console.log(reverseArray(["A", "B", "C"]));


const reverseArrayInPlace = (arr) => {
	const tempArr = [...arr];
	for(let i = 0; i < arr.length; i += 1) {
		arr.splice(i, 1, tempArr[arr.length - (1 + i)]);
	}
};

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// Challenge 3
const arrayToList = (arr) => {
	let temp = {};
	let list = {};

	for(let i =  arr.length - 1; i >= 0; i -= 1) {
		list = {value: arr[i], rest: temp.rest || null};
		temp.rest = list;
	}

	return list;
}; 

console.log(arrayToList([10, 20, 30]));
// {value: 10, rest: {value: 20, rest: {value: 30, rest: null}} 


const listToArray = (list) => {
	const arr = [];

	while(list) {
		arr.push(list.value);
		list = list.rest;
	}

	return arr;
};

console.log(listToArray(arrayToList([10, 20, 30])));

const prepend = (value, list) => {
	return {value, rest: list};
};

console.log(prepend(10 ,prepend(20, null)));

const nth = (list, index) => {
	let value;
	for(let i = 0; i <= index; i += 1) {
		if(!list) {
			value = undefined;
			break;
		}
		value = list.value;
		list = list.rest;
	}

	return value;
};

console.log(nth(arrayToList([10, 20, 30]), 1));

// challenge 4
const deepEqual = (obj1, obj2) => {
	let result = true;
	const obj1Keys = Object.keys(obj1);
	const obj2Keys = Object.keys(obj2);

	if(obj1Keys.length !== obj2Keys.length) {
		result = false;
	}

	for(let i = 0; i < obj1Keys.length; i += 1) {
		if(obj1Keys[i] !== obj2Keys[i]) {
			result = false;
			break;
		}

		if(typeof obj1[obj1Keys[i]] === typeof obj2[obj2Keys[i]] && typeof obj2[obj2Keys[i]] === "object" && obj2[obj2Keys[i]] != null) {
			deepEqual(obj1[obj1Keys[i]], obj2[obj2Keys[i]]);
		} else if (obj1[obj1Keys[i]] !== obj2[obj2Keys[i]]) {
			result = false;
			break;
		}
	}

	return result;
};

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// true →
console.log(deepEqual(obj, {here: 1, object: 2}));
// false →
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// true →