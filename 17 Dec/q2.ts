//impliment a simple shopping cart program using an array.Create a function
//to add items,remove items and update quantities using the splice method.
//Print the cart's contents after each operation.
let cart: string[]; 
//Initialize an empty shopping cart array
function addItem(item:string): void {
    cart.push(item);
    //add item to the end of the cart array printCart();;
}
function removeitems(item:string): void {
    const index = 
    cart.indexOf(item);
    if(index !== -1){
        cart.splice(index,1);
        //remove the item from the cart array
         removeitems(';')
    }
}