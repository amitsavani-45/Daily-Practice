/*
in this making the mathamatical function like addition
,subcration,multiplication.,division in one class and calling it and make the this*/

// in one claas many fucntion are call 
class maths{

add(a,b){
    return a+b;
}


sub(a,b){
    return a-b;
}

mulsk(a,b){
    return a*b;
}

div(a,b){
    return a/b;
}

}

const cal=new maths();

console.log("addition is"+" "+cal.add(20,30));

console.log("subcration is"+" "+cal.sub(45,23));

console.log("multiplication is"+" "+cal.mulsk(9,5));

console.log("division is"+" "+cal.div(45,9));

class calculation{

    constructor(){
        this.mathsop=new maths();
    }




table(number,range=10){
    console.log("\n multiplication table for "+ number + ":");

    for(let i=1; i<=range; i++)
    {
        let result=this.mathsop.mulsk(number,i);
        console.log(number+" "+"X"+" "+i+" "+"="+result);
    }
}
}

const tableCalc = new calculation();  +" "
tableCalc.table(2);