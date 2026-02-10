/*What is this?
In JavaScript, the this keyword refers to an object.

The this keyword refers to different objects depending on how it is used:

Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an object method, this refers to the object.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object



let a=10;

function f1(){
    console.log(this);
}
f1();





const obj={
    name:'saurabh',
    age:44,
    sayHi:function(){
        console.log("i am"+" "+this.name);
    }
}
obj.sayHi();



const anotherObj={
    name:'Aditya'
};
anotherObj.sayHi=obj.sayHi;
anotherObj.sayHi();
obj.sayHi();




function Book(id,title,price){
    this.id=id;
    this.title=title;
    this.price=price;
    console.log(this);
}
const b1=new Book(1,"js in depth",400);

*/