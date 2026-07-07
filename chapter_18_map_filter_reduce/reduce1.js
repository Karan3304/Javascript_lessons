const arr = [5,1,3,2,6];

//findint sum of the array using the reduced function

function findSum(arr){  // normal sum funciton
    let sum = 0;

    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}

function findMax(arr){ // normal function to find maximum
    let max = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findSum(arr));
console.log(findMax(arr));

const output1 = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);

const output2 = arr.reduce(function(acc,curr){
    if(curr > acc){
        acc = curr;
    }
    return acc;
},0);

console.log(output1);
console.log(output2);