var obj = {
    name:"KARAN",
};

function getName(age,field){
    return "hello " + this.name + " is " + age + " and a "+field;
}

console.log(getName.call(obj,25,"software engineer"));