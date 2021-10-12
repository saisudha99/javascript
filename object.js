let person = {

    firstname :"sudha",
    lastname :"nallamilli",
    age:28,
    rollno:15

}

// object doesnot stores the value by index
//there are 2 types 
//1) dot notation
//2)bracket notation

//in above example person--object
//               property--firstname


//dot notation

console.log(person.firstname)
console.log(person.lastname)
console.log(person.age)
console.log(person.rollno)

//bracket notation
console.log(person['firstname'])
console.log(person['lastname'])
console.log(person['age'])
console.log(person['rollno'])

//update the value of property

console.log(person)
person.firstname = 'siva'
person['age']= 32

console.log(person)

//adding property to the object

person.state ="andhra"
person['city']='vizag'

console.log(person)

//delete the particular property

delete person.rollno
console.log(person)