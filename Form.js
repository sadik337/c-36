class Form{
    constructor(){

    }

    display(){
       var title=createElement('h1');
       title.html("car racing game")
       title.position(130,0);

       var input=createInput("Name")
       var button=createButton('play')
       input.position(130,160)
       button.position(250,200)

       button.mousePressed(function(){
           input.hide();
           button.hide();

        var name=input.value();
        var greeting=createElement('h3')
        greeting.html("ON FIRE"  +name)
        greeting.position(130,160);
       })
    }
}










