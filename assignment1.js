// 1) write a program to reverse the string

//input--chinmaye
//output--eyamnihc

let firstname="chinmaye"

for(a=7 ;a>=0 ;a--){

    //a=7,6,5----0

    console.log(firstname[a])


}

//2) write a program to reverse only word from sentence

//input--"my new learning is javascript"
//output--"ym ewn gninrael si tpircsavaj"




//3)Write a program to find the highest and lowest number from a given array.

//Input :-[34,55,-500,66,77,88,234,5,0,66,88]

//Output:-
// Min :- -500
// Max:- 234

// Highest Number

list = [34,55,-500,66,77,88,234,5,0,66,88]
let highest = 0

for(i=0;i<list.length;i++){
  if(list[i]>highest){
    highest = list[i]
  }
}

console.log(highest)



// Lowest Number

list2 = [34,55,66,0,-500,77,88,234,5,66,88]
lowest = list2[0]

for(i=0;i<list2.length;i++){
  if(list2[i]<lowest){
    lowest = list2[i]
  }
}

console.log(lowest)

// 4) Find the highest number from the given 2D array.

// Input:- [[1,2,3],[33,44,55],[55,77,343]]

// Output :- 343

a= [[1,2,3],[33,44,55],[55,77,343]]

highest =0

for(i=0; i<a.length; i++){
  for(j=0 ;j<a[i].length ;j++){
    if(a[i][j]>highest){
      highest=a[i][j];
    }
  }
}

console.log(highest)

// 5) Count the number of vowels from the string.

// Input : - “I am new to javascript”

// Count -
// Vowels are (a e i o u and u)

let sentence="i am new to javascript"

let count=0

for(i=0; i<sentence.length;i++){
  if(sentence[i]=='a'|| sentence[i]=='e' || sentence[i]=='i' ||sentence[i]=='o' || sentence[i]=='u') {
    count++
}}


// else if(sentence[i]=='e'){
// count++
// }

// else if(sentence[i]=='i'){
//   count++
// }

// else if(sentence[i]=='o'){
//   count++
// }

// else if(sentence[i]=='u'){
//   count++
// }
// }
console.log(count)
