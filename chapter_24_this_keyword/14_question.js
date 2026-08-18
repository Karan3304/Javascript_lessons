const user = {
  name: "karan",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(user.logMessage, 1000); // undefined

// fixing this code

const user2 = {
  name: "karan",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(function (params) {
  user2.logMessage();
}, 1000); 
// OR
setTimeout(() => {
  user2.logMessage();
}, 1000);
