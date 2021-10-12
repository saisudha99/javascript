let family={

    namey:"sudha",
    age:28,
    place:"raj",

    //display: function(){
        // console.log(this.namey)

        display: function(greet){
            console.log(greet+""+this.namey)
        // }

    }
}

let dad={

    namey:"chvr",
    age:52,
    place:"apt"


}

let bro={

    namey:"srikanth reddy",
    age:32,
    place:"u.s"
}

//dot notation

console.log(family.namey)
console.log(dad.namey)
console.log(bro.namey)

//bracket notation

console.log(family['place'])
console.log(dad["place"])
console.log(bro["place"])


//update the value of the property

console.log(family)
family.namey="sai sudha"
console.log(family)


//adding the property to the object
 
dad.state="andhra"
console.log(dad)


//delete the particular property 

delete dad.state
console.log(dad)



//"THIS" is the user method we can use to apply this we can use bind,call,apply

//bind,call,apply

//using bind method

let a=family.display.bind(dad)
a()

let b=family.display.bind(family)
b()

let c=family.display.bind(bro)
c()


//using call method

//let display=function(){
    //console.log(this.namey)
//}

let d=family.display
d.call(family,"good morning")
d.call(family,"welcome")
d.call(dad,"good morning")
d.call(bro,"welcome")


//using apply method

let r=family.display
r.call(family,["good morning"])
r.call(family,["welcome"])
r.call(dad,["good morning"])
r.call(bro,["welcome"])
