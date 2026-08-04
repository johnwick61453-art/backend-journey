//Day 4 - Functions
//1. Simple Function ( no parameters)
function sayHello() {
    console.log("Hello from a function!");
}

// 2. Function with one parameter
function greet(name){
    console.log( "Hello, " + name + " !");
}

//3. Function with two parameters that returns a value
function add(a, b) {
    return a + b;
}

// Calling the functions
sayHello();
greet("john");
greet("Backend developer");

const result = add(10, 5);
console.log("10 + 5 =", result);
const anotherResult = add( 20 , 7);
console.log("20 + 7 =", anotherResult);


// Practice Section

function multiply(x,y){
    return x * y;
}

function isAdult(age){
    if(age >=18){
        return true;
    } else {
        return false;
    }
}

console.log("4* 6 =", multiply(4,6));
console.log(" Is 16 an adult?", isAdult(16));
console.log("Is 21 and adult?", isAdult(21));

