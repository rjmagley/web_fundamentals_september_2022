// functions and parameters/arguments

// three parameters
// parameters are bits of data that the function can refer to
function addThreeNumbers(numberOne, numberTwo, numberThree) {
    console.log(numberThree);
    var result = numberOne + numberTwo + numberThree;
    // return statement takes data from the function and returns it to where
    // the function was called
    return result;
}

// when we call the function, we provide arguments
var x = addThreeNumbers(3, 6);
console.log(x);

// console.log(addThreeNumbers(2, 4, 8));