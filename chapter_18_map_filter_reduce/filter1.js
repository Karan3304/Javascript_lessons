const arr = [5,2,5,7,3,8];

function isOdd(x){
    return x%2;
}
function isEven(x){
    return x%2===0;
}
function GreaterThan4(x){
    return x>4;
}

const output1 = arr.filter(isOdd);
const output2 = arr.filter(isEven);
const output3 = arr.filter(GreaterThan4);

console.log(output1);
console.log(output2);
console.log(output3);