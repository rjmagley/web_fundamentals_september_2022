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

function hideCookiesElement() {
    var cookiesDiv = document.querySelector("#cookie-notice");
    cookiesDiv.style = "display: none;";
}

console.log("generating cats...");
var catArray = catGenerator();
var catDiv = document.getElementById("right-content");


for (var i = 0; i < catArray.length; i++) {
    var cat = catArray[i];

    var catElement = document.createElement("div");
    catElement.className = "cat-info";

    var catPhoto = document.createElement("img");
    catPhoto.setAttribute("src", `./images/${cat['image']}`);

    var catData = document.createElement("div");
    catData.className = "cat-data";

    var catName = document.createElement("h2");
    catName.innerHTML = cat['name'];

    var catDescription = document.createElement("p");
    catDescription.innerHTML = `Description: ${cat['description']}`;

    var catActivity = document.createElement("p");
    catActivity.innerHTML = `Favorite activity: ${cat['activity']}`;

    catElement.appendChild(catPhoto);
    catElement.appendChild(catData);

    catData.appendChild(catName);
    catData.appendChild(catDescription);
    catData.appendChild(catActivity);

    catDiv.appendChild(catElement);
}