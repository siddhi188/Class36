class Game{
    constructor(){
        
    }
    getState(){
     var gameStateRef = database.ref('gameState');
     gameStateRef.on("value", function (data){
         gameState = data.val();
     })
    }
//update(1) gameState
    update(state){
      database.ref('/').update({
        gameState: state
      })
    }

    start(){
      if(gameState===0){
      player = new Player();
      //written soon
      player.getCount();
      form = new Form();
      form.display()
      }  
    }
}