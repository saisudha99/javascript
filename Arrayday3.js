console.log('----mapmethod----')

//map

let birthyear=[2000,2004,2006]

//let a=birthyear.map(function(element, index, array){
    //return 2021 -el //17
    //console.log(el,index,array)
//})

//console.log(a)

let b =birthyear.map(function(el,index,arr){
    return 2021-el
})

console.log(b)




//action--works on every element of array
//return --another type of array



let ages=[13,14,15]

let lessthan15=[]

for(let i=0; i<ages.length ;i++){
    if(ages[i]<15){
        lessthan15.push(ages[i])
}
}

console.log(lessthan15)


let j= ages.filter(function(el,index,arr){
    return el<15
})
console.log(j)



let marks=[30,50,60]
let graterthan50=[]

for(i=0; i>marks.length ;i++){
    if(marks[i]>50){
graterthan50.push(marks[i])
}
}

console.log(graterthan50)

let g=[10,20,30]
let sum =0
for(let i=0 ;i<g.length ;i++){
    sum=sum+g[i]

}

console.log(sum)

let h=[50,50,50]
let sub=2

for(let i=0 ;i<h.length ; i++){
    sub=sub-h[i]
}

console.log(sub)

let z=[50,100,150]
let mult=5

for(let i=0; i<z.length;i++){
    mult=mult*z[i]
}
console.log(mult)

let p=[50,50,50]
let divi=2

for(let i=0 ;i<p.length ;i++){
    divi=divi/p[i]

}

console.log(divi)

let amount=[100,200,300,400]

let r=amount.map(function(el,index,arr){
    return el+el*0.20
})

console.log(r)


let ra=amount.filter(function(el,index,arr){
    return el>100
})

console.log(ra)


//reduce method

let numbers=[10,20,30,40,50]
let rab=numbers.reduce(function(acc,el,index,arr){
    return acc + el
},0)

console.log(rab)

//for each

let cousins=["aruna","lalitha","saroja","prabha"]

cousins.forEach(function(el,index,acc){
    console.log('hello $ {el}!')
})



// push,pop,shift,unshift,map,filter,sort,flat,reduce,foreach,index,reverse,join


//filter --returns array
//map --array
//reduce--single
//foreach--doesnot return anything


//find method

let cousinsa= [
    { firstname: "aruna",
       age: 35

},

{ firstname:"lalitha",
  age:36

},
  {firstname:"saroja",
   age:38

}
]

//find methods gives me first occurance

let fa=cousinsa.find(function(el,index,arr)
{
    return el.firstname=="saroja"
})

console.log(fa)



let fb =cousinsa.find(function(el,index,arr){
    return el.firstname=="aruna"
})

console.log(fb)


let fc =cousinsa.find(function(el,index,arr){
    return el.firstname=="lalitha"
})

console.log(fc)



//every and some methods

let numbersa =[10,20,30,40,50,60,70,80,90,100]

let ha=numbersa.every(function(el,index,arr){
    return el>50
})

console.log(ha)


let hb=numbersa.some(function(el,index,arr){

    return el>50
})

console.log(hb)


//fill method

let ga=[10,20,30,40,50,60,70,80,]

ga.fill("100",3,ga.length)

console.log(ga)

//include method

let gb=["car","bike","bicycle"]

console.log(gb.includes("lorry"))

//slice method

let gc =gb.slice(1,3)
console.log(gc)

//splice method (startposition,delete num)

let gd=gb.splice(1,2,"lorry","bus")
console.log(gb)


//concat method

let za=[11,22,33]
let pa=[111,222,333]

let q=za.concat(pa)
console.log(q)

let qa=pa.concat(za)
console.log(qa)


//push,pop,shift,unshift,indexof,reverse,join
//sort,flat,map,reduce,filter,foreach,find,findindex
//some,every,splice,slice,concat,fill,include





