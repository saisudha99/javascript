let buttonOne = document.querySelector('button')
let inputE = document.querySelector('#newText')
let para = document.querySelector('p')
let ulList = document.querySelector('ul')
let body =document.querySelector('body')
console.log(para)

// buttonOne.addEventListener('click',function(){
//     para.style.color = inputE.value

// })

body.addEventListener('click',function(event){
   // para.style.color = inputE.value
   console.log(event.target)

})