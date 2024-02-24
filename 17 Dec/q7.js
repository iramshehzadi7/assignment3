"use strict";
//create a function that takes an array of numbers as parameters.use a for loop
//to calculate and return the sum of all the numbers in array
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
