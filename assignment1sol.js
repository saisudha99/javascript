// reverse the string 

let namee = "chinmay"
let reverString = " "  // maynihc
for (let i = 0; i < namee.length; i++) {

    reverString = namee[i] + reverString

}
console.log(reverString)

//let reverWord = "I am learning javascript"
// "I  ma  gninrael toircsavaj"
//let neArry = reverWord.split(" ")

function reverWord(word) {
    let reverString = " "  // maynihc
    for (let i = 0; i < word.length; i++) {
        reverString = word[i] + reverString
    }
    return reverString
}

let hhh = reverWord("poorva")
console.log(hhh)
let reverWord2 = "I am learning javascript"
let newArry = reverWord2.split(" ")
let revArr = []
for(let i = 0 ; i < newArry.length ; i++){
    let revS = reverWord(newArry[i])
    revArr.push(revS)
}

console.log(revArr.join(" "))

let h = [34,55,0,-20,700,556]

let max = h[0]
let min = h[0]

for(let i = 0 ; i < h.length ; i++){
    if(h[i] > max){
        max = h[i]
    }
    else if(h[i] < min){
        min = h[i]
    }
}
console.log(max)
console.log(min)


let ha = [[23],[33,44,55],[66,77,88]]
ha= ha.flat()
console.log(ha)

let maxi = ha[0]

for(let i = 0 ; i < ha.length ; i++){
    if(ha[i] > maxi){
        maxi = ha[i]
    }

}
console.log(maxi)

// a e i o u 

let m = "chinmay"
let count = 0 

for(let i = 0 ; i < m.length ; i++){

    if(m[i] == 'a' || m[i] == 'e' || m[i] == 'i' || m[i] == 'o' ||m[i] == 'u'){

        count = count + 1
    }

}
console.log(count)

