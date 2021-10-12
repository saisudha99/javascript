
let x = 10
let y = 20

console.log(x + y)

// Two keywords to define a variable 
// let and const

let numOne = 10

console.log(numOne)

numOne = 30

console.log(numOne)

// const

// const u=10
// u =34
// console.log(u)


// Function

// Arthametic+-/%

// (modulus) 30/7---R(2)--Q4

console.log("____________")

// let x =30
// let y =7

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)

console.log(".........")

let u = 10
let i = 20

console.log(u + i)
console.log(u - i)
console.log(u * i)
console.log(u / i)
console.log(u % i)

// Function declaration

console.log("*******")

function calculator(x, y) {
    // x = 10
    // x = 100
    // y = 20
    // y = 50

    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}



calculator(10, 20)
console.log("------------")
calculator(100, 50)



// keyword //functionName
//function cal(parameter1,parameter2)
//block
//console.log(x+y)
//console.log(x-y)
//console.log(x*y)
//console.log(x/y)
//console.log(x%y)
//}

//cal(10,23) // calling the function //arguments or actual 

console.log("---ADDITION----")

function addition(x, y) {
    console.log(x + y)
}
addition(10, 20)
console.log(x, y)

addition(300, 250)
console.log(x, y)

console.log("----SUBSTRACTION----")

function substraction(x, y) {//parameter
    console.log(x - y)
}
substraction(15, 5) // arguments

console.log("----division----")

function division(x, y) {//parameter
    console.log(x / y)
}
division(15, 5) // arguments

//   basic types of function

//1) without parameter and without return type

//function add(){
//console.log(7+8)
//}
//add()
//add()
//add()

//2) function with parameter and without return type

//function add (x,y){
//console.log(x+y)//25
//}

//add(12,13)
//add(100,50)


//100----100

//3)function with parameter and with return type
function add(x, y) {
    console.log(x + y)
    return x + y
}
let sum = add(12, 12)
console.log(sum)
console.log(sum + 24)
console.log(sum * 0.10)
console.log(sum - 3)