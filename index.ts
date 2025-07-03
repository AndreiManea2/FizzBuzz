import * as readline from 'readline'

function isMultipleOf(dividend: number, divisor: number): boolean {
    return dividend % divisor === 0;
}

interface RulesEnabled {
    3: boolean;
    5: boolean;
    7: boolean;
    11: boolean;
    13: boolean;
    17: boolean;
}

// This is our main function
function fizzbuzz(number: number, rules: RulesEnabled): void {
    // Variable to store the output for printing
    let words: string[] = [];

    if (rules[3] && isMultipleOf(number, 3)) {
        words.push("Fizz");
    }

    if (rules[5] && isMultipleOf(number, 5)) {
        words.push("Buzz");
    }

    if (rules[7] && isMultipleOf(number, 7)) {
        words.push("Bang");
    }

    if (rules[13] && isMultipleOf(number, 13)) {
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

    if (rules[11] && isMultipleOf(number, 11)) {
        words = words.filter(word => word === "Fezz");
        words.push("Bong");
    }

    if (rules[17] && isMultipleOf(number, 17)) {
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

const defaultRules: RulesEnabled = {3:true, 5:true, 7:true, 11:true, 13:true, 17:true};

function parseRules(input: string): RulesEnabled {
    const enabledRules: RulesEnabled = {3:false, 5:false, 7:false, 11:false, 13:false, 17:false};
    const parts = input.split(",").map(s => s.trim());

    for (const part of parts) {
        const number = parseInt(part, 10);
        if ([3,5,7,11,13,17].includes(number)) {
            enabledRules[number] = true;
        }
    }

    return enabledRules;
}

rl.question('Enter the number you want to check with FizzBuzz! ', (numAnswer) => {
    const number = parseInt(numAnswer, 10);
    if (isNaN(number) || number <= 0) {
        console.log("Please enter a valid positive number.");
        rl.close();
        return;
    }

    rl.question('Enter the rules to use as comma-separated list! ', (rulesAnswer) => {
        let rules: RulesEnabled;
        if (rulesAnswer.trim() === "") {
            rules = defaultRules;
        } else {
            rules = parseRules(rulesAnswer);
        }

        fizzbuzz(number, rules);
        rl.close();
    });
})
