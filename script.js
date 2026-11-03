// Digital Clock using Date Object
function displayTime() {
    let d = new Date();
    document.getElementById("time").innerHTML =
        d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

setInterval(displayTime, 1000);
displayTime();


// Change Background Colour every 30 seconds
function changeBackground() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    document.body.style.backgroundColor =
        "rgb(" + r + "," + g + "," + b + ")";
}

setInterval(changeBackground, 30000);


// Change Styles
function changeStyle() {
    let title = document.getElementById("title");

    title.style.color = "blue";
    title.style.fontSize = "35px";
    title.style.backgroundColor = "yellow";
}


// Hide Message
function hideText() {
    document.getElementById("message").style.display = "none";
}


// Show Message
function showText() {
    document.getElementById("message").style.display = "block";
}


// Moving Animation using setInterval
let pos = 0;
let timer;

function move() {
    clearInterval(timer);

    let box = document.getElementById("box");
    pos = 0;
    box.style.left = "0px";
    box.style.opacity = "1";

    timer = setInterval(function () {
        if (pos >= 250) {
            clearInterval(timer);
        } else {
            pos++;
            box.style.left = pos + "px";
        }
    }, 10);
}


// Stop Animation
function stop() {
    clearInterval(timer);
}


// Fade Animation
function fade() {
    let box = document.getElementById("box");
    let opacity = 1;

    clearInterval(timer);

    timer = setInterval(function () {
        if (opacity <= 0) {
            clearInterval(timer);
        } else {
            opacity -= 0.05;
            box.style.opacity = opacity;
        }
    }, 50);
}


// Reset Animation
function resetBox() {
    clearInterval(timer);

    pos = 0;

    let box = document.getElementById("box");
    box.style.left = "0px";
    box.style.opacity = "1";
}


// Welcome Message using setTimeout
setTimeout(function () {
    alert("Welcome to KidsLearn! Happy Learning!");
}, 2000);