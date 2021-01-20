var database
var form,game,player;
var gamestate=0;
var playerCount;
function setup(){
  database = firebase.database();
  createCanvas(500,500);
game = new Game();
game.getstate();
game.start();
  
}

function draw(){
  background("white");
  
}