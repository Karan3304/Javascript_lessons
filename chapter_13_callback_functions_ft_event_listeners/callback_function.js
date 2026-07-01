setTimeout(function(){
    console.log("Timer expired")
},5000)

function x(y){
    console.log("x is called");
    y();
}

x(function y(){
    console.log("y is called");
})