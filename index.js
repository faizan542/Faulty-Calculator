let random = Math.random();
console.log(random);

let numOne = prompt("Enter first number");
let operation = prompt("Enter operation");
let numTwo = prompt("Enter second number");


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
};



if (random > 0.1) {
    alert(`The result is ${eval(`${numOne} ${operation} ${numTwo}`)}`);
    console.log(`The result is ${numOne} ${operation} ${numTwo}`);
} else {
    operation = obj[operation];
    console.log(`The result is ${numOne} ${operation} ${numTwo}`);
    alert(`The result is ${eval(`${numOne} ${operation} ${numTwo}`)}`);
}