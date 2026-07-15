const obj = {
  name: "Karan",
  x: function () {
    console.log(this.name);
  },
};

obj.x();
