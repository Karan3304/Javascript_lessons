console.log("start");

setTimeout(function cbt(){
    console.log("callback cbt function executed...");
},5000);

fetch("https://api.netflix.com").then(function cbf(){
    console.log("cb netflix");
});

console.log("end");