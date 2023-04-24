// Jest docs test
function sum(a,b) {
    return a + b;
}

module.exports = sum;

// Fizzbuzz-test

function fizzBuzz(numbers) {
    let result = [];

    for (number of numbers) {
        if (number % 15 === 0) {
            result.push('fizzbuzz')
        } else if (number % 3 === 0) {
            result.push('fizz')
        } else if (number % 5 === 0) {
            result.push('buzz')
        } else {
            result.push(number)
        }
    }

    return result.join(', ')
}

module.exports = fizzBuzz;

// Array test

const arrayOfCities = ['New York', 'Oslo', 'Västerås', 'Malmö', 'Köpenhamn'];

module.exports = arrayOfCities;