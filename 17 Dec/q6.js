"use strict";
//write a program having an array of numbers if the  number is negative 
// it should remove that number from the array
function removeNegtaiveNumbers(numbers) {
    return numbers.filter(number => number >= 0);
}
const numbers = [2, -3, 4, -5, -7, 8, -12, 12];
const filterednumbers = removeNegtaiveNumbers(numbers);
console.log(filterednumbers);
