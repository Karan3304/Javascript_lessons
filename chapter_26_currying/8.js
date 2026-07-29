// Manipulation DOM through the curring

function updateElementText(id){
    return function(content){
        document.querySelector("#"+id).textContent = content;
    };
}

const updateHeader = updateElementText("Heading");

updateHeader("the OG karan");