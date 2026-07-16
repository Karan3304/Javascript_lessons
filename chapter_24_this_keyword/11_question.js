let user = {
  name: "karan",
  age: 24,
  childObj: {
    newName: "sunil",
    getDetails() {
      console.log(this.newName, "and", this.name);
    },
  },
};
