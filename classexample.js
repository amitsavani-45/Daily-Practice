class addition{
    constructor(a,b){
        this.a=a;
        this.b=b;
      
    }


add(){    console.log(this.a+this.b);
   
}
}


let addition1=new addition(10,20);

addition1.add();


class subtraction{
    constructor(as,bs){
        this.as=as;
        this.bs=bs;
    }

    sub(){
        console.log(this.as-this.bs);
    }
}

let subtraction1=new subtraction(30,12);
subtraction1.sub();

class multiplication{
    constructor(am,bm){
        this.am=am;
        this.bm=bm;
    }
    mul(){
        console.log(this.am*this.bm);
    }
}

let multiplication1=new multiplication(9,5);
multiplication1.mul();



class division{
    constructor(ad,bd){
        this.ad=ad;
        this.bd=bd;
    }

    div(){
        console.log(this.ad/this.bd);
    }
}
let division1=new division(45,9);
division1.div();