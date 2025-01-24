 // while loop
 let i = 1;

while (i <= 5) { 
    console.log(i);
    i++; 
}

// while loop
let a = 10; 
let b = 1;
let sum = 0;

while (b <= a) {
    if (b % 2 === 0) {
        sum += b; 
    }
    b++;
}

console.log(`The sum of even numbers from 1 to ${a} is ${sum}`);
