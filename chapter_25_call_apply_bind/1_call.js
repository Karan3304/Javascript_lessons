var obj = {
    name:"KARAN",
};

function getName(){
    return "hello " + this.name;
}

console.log(obj.getName); // undefined

console.log(getName.call(obj));