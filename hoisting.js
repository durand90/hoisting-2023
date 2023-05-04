
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


