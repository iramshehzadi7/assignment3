//impliment a program that takes a list of temprature in celsius as input from ...
const temperaturesCelsius:number[]=[25,30,15,10,12];
const convertedTemperaturesFahrenheit:
number[]=[];
for(const celsius of temperaturesCelsius ){
    const fahrenheit =(celsius*9/5)+32;
    convertedTemperaturesFahrenheit.push(fahrenheit);
}
console.log("Converted temperatures in Fahrenheit:"+convertedTemperaturesFahrenheit)
