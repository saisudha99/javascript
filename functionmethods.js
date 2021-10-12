//there are 3 ways to determine function

//1)function declaration

function add(x,y){
    return x+y
}
let g=add(15,15)
console.log(g)

//2)function expression

let sub=function(x,y){
    return x-y
}

let ga=sub(150,100)
console.log(ga)


//3)arrow function

let divi=(x,y)=> x/y
let gc =divi(20/10)

console.log(gc)
