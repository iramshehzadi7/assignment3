"use strict";
//variable assignment
//create a variable named name and assaign it a string value.
let name1 = (`iram`);
console.log('name1');
//second method
let name4 = `poma`;
//add function
function addNumbers(a, b) {
    return a + b;
}
//check even or odd
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "even:" : ;
    Odd;
    ";;
}
//concatination string
function concatinateStrings(str1, str2) {
    return str1 + str2;
}
//5.calculate rectangle area
function calculateRectangleArea(width, hight) {
    return width * highlindrome;
}
//6.check paindrome:
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
//7.object for book
const book = {
    title: "The catcher in the ray",
    auther: "J.D.salinger",
};
//8.object for book function:
const book = {
    title: "The catcher in the ray",
    auther: "J.D.salinger",
    displyDetails: function () {
        console.log(`Title:${this.title}`), Auther;
    },
};
//20.caiiback function:
function withCallback(value, callback, ) {
    const result = value * 2;
    callback(result);
}
//21.promise with delay:
function delayedPromise() {
    return new Promise((resolve) => {
        resolve("Delayed Promise resolved");
    }, 1000);
}
;
//22.chained promise:
functional;
sequentialPromises();
Promise < String > {
    return: delayedPromise().then((message1) => {
        console.log(message1);
        return delayedPromise();
    })
        .then((message2) => {
        console.log(message1);
        return delayedPromise();
    })
        .then((message2)),
    return: " All Promise resolved"
};
//23.promise .all:
const Promise1 = delayed, Promise;
();
const promise2 = Promise.all[Promise1, promise2].then((messages) => {
    console.log(messages);
});
//24.Default Parameter:
function greet(name = "Guest") {
    return `Hello,{name}!`;
}
//25.sort objects by property
const objects = [
    { name: "Alice", age: 30 },
    { name: 'Blob', age: 25 },
    { name: 'charlie', age: 87 },
];
const sortedObjects = objects.sort((a, b) => ), a, age;
-b.age;
;
//26.Rest parameters:
function sumNumbers(...number, []) {
    return numbers;
    reduce((sum, num) = sum + num, 0);
}
//27.Nested loop pattern:
for (let i = 1, i; ; i++) {
    let pattern = "*";
}
console.log(pattern);
//28.second largest number:
function secondLargest(numbers) {
    const uniqueNumbers = Array.from(new set(numbers));
    uniqueNumbers.sort((a, b) => b - a);
    return uniqueNumbers[1];
}
//29.leep year checker:
function isLeapYear(year) {
    return (year % 100 !== 0) || year % 400 === 0;
}
//30.simple quiz program:
class Question {
}
