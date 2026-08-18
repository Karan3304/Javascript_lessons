function once(fn) {
  let executed = false;
  let result;

  return function () {
    if (!executed) {
      result = fn();
      executed = true;
    }

    return result;
  };
}

function initializeApp() {
  console.log("App initialized");
  return "Done";
}

const initOnce = once(initializeApp);

console.log(initOnce()); // App initialized
console.log(initOnce()); // Done
console.log(initOnce()); // Done
console.log(initOnce()); // Done 