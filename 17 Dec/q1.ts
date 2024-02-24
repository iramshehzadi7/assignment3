//create a function that takes an array,an index,and
//a value as parameters.Inside the function,use the splice
//method to insert the value of the specified index in the array.
//Return the modified array.
function insertValueAtIndex(arr: any[],index: number, value: any):
any[]{
    arr.splice(index, 0, value); 
    return arr;
}
const myArray = [10,20,30,40,50];
const index = 2
const value = 60
const modifiedArray =
insertValueAtIndex(myArray, index, value);
    console.log(modifiedArray);