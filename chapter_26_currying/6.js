// Currying vs partial application

//                             Currying

function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
};

console.log(sum(12)(12)(8));
// OR
const sum1 = sum(12);
const sum2 = sum1(12);
const result = sum2(8);
console.log(result);

//                           Partial application

function sumx(a){
    return function(b,c){
        return a+b+c;
    }
}

console.log(sumx(20)(1,3));
// or
const x = sumx(20);
console.log(x(1,3));
console.log(x(4,5));