//searching the element

let buttonOne=document.querySelector(".newbutton")
let inputtext=document.querySelector("#additem")
let ullist=document.querySelector("#ullist")

console.log(buttonOne)

buttonOne.addEventListener('click',function(){
    let elementToAdd = inputtext.value
    let liElement = document.createElement('li') // <li></li>
    liElement.textContent = elementToAdd // <li>siva</li>
    createButton(liElement)
    ullist.appendChild(liElement)
})

function createButton(li){

    let upButton = document.createElement('button') // <button></button>
    upButton.textContent = 'up' // <button>up</button>
    upButton.className = "up"  //<button class="up">up</button>
    li.appendChild(upButton)

    let downButton = document.createElement('button') // <button></button>
    downButton.textContent = 'down' // <button>down</button>
    downButton.className = "down"  //<button class="down">down</button>
    li.appendChild(downButton)


    let removeButton = document.createElement('button') // <button></button>
    removeButton.textContent = 'remove' // <button>remove</button>
    removeButton.className = "remove"  //<button class="remove">remove</button>
            li.appendChild(removeButton)

            }

            ullist.addEventListener('click',function(event){

                if(event.target.tagName === "BUTTON"){
                    if(event.target.className === "remove"){
                        let liElement = event.target.parentNode;
                        let ulList = liElement.parentNode;
                        ulList.removeChild(liElement)
            
                    }
            
                }
            
                if(event.target.tagName === "BUTTON"){
                    if(event.target.className === "up"){
            
                        let liElement = event.target.parentNode;
                        let ulList = liElement.parentNode;
                        let prevElement = liElement.previousElementSibling
                        ulList.insertBefore(liElement,prevElement)
            
                    }
            
                }
            
                if(event.target.tagName === "BUTTON"){
                    if(event.target.className === "down"){
            
                        let liElement = event.target.parentNode;
                        let ulList = liElement.parentNode;
                        let nextElem = liElement.nextElementSibling
                        ulList.insertBefore(nextElem,liElement)
            
                    }
            
                }
            
            
            
            
            
            
            
            })
            
            ullist.addEventListener('click',function(event){

                if(event.target.tagName === "BUTTON"){
                    if(event.target.className === "remove"){
                        let liElement = event.target.parentNode;
                        let ulList = liElement.parentNode;
                        ulList.removeChild(liElement)
            
                    }
            
                }
            
                if(event.target.tagName === "BUTTON"){
                    if(event.target.className === "up"){
            
                        let liElement = event.target.parentNode;
                        let ulList = liElement.parentNode;
                        let prevElement = liElement.previousElementSibling
                        ulList.insertBefore(liElement,prevElement)
            
                    }
            
                }
            
                if(event.target.tagName === "BUTTON"){
                    if(event.target.className === "down"){
            
                        let liElement = event.target.parentNode;
                        let ulList = liElement.parentNode;
                        let nextElem = liElement.nextElementSibling
                        ulList.insertBefore(nextElem,liElement)
            
                    }
            
                    
                }
            
            
            
            
            
            
            
            })
            
                        