var fs = require('fs');

//load food list asynchronously
fs.readFile('food.txt', 'utf8', function(err, food){
    if (err) {
        console.log(err);
        }else{
            console.log(food);
        }
});

console.log('FOOD');

var fs = require('fs');

//load food list asynchronously
fs.readFile('drinks.txt', 'utf8', function(err, drinks){
    if (err) {
        console.log(err);
        }else{
            console.log(drinks);
        }
});