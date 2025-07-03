function isMultipleOf(dividend: number, divisor: number): boolean {
    return dividend % divisor === 0;
}

// This is our main function
function fizzbuzz(): void {
    for (let i = 1; i <= 200; i++) {
        // Variable to store the output for printing
        let words: string[] = [];

        if (isMultipleOf(i, 3)) {
            words.push("Fizz");
        }

        if (isMultipleOf(i, 5)) {
            words.push("Buzz");
        }

        if (isMultipleOf(i, 7)) {
            words.push("Bang");
        }

        if (isMultipleOf(i, 13)) {
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

        if (isMultipleOf(i, 11)) {
            words = words.filter(word => word === "Fezz");
            words.push("Bong");
        }

        if (isMultipleOf(i, 17)) {
            words.reverse();
        }

        // If no words matched, print the number
        if (words.length === 0) {
            console.log(i);
        } else {
            console.log(words.join(''));
        }
    }
}

// Now, we run the main function:
fizzbuzz();