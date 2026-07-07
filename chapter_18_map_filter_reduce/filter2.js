const arr = [5,2,5,7,3,8];

const output1 = arr.filter(function isOdd(x){
    return x%2;
});

const output2 = arr.filter(function isEven(x){
    return x%2===0;
});

const output3 = arr.filter(function GreaterThan4(x){
    return x>4;
});

console.log(output1);
console.log(output2);
console.log(output3);