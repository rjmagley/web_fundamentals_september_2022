var sampleObject = {
    'keyA': [7, 21, 8, 31, -7],
    'keyB': 94,
    'keyC': 121,
    'keyD': 21,
    'keyE': 81
}

for (key in sampleObject) {
    // console.log(sampleObject[key]);
    console.log(key);
}

for (x of sampleObject) { // this loop fails - sampleObject is not iterable
    console.log(x);
}

// similar syntax for iterating through arrays

var sampleArray = [8, 1, 21, 42, -9, 7];

for (value of sampleArray) {
    console.log(value);
    if (value >= 20) {
        break;
    }
}
// for (value in sampleArray) {
//     console.log(value);
// }
