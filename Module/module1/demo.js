function f1() {
    console.log(`this is f1`);
}

var x = 20;
var y = 30;

module.exports.f1 = f1;     //exporting 1 by 1
module.exports.x = x;       //right hand side is a varible which we are exporting storing value of left hand side variable
module.exports.yy = y;