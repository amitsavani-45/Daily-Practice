/*
//Example-1
//Producer Code
function someAPI1(){
    let p1=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Promise 1 hun");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve(x);
            else
                reject(x);
        },5000);
        
    });
    return p1;
}
function someAPI2(){
    let p2=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Promise 2 hun");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve(x);
            else
                reject(x);
        },3000);
        
    });
    return p2;
}

//Consumer Code
let p1=someAPI1();
let p2=someAPI2();
p1.then((result)=>{
    console.log("Promise fulfilled"+result);
},(error)=>{
    console.log("Promise Rejected"+error);
});
p2.then((result)=>{
    console.log("Promise fulfilled"+result);
},(error)=>{
    console.log("Promise Rejected"+error);
});

*/
/*
//Example-2
//Producer Code
function someAPI1(){
    let p1=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Promise 1 hun");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve(x);
            else
                reject(x);
        },5000);
        
    });
    return p1;
}
function someAPI2(){
    let p2=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Promise 2 hun");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve(x);
            else
                reject(x);
        },3000);
        
    });
    return p2;
}

//Consumer Code
someAPI1()
    .then((result)=>{
            console.log("Promise fulfilled"+result);
            return someAPI2();
        },(error)=>{
            console.log("Promise Rejected"+error);
    })
    .then((result)=>{
            console.log("Promise fulfilled"+result);
        },(error)=>{
            console.log("Promise Rejected"+error);
    });
*/
//Producer Code
function someAPI1(){
    let p1=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Promise 1 hun");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve(x);
            else
                reject(x);
        },5000);
        
    });
    return p1;
}
function someAPI2(){
    let p2=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Promise 2 hun");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve(x);
            else
                reject(x);
        },3000);
        
    });
    return p2;
}
async function f1(){
    console.log("I am a normal function");
    await someAPI1()
        .then((result)=>{
            console.log("Promise fulfilled"+result);
        },(error)=>{
            console.log("Promise Rejected"+error);
        });
    await someAPI2()
        .then((result)=>{
            console.log("Promise fulfilled"+result);
        },(error)=>{
            console.log("Promise Rejected"+error);
    });
}
let p1=f1();