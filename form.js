class Form{
    constructor(){

    }
    //p5.DOM
    //createInput('name')
    //createButton('play')
    //createElement('h2') == greeting
    display(){
    var title = createElement('h1');
    title.html("CAR RACING ")
    title.position(550,0)

    var input = createInput('Name')
    input.position(550,200)

    var button = createButton('play')
    button.position(600,230)

    var greeting = createElement('h2') 
    
    button.mousePressed(function (){
        input.hide();
        button.hide()

        var name = input.value();
        playerCount++
        player.update(name)
        player.updateCount(playerCount);

        greeting.html("Hello! " +name )
        greeting.position(500,350)
    })
    }
}