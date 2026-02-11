// setTimeout(()=>{
//     console.log("Arrow function");
// },3000);
// console.log("line 1");
// console.log("line 2");
//console.log("line 3");


// function f1(fun){
//     fun(5);
// }

// f1(function(value1){
//     f2(value1,function(value2){
//         f3(value2,function(value3){
//             f4(value3,function(value4){
//                 console.log("All Done");
//             });
//         });
//     });
// });

//callback hell in javascript
// function step1(value){
//     f2(value1,step2);
// }
// function step2(value2){
//     f3(value2,step3);
// }
// function step3(value3){
//     f4(value3,()=>{
//         console.log("All Done");
//     });
// }
// f1(step);



//Producer Code
function someAPI(){
    let p1=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Promise hun");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve(x);
            else
                reject(x);
        },3000);
        
    });
    return p1;
}

//Consumer Code
let p1=someAPI();
p1.then((result)=>{
    console.log("Promise fulfilled"+result);
},(error)=>{
    console.log("Promise Rejected"+error);
});
p1.catch(()=>{
    console.log("In Catch - Rejected ");
});
