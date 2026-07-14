
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promsie P1 is resolved !!!");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promsie P2 is resolved !!!");
  }, 20000);
});
   
async function handlePromise() {
  console.log("hello karan");

  const val1 = await p1;
  console.log("namaste JS1");
  console.log(val1);

  const val2 = await p2;
  console.log("namaste JS2");
  console.log(val2)
  
}

handlePromise();
