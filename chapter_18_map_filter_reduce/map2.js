
const arr = [5,2,1,4,7];

const output1 = arr.map(function double(x){ 
    return 2*x;
}); 

const output2 = arr.map(function triple(x){
    return 3*x;
}
); 

const output3 = arr.map(function binary(x){ 
    return x.toString(2);
}
); 

console.log(output1);
console.log(output2);
console.log(output3);