// quick reference for different types of combined data

// array of arrays
// (also known as nested arrays, 2-dimensional arrays)
var sampleNestedArray = [[4, 5, 73], [1, 32, 9], [831, 9, 1]];
console.log(sampleNestedArray[0]);
console.log(sampleNestedArray[0][2]);

// if I wanted to get the number 32 from the above data...
console.log(sampleNestedArray[1][1]);

// if I want two values,
console.log(sampleNestedArray[1][1], sampleNestedArray[0][2]);



// arrays as values of objects
var samplePersonData = {
    'name': 'Guy',
    'age': 27,
    'hobbies': ['hiking', 'water polo', 'small nuclear reactor maintenance']
}

console.log(samplePersonData['hobbies'][0]);

console.log(samplePersonData['hobbies'][2].length);

// manipulating objects
// add key with value
samplePersonData['sign'] = 'Aries';

// remove key
delete samplePersonData['sign'];

console.log(samplePersonData);



// objects within arrays

var samplePersonA = {
    'name': 'Guy',
    'age': 27,
    'hobbies': ['hiking', 'water polo', 'small nuclear reactor maintenance']
}

var samplePersonB = {
    'name': 'Person',
    'age': 24,
    'hobbies': ['hiking', 'dog training', 'model boats']
}

var samplePersonC = {
    'name': 'Dude',
    'age': 26,
    'hobbies': ['contemplation', 'brassica breeding', 'stuff']
}

var personArray = [
    samplePersonA,
    samplePersonB,
    samplePersonC
]

console.log(personArray[0]['hobbies'][2]);



// objects within objects

var nestedObject = {
    'employee_id': 'AJ1928',
    'first_name': 'Andrew',
    'last_name': 'Jobhaver',
    'department': 'Sales',
    'accesses': {'main_office': true,
        'breakroom': true,
        'server_room': false,
        'secure_warehouse': false
    }
}

console.log(nestedObject['accesses']);
console.log(nestedObject['accesses']['server_room']);