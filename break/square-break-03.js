// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for (let i = 2; i <= 100; i++) { //1 is also a square number so skip the 1 and write i = 2 instead of 1 then execute the program. if you set i = 5 it will stops at 9.
    if (Math.sqrt(i) % 1 === 0) {
        console.log(i);
        break;
    }
}
