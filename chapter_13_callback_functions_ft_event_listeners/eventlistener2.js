
function attachEventListener(){
    let count = 0;
    
    document.getElementById("ClickMe").addEventListener("click",function xyz(){
        console.log("bButton clicked...",++count);
    }); 
}

attachEventListener();