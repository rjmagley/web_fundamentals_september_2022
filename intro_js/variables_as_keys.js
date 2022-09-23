var sampleObject = {
    'name': 'Mike',
    'breed': 'n/a',
    'dateObtained': '01/01/01',
    'location': '60612',
    'vaccine_schedule': '01/03/01'
}

var keyList = ['name', 'breed', 'location'];

console.log(Object.keys(sampleObject));

// for (var i = 0; i < keyList.length; i++) {
//     console.log(sampleObject[keyList[i]]);
// }