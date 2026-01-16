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