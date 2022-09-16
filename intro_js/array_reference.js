var x = [89, 4, 51, 29, 51, 9];

var y = x;

y[0] = 9999;

console.log(y);

console.log(x);

console.log(x == y);

var a = 8;
var b = a;

b += 4;

console.log(a);