const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promsie P is resolved !!!");
  }, 5000);
});

async function handlePromise() {
  const val = await p;
  console.log("namaste");
  console.log(val);
}

handlePromise();
