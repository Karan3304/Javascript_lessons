const p = new Promise((resolve,reject) => {
    resolve("promsie P is resolved !!!");
})


// //    this is pormise handling using .then method
// function getData(){
//     p.then((res) => console.log(res));
// }

// getData();

// //     promsie handling using the 

async function handlePromise(){
    const val = await p;
    console.log(val);
}

handlePromise();