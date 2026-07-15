const Student1 = {
    name : "Karan",
    printName : function(){
        console.log(this.name);
    }
};

Student1.printName();

Student2 = {
    name : "Akahay sir"
}

Student1.printName.call(Student2);