
/*
console.log(example);
let example = "I'm the example!";
*/

/*
// 1     undefined
console.log(hello);
var hello = 'world';
//after Hoisting
//var
//console.log(hello);
//hello = 'world'
*/

/*
//2    magnet
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//after Hoisting
// var 
//function test()
//var
//var needle = 'haystack'
//function test()
//var needle = 'magnet'
//console.log(needle)
*/


/*
//3    'super cool' because of var global scope
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//after Hoisting
//var
//print()
//brendan = 'super cool'
//function print()
//brendan = 'only okay'
//console.log(brendan)
//console.log(brendan)
*/

/*
// 4     1st: chicken 2nd: 'half-chicken'
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//after Hoisting
//var
//eat()
//console.log(food)
//eat()
//food = 'half-chicken'
//console.log(food);
//var food = 'gone'
*/


/*
//5     mean() is not a function
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//after Hoisting
//mean()
//var
//console.log(food)
//var mean = function()
//function()
//var
//food = "chicken"
//console.log(food)
//food = "fish"
//console.log(food)
*/


/*
// 6  1st: undefined 2nd: rock 3rd: r&b 4th: disco
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//after Hoisting
//var
//rewind()
//function rewind()
//console.log(genre)
//rewind()
//rewind()
//var
//genre = "rock"
//console.log(genre)
//genre = "r&b"
//console.log(genre);
//console.log(genre)
*/

/*
// 7    1st: san jose 2nd: seattle 3rd: burbank 4th: san jose
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//after Hoisting
//learn()
//dojo = "san jose"
//console.log(dojo)
//learn();
//function learn()
//var
//dojo = "seattle"
//console.log(dojo)
//dojo = "burbank"
//console.log(dojo)
*/

