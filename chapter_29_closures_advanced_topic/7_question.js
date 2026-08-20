// block scope and settimeout

// function a(){

//     for (var i = 0; i < 3; i++) {
//         setTimeout(function log() {
//             console.log(i);
//         }, i*1000);
//     }
// }

// a(); // 3 3 3

function b() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
}
b();
