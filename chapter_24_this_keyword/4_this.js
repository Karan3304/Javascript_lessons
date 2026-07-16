const obj = {
  name: "Claude",
  show: function () {
    console.log(this.name);
  },
};

obj.show(); // "Claude" ✅

const obj2 = {
  name: "Sonnet",
  show: obj.show, // sirf function reference copy hua, obj ka "this" nahi
};

obj2.show(); // "Sonnet" ✅
