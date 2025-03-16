// Conversions

let string = "12312282"
let num = Number(string)
// console.log(typeof num)

let string1 = "12312282abc"
let num1 = Number(string1)
// console.log(typeof num1)
// console.log(num1)

let string2 = null
let num2 = Number(string2)
// console.log(typeof num2)
// console.log(num2)

let string3 = undefined
let num3 = Number(string3)
// console.log(typeof num3)
// console.log(num3)

let isLoggedIn = null
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// Operations

console.log("2" + 1 + 2)
console.log(2 + 1 + "2")
console.log(+true) // 1
console.log(+"") // 0

// Prefix and Post-fix operator

let a = 10
console.log(++a)
console.log(a++)