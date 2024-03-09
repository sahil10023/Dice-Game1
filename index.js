
var randomNumber1 = Math.floor(Math.random() * 6);

var RNGimages = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

document.querySelector(".img1").setAttribute("src", RNGimages[randomNumber1]);

var randomNumber2 = Math.floor(Math.random() * 6);

document.querySelector(".img2").setAttribute("src", RNGimages[randomNumber2]);

if (randomNumber1 > randomNumber2){
   document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681";
}
 else {
   document.querySelector("h1").innerHTML = "Draw!";
 }
