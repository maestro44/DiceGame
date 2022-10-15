var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var path1 = "images/dice" + randomNumber1 + ".png";



document.querySelector("img").setAttribute("src", "images/dice"+randomNumber1+".png")
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");



// create an if maze depending on randomNumber1, randomNumber2, or tie
// change the innerText of the H1
if( randomNumber1 > randomNumber2){
  document.querySelector("h1").innerText = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerText = " Player 2 Wins!🚩";
} else {
    document.querySelector("h1").innerText = " Draw!";
}
