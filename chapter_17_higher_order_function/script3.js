
const radius = [3,6,2,8,9];

const circumference = function(radius){
    return 2 * Math.PI * radius
}

const Diameter = function(radius){
    return 2 * radius;
}

const Area =function(radius){
    return Math.PI*radius*radius;
}

// Array.prototype.calculate = function(arr,logic){
//     const output = [];

//     for(let i = 0;i<arr.length;i++){
//         output.push(logic(arr[i]));
//     }

//     return output;
// }
Array.prototype.calculate = function(logic){
    const output = [];

    for(let i = 0;i<this.length;i++){
        output.push(logic(this[i]));
    }

    return output;
}

console.log(radius.map(Area));
console.log(radius.calculate(Area));

// console.log(radius.calculate(radius.Area));

// console.log(calculate(radius,Area));
// console.log(calculate(radius,Diameter));
// console.log(calculate(radius,circumference));