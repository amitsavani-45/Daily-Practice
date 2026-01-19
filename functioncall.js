/*const person= { name: "Amit",
                greet : function()
                {
                    console.log(" hello , i am" + this.name);
                }

                
}
person.greet();

// this and call back 
const person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const person2 = {
    firstName: "amit",
    lastName: "savani"
};


let name = person1.fullName.call(person2);
console.log(name); 


//apply() function

const calculator = {
    sum: function(a, b, c) {
        return a + b + c;
    }
};


const numbers1 = [10, 20, 30];

let result2 = calculator.sum.apply(null, numbers1);
console.log(result2);  


let numbers2 = [5, 6, 2, 3, 7];

let max = Math.max.apply(null, numbers2);
console.log(max); 

let min = Math.min.apply(null, numbers2);
console.log(min); 




//bind() in function

const person4 = {
   
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const user = {
    firstName: "Amit",
    lastName: "Savani"
};


let result1 = person4.fullName.call(user);
console.log(result1);  


let getUserName = person4.fullName.bind(user);
console.log(getUserName);  

let res = getUserName();
console.log(res);  



const player={
    name: function(){
        return this.name+ " "+ this.teamname;
    }
};

const team={
    name: "virat",
    teamname: "RCB"
};

let give=player.name.call(team);
console.log(give);

let giveteam=player.name.bind(team);
console.log(giveteam);

let teamname=giveteam();
console.log(teamname);

*/
//more on fuction 

//function area of circle

function area_circle(radius){
    let area=3.14*radius*radius
    return area;
}
let areaofcircle=area_circle(12);
console.log("the area of circle is",areaofcircle.toFixed(2));

//make a fucntion to calculate the simple interst

function interst(p,r,n){
    let si=(p*r*n)/100;
    return si;

}
let simple_interst=interst(10000,5,2);
console.log("the simple interst is",simple_interst);



