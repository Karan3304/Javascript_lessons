const pro = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("pro is resolved");
    }, 3000);
})

async function getData(){
    console.log(pro);
    return pro;
}

const Data = getData();
// console.log(Data);
Data.then(res => console.log(res));

