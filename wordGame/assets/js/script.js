var cartoons = [
    "TheSimpsons",
    "SouthPark", "FamilyGuy", "AdventureTime", "Futurama", "RickandMorty", "SpongeBob"
]

var answer = '';

function randomWord() {
    answer = cartoons[Math.floor(Math.random() * cartoons.length)];

    alert();
}

randomWord();
// var timeEl = document.querySelector(".time");

// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//     var timeInterval = setInterval(function() {
//         secondLeft--;
//         timeEl.textContent = secondsLeft + "second";
        
//         if(secondsLeft === 0) {
//             clearInterval(timeInterval);

//             sendMessage();
//         }

//     }, 1000);
// }

// function sendMessage() {
//     timeEl.textContent = " ";

// }

// setTime();