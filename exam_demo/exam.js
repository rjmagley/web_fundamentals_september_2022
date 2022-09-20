function newPostAlert() {
    alert("YOu must be logged in 2 create new post");
}

function removeSubscribe(element) {
    console.log("clicked subscribe button");
    element.remove();
}

function likeKeyboard(keyboardID) {
    var keyboardLikes = document.querySelector(`#keyboard-likes-${keyboardID}`);

    keyboardLikes.innerHTML = parseInt(keyboardLikes.innerHTML) + 1;
}