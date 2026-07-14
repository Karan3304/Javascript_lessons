const pro = new Promise((resolve,reject)=>{
    resolve("pro is resolved");
})

async function getData(){
    return pro;
}

const Data = getData();
// console.log(Data);
Data.then(res => console.log(res));

