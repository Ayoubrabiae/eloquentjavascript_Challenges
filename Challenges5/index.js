// Challenge 1
class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
  
	plus(vec) {
		this.x += vec.x;
		this.y += vec.y;
		return { x: this.x, y: this.y };
	}
  
	minus(vec) {
		this.x -= vec.x;
		this.y -= vec.y;
		return { x: this.x, y: this.y };
	}
  
	get length() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
}
  
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// Vec{x: 3, y: 5} →
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// Vec{x: -1, y: -1} →
console.log(new Vec(3, 4).length);
// 5

// Challenge 2
class Group {
	constructor(entries) {
		this.entries = [];
		entries.forEach(item => this.add(item));
	}
	static from(arr) {	
		return new Group(arr);
	}
	has(value) {
		return this.entries.some(item => item === value);
	}
	add(value) {
		if(!this.has(value)) {
			this.entries.push(value);
		}
	}
	delete(value) {
		const index = this.entries.indexOf(value);
		if(index !== -1) {
			this.entries.splice(index, 1);
		}
	}
}
let group = Group.from([10, 20]);

console.log(group);

console.log(group.has(10));
// true →
console.log(group.has(30));
// false →
group.add(10);
group.delete(10);
	
// challenge 3   
class GroupIterator {
	constructor(group) {
		this.index = 0;
		this.group = group.entries;
	}

	next() {
		if(this.index === this.group.length) return {done: true};

		let value = this.group[this.index];
		this.index++;

		return {value, done: false};
	}

}

Group.prototype[Symbol.iterator] = function() {
	return new GroupIterator(this);
};

let ne = new GroupIterator(Group.from([20, 94, 59]));

console.log(ne);

for (let value of Group.from(["a", "b", "c"])) {
	console.log(value);
}

// Challenge 4
let map = {one: true, two: true,  hasOwnProperty: true };

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// true 
