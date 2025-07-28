import "bootstrap";
import "./style.css";

window.onload = function() {
 newCard();
};

function newCard(){
  const card = document.getElementById("newCard");
  let suit = getSuit();
  
  card.innerHTML = `<h1 class="row float-start mb-5">${suit}</h1>
                    <h1 class="row justify-content-center mt-5">${getFace()}</h1>
                    <h1 class="row mt-4 float-end">${suit}</h1>`;
}

function getSuit(){
  const suits = ["♦","♥","♠","♣"]
  let index = Math.floor(Math.random() * 4);
  return suits[index];
}

function getFace(){
  const cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let index = Math.floor(Math.random() * 13);
  return cards[index];
}
