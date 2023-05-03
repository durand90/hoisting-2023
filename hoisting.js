
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


//2    reference error
//var needle = 'haystack';
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
