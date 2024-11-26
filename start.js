var randomNumber1 = Math.floor(Math.random() *6) + 1;
var randomNumber2 = Math.floor(Math.random() *6) + 1;
console.log(randomNumber1);
console.log(randomNumber2);
number1= "./images/dice" + randomNumber1 + ".png";
number2= "./images/dice" + randomNumber2 + ".png";
document.querySelector("img").setAttribute("src", number1);
document.querySelectorAll("img")[1].setAttribute("src", number2);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent= "player 1 is the winner"
}
else{
    document.querySelector("h1").textContent= "player 2 is the winner"
}