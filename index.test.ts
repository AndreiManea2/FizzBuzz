import { fizzbuzz, RulesEnabled } from './index';

const defaultRules: RulesEnabled = {3:true, 5:true, 7:true, 11:true, 13:true, 17:true};

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(fizzbuzz(3, defaultRules)).toBe('Fizz');
});

test('fizzbuzz returns "Buzz" for 5', () => {
    expect(fizzbuzz(5, defaultRules)).toBe('Buzz');
});

test('fizzbuzz returns "FizzBuzz" for 15', () => {
    expect(fizzbuzz(15, defaultRules)).toBe('FizzBuzz');
});

test('fizzbuzz returns "Bang" for 7', () => {
    expect(fizzbuzz(7, defaultRules)).toBe('Bang');
});

test('fizzbuzz returns "FizzBang" for 21', () => {
    expect(fizzbuzz(21, defaultRules)).toBe('FizzBang');
});

test('fizzbuzz returns "BuzzBang" for 35', () => {
    expect(fizzbuzz(35, defaultRules)).toBe('BuzzBang');
});

test('fizzbuzz returns "Bong" for 33', () => {
    expect(fizzbuzz(33, defaultRules)).toBe('Bong');
});

test('fizzbuzz returns "FezzBuzz" for 65', () => {
    expect(fizzbuzz(65, defaultRules)).toBe('FezzBuzz');
});

test('fizzbuzz returns "FizzFezzBuzz" for 195', () => {
    expect(fizzbuzz(195, defaultRules)).toBe('FizzFezzBuzz');
});

test('fizzbuzz returns "FezzBong" for 143', () => {
    expect(fizzbuzz(143, defaultRules)).toBe('FezzBong');
});

test('fizzbuzz returns "BuzzFizz" for 255', () => {
    expect(fizzbuzz(255, defaultRules)).toBe('BuzzFizz');
});