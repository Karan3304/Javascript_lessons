// make this run only once

// let view;
// function func() {
//   view = "karan";
//   console.log("hello ", view);
// }

// func();
// func();
// func();
// func();
// func(); // we can run it many times

// run only once - we will use closures for this
let view;
function func() {
    let called = 0;
    return function(){
        if(called > 0){
            console.log(new Error("Already called once !!!"));
        }
        else{
            view = "karan";
            console.log("hello "+ view);
            called++;
        }
    };
}

let yo = func();
yo();
yo();
yo();