// catGenerator returns an array of 5-9 cats to display on page
// each cat has a random name, picture, description, and favorite activity
function catGenerator () {
    var cats = [];

    var catNames = ["Mittens", "Cleopatra", "Tom", "Pirate", "Shadow", "Socks", "Bucky", "Mr. Meowgi", "Sheriff", "Tofu"];
    var catDescriptions = ["sleepy", "angry", "cute", "violent", "agile", "jumpy", "fat", "looming", "sneaky"];
    var catActivities = ["prepare your taxes for you", "loafing around", "eat lasagna", "count to seven", "be cute", "knock important items over the desk", "discover the cure for cancer", "clawing the back of my legs when I sit on the couch", "pick you up from work", "throw up hairballs", "play in cardboard boxes"];

    for (var i = 0; i < Math.floor((Math.random() * 5) + 6); i++) {
        var cat = {};
        cat['name'] = catNames[Math.floor(Math.random() * catNames.length)];
        cat['description'] = catDescriptions[Math.floor(Math.random() * catDescriptions.length)];
        cat['activity'] = catActivities[Math.floor(Math.random() * catActivities.length)];
        cat['image'] = `cat${Math.floor(Math.random() * 15) + 1}.jpg`
        cats.push(cat);
    }

    return cats;
}

console.log(catGenerator());