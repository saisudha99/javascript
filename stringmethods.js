let firstname ="sudha"
console.log(typeof firstname)


//methods of string

// method--perform some action --converts every character into uppercase
//return-- return something --it returns string

let d = firstname.toUpperCase()
console.log(d)
console.log(typeof d)

//method--performs some action-- converts every character into lower case
//return --return something --it returns string

let e = firstname.toLowerCase()
console.log(e)
console.log(typeof e)

//replace 

//action -- replaces the first value with second value
//return -- it returns string 

let texttwo = "i am dentist"
let f = texttwo.replace ('dentist' ,'it employee')
console.log(f)

//indexof 

//method - find the index of the character pass
//returns a number


//if the character is available it will return me index
//if the character is not available it will return me -1


let textthree ="kaushik"

let h = textthree.indexOf('a')
let i = textthree.indexOf('u')

console.log(h)
console.log(i)

// character()

// kaushik

//method --find character for pass index
//return --it returns string

//let textfour ="kaushik"
//let j=textfour.character(6)

// slice

// 0 1 2 3 4 5 6
// k a u s h i k
//-6 -5 -4 -3 -2 -1

let textfive = "kaushik"
//textfive.slice(startpoint , endpoint)

let k= textfive.slice(1,5)
console.log(k)

let l= textfive.slice(0,5)
console.log(l)

let m=textfive.slice(-4,-6)
console.log(m)

//end point should be always after the start point

//end point not include

console.log(textfive.toUpperCase().length)








