const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p1 fails"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p2 fails"), 4000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p3 fails"), 2000);
});

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });

//   it returns the value of the first settled promsie,irrespective of whether it fails or success
