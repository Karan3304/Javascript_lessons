// Create a button UI and add throttle as follows =>
// --> show "button pressed <X> times" every time button is pressed
// --> increase "triggered <Y> times" every 800ms of throttle

const btn = document.querySelector(".increment_btn");
const btnpress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressesCount = 0;
var triggerCount = 0;

// const start = new Date().getTime();

const throttleCount = _.throttle(() => {
//   const now = new Date().getTime();
//   console.log(now - start);
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnpress.innerHTML = ++pressesCount;
  throttleCount();
});
