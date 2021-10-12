// document. queryselector()

let ol= document.querySelector('ol')
let list= document.querySelectorAll('li')
let button= document.querySelector('#addButton')
let input= document.querySelector('input')


button.addEventListener('click',function(){

    let newE = document.createElement('li')
    newE.textContent=input.value
    CreateButton(newE)
    ol.appendChild(newE)

})

function CreateButton(li){

    let removeButton= document.createElement('button')
    removeButton.textContent='remove'
    removeButton.classList="remove"
    li.appendChild(removeButton)   


    let upButton= document.createElement('button')
    upButton.textContent='up'
    upButton.classList="up"
    li.appendChild(upButton)   


    let downButton= document.createElement('button')
    downButton.textContent='down'
    downButton.classList="down"
    li.appendChild(downButton)   

}


Array.from(list).forEach(function(el,index){
       if(index % 2 == 0){
             el.style.color = "brown"
         }
         else{
             el.style.color = "violet"
        }
    
     })