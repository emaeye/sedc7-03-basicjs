var phonePrice = 119.95;
var taxRate = 0.05;
var numberOfPhones = 30;
var priceWithTax = phonePrice * taxRate + phonePrice;

var totalPrice = numberOfPhones * priceWithTax;

console.log(`The total price of 30 phones is ${totalPrice}`);