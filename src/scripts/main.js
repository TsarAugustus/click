'use strict';

console.log('hiya');

let fires = 0;
let wood = 0;
let coal = 0;
let stone = 0;

function getWood() {
  console.log('Wood');
  wood++;
  document.getElementById("woodCount").innerHTML = wood;
}
function getCoal() {
  console.log('Coal');
  coal++;
  document.getElementById("coalCount").innerHTML = coal;
}
function getStone() {
  console.log('Stone');
  stone++;
  document.getElementById("stoneCount").innerHTML = stone;
}
