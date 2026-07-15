const obj = {
    a:10,
    x : ()=>{
        console.log(this);   // this in an arrow function
    }
};

obj.x();