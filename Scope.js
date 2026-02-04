function f1()
{

    {
        var x=10;
        let y=20;
        console.log(x,y);
    }

console.log(x);

}

f1();


//Hoisting 

function f2()
{                           //var x;
    console.log(x);
    var x=5;                //x=5;
}