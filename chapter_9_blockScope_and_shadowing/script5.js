var a = 100;
{
    var a = 10;    // this a is shadowing the global var a
    let b = 20;
    const c = 30;
    console.log(a);
}

console.log(a);



// output it   :   10
//                 10