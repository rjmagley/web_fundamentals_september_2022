// write a function that accepts an array as its first parameter, and a number
// as its second
// have the function return a new array consisting of the items from the given
// array that are divisible by the number given
// ex. arguments of [7, 8, 3, 6, 2, 21, 4, 12], 3
// should return an output of [3, 6, 21, 12]
// ex. arguments of [24, 7, 21, 4, 5, 4, 9, 4, 3], 4
// should return [24, 4, 4, 4]

function arrayItemsDivisibleByX(array, x) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % x == 0) {
            // not newArray.push(i); because that adds the index of an item,
            // not the item itself
            newArray.push(array[i]);
        }
    }
    return newArray;
}

var output = arrayItemsDivisibleByX([7, 8, 3, 6, 2, 21, 4, 12], 3);
console.log(output);

output = arrayItemsDivisibleByX([24, 7, 21, 4, 5, 4, 9, 4, 3], 4);
console.log(output);

output = arrayItemsDivisibleByX([78, 9, 2, 17, 5, 21, -5, 0], 1);
console.log(output);

output = arrayItemsDivisibleByX([7, 14, 5, 6, 21, 9, 68, 192], 8971234897);
console.log(output);

output = arrayItemsDivisibleByX([], 5);
console.log(output);

output = arrayItemsDivisibleByX([7, 14, 5, 6, 21, 9, 68, 192], 0);
console.log(output);
// part 1

// part 2

// part 3
console.log("just this runs");