//method --performs something and return something

//object also have properties and methods

let animals=["dog","elephant","fox","goat","horse"]

console.log(animals[2])

let a= animals.indexOf("fox")
console.log(typeof a)
console.log(a)

let b=animals.indexOf('dog')
console.log(typeof b)
console.log(b)

let vehicles=["car","bike","bus","lorry"]

let userinput ="crane"

if(vehicles.indexOf(userinput) >=0){

    console.log("vehicle is available")
}
else{
    console.log("vehicle not available")
}

for(let i=0 ;i<vehicles.length ;i++){
    if(vehicles[i]==userinput)
    console.log("vehicles is available")
}

console.log("vehicle not available")


//join

let c=["car","bike","bus","lorry"]

console.log(c.join('+'))
//console.log(typeof vehicles.join('-'))

//action
//string-- string

let d=["car","bike","bus","lorry"]
console.log(d.sort())



//multi-dimensional array

let e =[[55,66,77],[555,666,777]]


console.log(e[0][1])
console.log(e[1][2])

let f=e.flat()
console.log(f)

