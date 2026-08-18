// Map pollyfill

let square = function(x){
    return x*x;
}

const arr = [1,2,3,4,5];
let result = arr.map(square);
console.log(result);

Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i = 0;i<this.length;i++){
        temp.push(cb(this[i]));
    }
    return temp;
}

let res2 = arr.myMap(square);
console.log(res2);