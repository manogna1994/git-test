var rect = require('./rectangle');
function solveRect(l,b){
    console.log("solving for the rectangle with l=" + l +"and b = " +b);

    rect(l,b, (err, rectangle) => {
            if(err){
                console.log("ERROR", err.message);
            }
            else{
                console.log("The area of rectangle of dimensions l=" + l + "and b = " + b + " is " + rectangle.area());
                console.log("The perimeter of rectangle of dimensions l=" + l + "and b = " + b + " is " + rectangle.perimeter());
            }
    });
    console.log("This statement is after call to rect()");
};

solveRect(2,4);
solveRect(3,5);
solveRect(0,2);
solveRect(-1,7);