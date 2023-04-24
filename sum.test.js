// Example test from Jest docs

const sum = require('./sum');

test.skip('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

// Fizzbuzz-test

const fizzBuzz = require('./sum');

describe("FizzBuzz", () => {
    test.skip('[3] should result in "fizz"', () => {
        expect(fizzBuzz([3])).toBe('fizz');
    });

    test.skip('[5] should result in "buzz"', () => {
        expect(fizzBuzz([5])).toBe('buzz');
    });

    test.skip('[15] should result in "fizzbuzz"', () => {
        expect(fizzBuzz([15])).toBe('fizzbuzz');
    });

    test.skip('[1,2,3] should result in "1, 2, fizz"', () => {
        expect(fizzBuzz([3])).toBe('fizz');
    });
})

// Array test

const arrayOfCities = require('./sum');

describe("Array of cities should contain", () => {
    test.skip('[1] should be Oslo', () => {
        expect(arrayOfCities[1]).toBe('Oslo');
    });

    test('ArrayOfCities[0] should NOT be Malmö', () => {
            expect(arrayOfCities[0]).not.toBe('Malmö');
        });
    })