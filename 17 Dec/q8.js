"use strict";
//impliment a program that takes a list of temprature in celsius as input from ...
const temperaturesCelsius = [25, 30, 15, 10, 12];
const convertedTemperaturesFahrenheit = [];
for (const celsius of temperaturesCelsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    convertedTemperaturesFahrenheit.push(fahrenheit);
}
console.log("Converted temperatures in Fahrenheit:" + convertedTemperaturesFahrenheit);
