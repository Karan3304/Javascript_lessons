const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promsie P is resolved !!!");
  }, 5000);
});

async function handlePromise() {
  console.log("hello karan");

  const val1 = await p;
  console.log("namaste JS1");
  console.log(val1);

  const val2 = await p;
  console.log("namaste JS2");
  console.log(val2)
  
}

handlePromise();
