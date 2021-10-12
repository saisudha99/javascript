let family={
    fullname:"sai sudha",
    age:28,
    rollno:15
}

let b={
    fullname:"sathvik",
    age:2, 
    rollno:1
}

let c={
    fullname:"kaushik",
    age:1,
    rollno:2
}

//dot notation
console.log(family.fullname)

//bracket notation

console.log(family["fullname"])

 class person {   
fullname=null
age=null
color=null
language=null
city=null
  }


//changing the property outside the class


 let siva =new person()

 siva.fullname="siva shankar reddy"
 siva.age=34
 siva.color="fair"
 siva.language="telugu"
 siva.city="vizag"

 console.log(siva)

 let srikanth=new person()

 srikanth.fullname="srikanth reddy"
 srikanth.age=32
 srikanth.color="white"
 srikanth.language="telugu"
 srikanth.city="kakinada"

 console.log(srikanth)

 
 //setting the object properties at the time of object creation

 class friend{
     constructor(fn,ageno,col,lan,cit){
         this.fullname=fn
         this.age=ageno
         this.color=col
         this.language=lan
         this.city=cit
     }
 }


 let aparna = new friend("aparna",28,"white","telugu","kakinada")

 console.log(aparna)

 let mounika =new friend("mounika",28,"white","telugu","kakinada")

 console.log(mounika)

 mounika.fullname="mouni"

 
 console.log(mounika)