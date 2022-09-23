function flatten(arr2d) {
    var flattened_array = [];

    for (var i = 0; i < arr2d.length; i++) {
        for (var j = 0; j < arr2d[i].length; j++) {
            flattened_array.push(arr2d[i][j]);
        }
    }

    return flattened_array;
}

var output = flatten([[1, 2, 3], [4, 5], [6, 7, 8, 9]]);
console.log(output);

var output = flatten([[1, 2, 3], [], [6, 7, 8, 9]]);
console.log(output);