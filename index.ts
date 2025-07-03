import * as readline from 'readline'

function isMultipleOf(dividend: number, divisor: number): boolean {
    return dividend % divisor === 0;
}

// This is our main function
function fizzbuzz(number: number): void {
    // Variable to store the output for printing
    let words: string[] = [];

    if (isMultipleOf(number, 3)) {
        words.push("Fizz");
    }

    if (isMultipleOf(number, 5)) {
        words.push("Buzz");
    }

    if (isMultipleOf(number, 7)) {
        words.push("Bang");
    }

    if (isMultipleOf(number, 13)) {
        // Find index of first word starting with 'B'
        const indexB = words.findIndex(word => word.startsWith('B'));
        if (indexB === -1) {
            // No word starting with B
            words.push("Fezz");
        } else {
            // Insert Fezz before first word starting with B
            words.splice(indexB, 0, "Fezz");
        }
    }

    if (isMultipleOf(number, 11)) {
        words = words.filter(word => word === "Fezz");
        words.push("Bong");
    }

    if (isMultipleOf(number, 17)) {
        words.reverse();
    }

    // If no words matched, print the number
    if (words.length === 0) {
        console.log(number);
    } else {
        console.log(words.join(''));
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter the number you want to check with FizzBuzz! ', (answer) => {
    const number = parseInt(answer, 10);
    if (isNaN(number) || number <= 0) {
        console.log("Please enter a valid positive number.");
    } else {
        fizzbuzz(number);
    }
    rl.close();
})
