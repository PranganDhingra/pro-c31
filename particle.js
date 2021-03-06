class Particle{
    constructor(x,y,r){
        var options={
            restitution:0.4
        }

       this.r=r;

       this.body=Bodies.circle(x,y,this.r,options);
       this.color=color(random(0,255),random(0,255),random(0,255));
       World.add(world,this.body);

    }

    display(){
        var pose = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        pop();

    }
};

if(frameCount%60===0){
    particles.push(newParticle(random(width/2-10,width/2+10),10,10));
}

for(var p =0; p < particles.length; p++){

    particles[p].display();
}
for (var l = 0; l < divisions.length;l++){

    divisions[l].display();

}