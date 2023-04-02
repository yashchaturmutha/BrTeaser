const express =  require("express");
const bodyParser = require("body-parser");
const PORT = 3002;
const app = express();
const sample=require('./sample.json');

app.use(bodyParser.json());

// const objToArr=(keys)=>{

// console.log('---------------------------------------------------------------------------');
// console.log(keys);

let arr=sample;
let main=[];
let messages=[];
// console.log(arr);
// // for(let i=0;i<keys.length;i++)
// // {
// //     if(typeof arr === 'object')
// //     arr=Object.entries(arr[keys[i]]);
// //     else
// //     arr=arr[keys[i]];
// // }
// console.log('---------------------------------------------------------------------------');
// console.log(arr);

// if(typeof arr[keys[0]] === 'object')
//     arr[keys[0]]=Object.entries(arr[keys[0]]);
// else
// arr=arr[keys[0]];

// console.log('-----------------------------------------------------------------------------');
// console.log(arr);


// if(typeof arr[keys[1]] === 'object')
//     arr=Object.entries(arr[keys[1]]);
// else
// {
// arr[keys[1]].map(item=>{
//     if(item[0]==keys[2])
//     {
//     if(typeof item[1] === 'object')
//     arr=Object.entries(arr[keys[1]]);
//     }
// })
// arr=arr[keys[1]];
// }
// console.log('-------------------------------------------------------------------------------');
// console.log(arr);


// // if(typeof arr[keys[2]] === 'object')
// //     arr=Object.entries(arr[keys[2]]);
// // else
// // arr=arr[keys[2]];

// // console.log('---');
// // console.log(arr);
// return arr;
// }

app.get("/", (req,res) => {

// console.log(arr);

let k=Object.keys(arr);
let v=Object.values(arr);
// console.log("\n---------------Keys-----------------");
// console.log(k);
// console.log("\n---------------Values-----------------");
// console.log(v);
// console.log("--------------arr[1]---------------------");
// console.log(arr[1].message);

Object.keys(arr).forEach(function(key) {
    console.log(`---------${key}------------`);
    main.push(arr[key]);
});
console.log("----------------main----------------");
console.log(main);

main.map(item=>{
    messages.push(item['message'])
})
console.log("------------------messages-------------------");
console.log(messages);

// messages.map(item=>{
//     console.log(item);
// })



res.send(sample);
})

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`)
})
