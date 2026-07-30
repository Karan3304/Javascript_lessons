// Create a button UI and add debounce as follows =>
// --> show "button pressed <X> times" every time button is pressed
// --> increase "triggered <Y> times" count after 800ms of debounce

const btn = document.querySelector(".increment_btn");
const btnpress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressesCount = 0;
var triggerCount = 0;

const debounceCount = _.debounce(() => {
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnpress.innerHTML = ++pressesCount;
  debounceCount();
});
