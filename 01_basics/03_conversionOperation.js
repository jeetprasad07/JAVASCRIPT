let score = 33

//const {score} = req.body

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
"33" => 33
"33abx"=> NaN
true => 1;false => 0
null=> 0; undefined => 0 */

let isloggedIn = "jeet"

let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "jeet" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ***************** OPERATION *******************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = "jeet"

let str3 = str1 + str2
console.log(str3);// hello jeet

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
/* if the string vaariable apears first the rest all other variables will be treated as a string , 
and before the string variable any other variable apears it will treated as it is in the operation . */

console.log((3 + 4) * 5 % 3);

console.log(true);

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // try to avoid this

let gameCounter = 100
++gameCounter;
console.log(gameCounter);













