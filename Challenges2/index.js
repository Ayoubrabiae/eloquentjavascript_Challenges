// Challenge 1
console.log("%cThis is the challenge One", "font-size: 20px; color: royalblue");
let hash = "#";

for(let i = 0; i < 7; i += 1) {
    console.log(hash);
    hash += "#"
}

// Challenge 2
console.log("%cThis is the challenge Two", "font-size: 20px; color: royalblue");

for (let i = 1; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Challenge 3
console.log("%cThis is the challenge Three", "font-size: 20px; color: royalblue");
const size = 8;
let hash2 = "";

for (let i = 0; i < size; i += 1) {
    for(let k = 0; k < size; k += 1) {
        hash2 += "# ";
    }
    i % 2 === 0 ? console.log(hash2) : console.log(` ${hash2}`)
    hash2 = "";
}