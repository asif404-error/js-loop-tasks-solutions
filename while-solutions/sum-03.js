/*
Subtask-1: Display sum of all the odd numbers from 81 to 131.

Subtask-2: Display sum of all the even numbers from 206 to 311.
*/

//Task-01:

let n1 = 81;
let sum1 = 0;
while(n1 <= 131){
    // console.log(n1);
    sum1 += n1;
    n1 += 2;
}
console.log('Sum of all the odd number is: ', sum1);


//Task-02:

let n2 = 206;
let sum2 = 0;

while (n2 < 311) {
    // console.log (n2);
    sum2 += n2;
    n2 += 2;
}
console.log('Sum of all the even number is: ', sum2);