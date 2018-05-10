var fs = require('fs');

//open and read the food list
var food = fs.readFileSync('food.txt', 'utf8');

//print a food heading and list of food
console.log('FOOD');
console.log(food);


//open read drink list
var drinks = fs.readFileSync('drinks.txt', 'utf8');


//print a drink heading and list of drinks
console.log('DRINKS');
console.log(drinks);