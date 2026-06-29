function x(){
    var a = 3;

    function y(){
        console.log(a);
    }

    return y;
}

var k = x();
console.log(k);

k();

// we can also write the function x as 
// function x(){
//     var a = 3;
//     return function y(){
//         console.log(a);
//     }
// }