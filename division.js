class Division{

    constructor(x,y,w,h){
        var options={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.w,this.h);

    }
    };

    for(var y =0; y < particles.length; y++){

        particles[y].display();
    }
    for (var z = 0; z < divisions.length;z++){
    
        divisions[z].display();

    }