// let firstName="chinamy"
// console.log(typeof firstName)

//string stores the value by index
//index starts with zero


// let city= "pune"
// 0 1 2 3
// p u n e

//print the value by index
// console.log(city[0])
// console.log(city[3])


// let fullname= "Chinamy Desphande"
// string object - full name
//property   -length
//to uppercase() to lowercase()


//console.log(fullname.length)
//console.log(fullnametoUppercase())

//method --to Uppercase()

//action --it converts every character into uppercase

//Returns -- string

//let h= fullname.toUppercase()
//console.log(typeof h)

//let lower=fullname.toLowercase()
//console.log(lower)
//console.log(typeof lower)

//let b= fullname.toUppercase().toLowercase().length //chain function

let firstname="rajesh"
console.log(firstname.length)
console.log(firstname[0])
console.log(firstname[1])


//loops
//for(intialization ; condition check; increment or decrement){
    //statements
//}

let firstName= "rajesh"
console.log(firstName[0])
console.log(firstName[1])

for(let i=0 ; i< firstName.length ;i++){
    //i= 1 // i= 2
    //console.log(i) // 0,1,2....6
    console.log(firstName[i])
}


for(let i=5 ; i >= 0 ; i--){
    //i= 5 //i= 4 // 6,5,----0
    console.log(firstName[i])
}


//string will have --properties and methods 
 
//properties --name, age, color

//methods -- walk() talk()

//if for vehicle

//properties -- name, color, registration number, type
//methods --start() stop()


let secondname= "sudha"
console.log(secondname.length)
console.log(secondname[0])
console.log(secondname[secondname.length-1])

let v= "sudha"
for(v=0 ; v< secondname.length ; v++){

    // v=0 ,v=1  // 2 , 3, ---5

    console.log(secondname[v])

}


for(v= 5 ; v>=0 ; v--){

    // v=5 ,v=4 // 5,4,----0

    console.log (secondname[v])

}

let firstson= "sathvik"
console.log(firstson[0])

console.log(firstson.length)

let n="sathvik"

for(n= 0 ; n< firstson.length ; n++){

    //n =0, 1-----7

    console.log(firstson[n])

}

for(n =7 ; n>=0 ; n--){

    //n=7,6,5----1

    console.log(firstson[n])
}


let secondson = "kaushik"

console.log(secondson[3])

let c ="kaushik"

console.log(c.length)


for(c=0 ; c<secondson.length; c++){

    // c=0,1,2----7

    console.log(secondson[c])
}

for(c=7 ; c>=0 ; c--){

    //c= 7,6---0

    console.log(secondson[c])
}