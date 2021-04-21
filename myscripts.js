
function getRndNum(min, max) {
    return Math.floor(Math.random()*max)+ min;
}

var GuessList = [];
var ToGuessNum = 5
while(GuessList.length < ToGuessNum){
    var Num = getRndNum(1, 50);
    GuessList.push(Num);
}
console.log(GuessList);

alert(GuessList);

var h1Element = document.getElementById("secondi-mancanti");
var Timer = parseInt(prompt("Quanto tempo vorresti avere a disposizione?"))
h1Element.innerHTML = ("You have " + Timer + " seconds.");
var clock = setInterval(function() {
    if (Timer === 0) {
        clearInterval(clock);
    } else {
        Timer--;

        h1Element.innerHTML = "You have " + Timer + " seconds.";

        console.log("You have " + Timer + " seconds.");
    }
}, 1000)

//Inizio del gioco
