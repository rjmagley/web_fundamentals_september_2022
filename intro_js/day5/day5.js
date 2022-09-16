// collections of data
// arrays are the first example of this
// arrays are a collection of data in a particular order
// we don't have to have every item be of the same type in an array
// ... but it's good practice

var sampleArray = [7, 1, 6, 23, 9];
// var anotherArray = [9, "hello", true, 89, null, [5, 6, 1]];

// access items by index
// index starts at zero

// this is similar to accessing individual characters from strings
// console.log("hello"[2]);

// push and pop
sampleArray.push(916);
// console.log(sampleArray);
var removedItem = sampleArray.pop();

// console.log(removedItem);
// console.log(sampleArray);

// iterating over arrays as part of a for loop
for (var i = 0; i < sampleArray.length; i++) {
    console.log(sampleArray[i]);
}

// console.log(sampleArray[sampleArray.length - 1]);

// iterate over array backwards
for (var i = sampleArray.length - 1; i >= 0; i--) {
    console.log(sampleArray[i]);
}