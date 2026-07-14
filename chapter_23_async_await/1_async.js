async function getData(){
    return "karan";
}

const Data = getData();
// console.log(Data);
Data.then(res => console.log(res));