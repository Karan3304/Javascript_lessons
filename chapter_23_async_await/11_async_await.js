const p = Promise.resolve("Promise Resolved");

async function test() {
    console.log("A");

    await p;

    console.log("B");
    console.log("C");
}

console.log("Start");

test();

console.log("Middle");
console.log("End");


// output
//          Start
//          A
//          Middle
//          End
//          B
//          C