// what will be the output??

let count = 0;

(function printCount() {
  if (count === 0) {
    let count = 1; // shadowing
    console.log(count); // 1
  }
  // count = 0 here
  console.log(count); // 0
})();
