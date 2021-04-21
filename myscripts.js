
function getRndNum(min, max) {
    return Math.floor(Math.random()*max)+ min;
}

var GuessList = [];
var TOGUESSLIST = 5
while(GuessList.length < TOGUESSLIST){
    var Num = getRndNum(1, 10);
    if(GuessList.indexOf(Num) === -1){
        GuessList.push(Num);
    }
    
}
alert(GuessList);
console.log(GuessList);
var h1Element = document.getElementById("secondi-mancanti");
var Timer = parseInt(prompt("Di quanto vuoi settare il timer?"))
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
setTimeout(function(){
    var InputList = [];
var count = 0;
while(GuessList.length > InputList.length){
    var x = parseInt(prompt("Inserisci numero: "));
    if(InputList.includes(x)){
        console.log("Numero "+ x +" già inserito.")
    }else if(GuessList.includes(x) && !InputList.includes(x)){
        InputList.push(x);
        console.log("Numeri input: "+InputList);
        count++;
    }
    else if(isNaN(x)){
        console.log("Numero non valido.")
    }else{
        InputList.push("x");
        console.log("Numero sbagliato.")
    }
}
console.log("Hai indovinato "+count+"numeri: \n" + InputList.join(", "));
},Timer * 1000)
