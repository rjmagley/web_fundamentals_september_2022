// var x = 90;

// if (x <= 10) {
//     for (var i = 0; i < x; i++) {
//         console.log("x is less than or equal to ten");
//     }
// }
// else {
//     console.log("not gonna loop that many times >:(");
// }

// loop of numbers 1 through 100000
// print numbers that are evenly divisible by six and evenly divisible by 7

// for (var i = 1; i <= 100000; i++) {
//     if (i % 6 == 0) {
//         if (i % 7 == 0) {
//             console.log(i);
//         }
//     }
// }

for (var i = 1; i <= 100000; i++) {
    if (i % 4 == 0 || (i % 7 == 0 && i % 6 == 0)) {
        console.log(i);
    }
}