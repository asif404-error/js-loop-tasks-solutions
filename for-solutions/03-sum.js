// Subtask-1: Display sum of all the odd numbers from 91 to 129.
/*
let sum = 0;

for (let i = 91; i <= 129; i += 2){
     sum += i;
}
console.log('Sum of all the odd numbers is:', sum);
*/

//Subtask-2: Display sum of all the even numbers from 51 to 85.
/*
let sum = 0;

for (let i = 52; i <= 85; i += 2){ //You must have to change the order from 52 to 52
    // console.log(i);
    sum += i;
}
console.log('Sum of all the even numbers is:', sum);
*/

//Another method without changing the order. Therefore, using simple condition. Do a simple research on google and you will get it. Before move on to solution do a search.


let sum = 0;
for (let i = 51; i <= 85; i++) {  //make an increment by 1, no need of 2
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log('Sum of all the even numbers is:', sum);