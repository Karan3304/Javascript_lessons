function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
/* you can call it in two ways*/
console.log(sum(1)(2)(3)); //6

const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6

console.log(sum1);
console.log(sum2);
