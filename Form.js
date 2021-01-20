class Form{
    constructor(){
    }
    display(){
        var title = createElement("h1")
        title.html("car racing game")
        title.position(130,20)
        var input =createInput("name")
        var button = createButton("play")
        var greeting = createElement("h3")
        input.position(130,180)
        button.position(250,220)
        greeting.position(130,180)
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("hello"+name)
        })
        
    }
}