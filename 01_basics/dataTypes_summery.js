// Primitive 

// 7 types : String, Number, null, undefined, Symbol, BigInt

const score = 100 //numbers
const scoreValue = 100.5
const name = "jeet"// string
const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123') //Symbol
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 809797897897987n  //BigInt


// Reference (Non-Primitive)

// Array, Object, Functions

const heros = ["shaktiman","spderman","doga"]  //arrays

let myObj = {
    name: "jeet",
    age: 23,
}               // object

const myFunction = function(){
    console.log("hello world");
}  //function
