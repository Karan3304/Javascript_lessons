function x(){
    var a = 3;

    function y(){
        console.log(a);
    }

    a = 100;

    return y;
}

var k = x();
console.log(k);

k();         //   it will give output 100