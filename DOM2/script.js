let person = {
    age: 23,
    fullName: "sudha"
}

// Adding new value 
person.lastName = "nallamilli"

// retriving value 
console.log(person.age)
// Updating 
person.age = 25

//<h1>Heading</h1> -- html element

let re = document.querySelector('h1')
console.log(re.tagName)
 console.log(re.textContent)
re.textContent = "sudha"

re.addEventListener('click', function () {
    re.textContent = "sudha".toUpperCase()
})

// -------------------------------



let list = document.querySelectorAll('li')
let ulList = document.querySelector('ul')

 //[li,li,li,li,li,li]
 for (let i = 0; i < list.length; i++) {
    list[i].textContent = list[i].textContent.toUpperCase()
 }

ulList.addEventListener('mouseover', function () {
    for (let i = 0; i < list.length; i++) {
        list[i].textContent = list[i].textContent.toUpperCase()
    }
})

ulList.addEventListener('mouseout', function () {
    for (let i = 0; i < list.length; i++) {
        list[i].textContent = list[i].textContent.toLowerCase()
    }
})


// Make all even list element green  and odd red




