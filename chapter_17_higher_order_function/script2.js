const radius = [3,6,2,8,9];

const calculate = function(radius){
    const output = [];

    for(let i = 0;i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }

    return output;
}

console.log(calculate(radius));

const calculateCirucm = function(radius){
    const output = [];

    for(let i = 0;i<radius.length;i++){
        output.push(Math.PI * 2* radius[i]);
    }

    return output;
}

console.log(calculateCirucm(radius));



const calculateDia = function(radius){
    const output = [];

    for(let i = 0;i<radius.length;i++){
        output.push(2 * radius[i]);
    }

    return output;
}

console.log(calculateDia(radius));