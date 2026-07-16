const user = {
  firstName: "Karan",
  getName() {
    const firstName = "Jen";
    return this.firstName;
  },
};
console.log(user.getName());

// Output : Karan
