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