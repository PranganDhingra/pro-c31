class Plinko{

    constructor(x,y,w,h){
        var options={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,this.r,options);
        this.r = r;
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.r);

    }
    };

    for(var j =0; j < particles.length; j++){

        particles[j].display();
    }
    for (var k = 0; k < divisions.length;k++){
    
        divisions[k].display();

    }

