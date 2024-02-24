//create a function that takes a positive integer as parameter and
//uses a for loop to calculate and return the factoral of that number
function calcuiateFactorial(number:number):
number {
    let factorial=1;
    for(let i=1; i<=number;i++){
        factorial*=i;
    }
    return factorial;
}

console.log(calcuiateFactorial(1))
console.log(calcuiateFactorial(10))
console.log(calcuiateFactorial(15))