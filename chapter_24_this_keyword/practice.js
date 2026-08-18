const obj2 = {
  a: 10,
  x: function () {
    setTimeout(() => {
        console.log(this.a);
    }, 2000);
  },
};

obj2.x();