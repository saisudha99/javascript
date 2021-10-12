let names =["sudha", "sathvik", "kaushik"]

// here 3 elements are there each element refers to index

// 0         1             2

//sudha  ,  sathvik  ,   kaushik

//array will have properties and values


console.log(names.length)

console.log(names[0])
console.log(names[1])
console.log(names[2])


//if multiple names are there apply loop to the array

let family=["siva" ,"sudha","sathvik","kaushik","reddy","amma"]

//loops

//for(intiliazation; conditional check; increment or decrement){

    //statements

//}

//trying to print every element of array by using loop


for(let i=0; i<family.length ;i++){
    //i=0 ,1,2,------5
    console.log(family[i])
}
console.log('----reversed----')

for(let i=5 ; i >=0 ; i--){

    //i=5,4,-----0
    console.log(family[i])
}

//METHODS OF ARRAY

//properties---color,age,name etc
//methods--eat,sleep,walk etc

let fruits=["apple","banana","orange","kiwi"]
console.log(fruits[0])
console.log(fruits.length)

//1)push method --adding element to the last

//method-- action
//return-- new length

let a =fruits.push("grapes")

console.log(a)
console.log(fruits)

//pop method

//method--removing element from last
//return--string

let b =fruits.pop()
console.log(b)
console.log(fruits)

//unshift method

//method-- adding element to the first
//return --new length

let c=fruits.unshift("grapes")

console.log(c)
console.log(fruits)

//shift method

//method--removing element from first
//return --string

let d=fruits.shift()

console.log(d)
console.log(fruits)

let ab=["siva","amith","sudha"]

console.log(ab.reverse())






