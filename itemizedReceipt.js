// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

//goal is to create an array with a function, use rest params
const logReceipt = function(...menuItems){
  let totalPrice=0;
  menuItems.forEach( function( menuItems){
    console.log(menuItems.descr);
    totalPrice += menuItems.price;
    console.log(totalPrice);  
  }
  )
}


// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97




