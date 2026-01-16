const person= { name: "Amit",
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


const numbers = [10, 20, 30];

let result2 = calculator.sum.apply(null, numbers);
console.log(result2);  