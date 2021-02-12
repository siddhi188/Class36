var database;
var playerCount;
var gameState=0
//objects 
var form,game,player


function setup(){
  database = firebase.database();
  createCanvas(500,500);
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
  background("white");
  
}
