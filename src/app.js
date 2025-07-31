import "bootstrap";
import "./style.css";

const cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const suits = ["diamonds","hearts","spades","clubs"];
const symbols = {diamonds:"♦",hearts:"♥",spades:"♠",clubs:"♣"};
let timerOn = false;

window.newCard = function newCard(){
  const card = document.getElementById("card");
  let face = cards[Math.floor(Math.random() * cards.length)];
  let suit = suits[Math.floor(Math.random() * suits.length)];
  card.innerHTML = `<div class="col-1 bg-white mx-2 rounded ${suit}">
                      <h1 class="row float-start mb-5">${symbols[suit]}</h1>
                      <h1 class="row justify-content-center mt-5">${face}</h1>
                      <h1 class="row mt-4 float-end bottom">${symbols[suit]}</h1>
                    </div>`;
}

window.startTimer = function startTimer(timerIsOn){
  if(timerIsOn){
    timerOn = true;
    setTimeout(() => {
        newCard();
        startTimer(timerOn);
      }, 10000);
  }
}
window.stopTimer = function stopTimer(){
  timerOn = false;
}
newCard();