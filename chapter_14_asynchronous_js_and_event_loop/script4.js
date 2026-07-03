console.log("start");

setTimeout(function cbt(){
    console.log("callback cbt function executed...");
},5000);

document.getElementById("ClickMe").addEventListener("click",function cbf(){
    console.log("callback cbf function executed");
});

console.log("end");