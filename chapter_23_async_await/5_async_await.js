const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promsie P is resolved !!!");
  }, 5000);
});

// without async await

function handlePromise() {
  p.then((res) => console.log(res)); // js engine will not wait here for the promise p to be resolved,it will immediately move to next line
  console.log("Hii karan");
}

handlePromise();
