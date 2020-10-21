class Rope{
    constructor(A,B, P1, P2){
        this.offsetX=P1
        this.offsetY=P2
        var options ={
            bodyA: A,
            bodyB: B,
            pointB: {x:P1, y:P2},
        }


        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
    if (this.rope.bodyA){
        var posA=this.rope.bodyA.position
        var posB=this.rope.bodyB.position
        var a1x =posA.x
        var a1y =posA.y
        var a2x =posB.x
        var a2y =posB.y
        strokeWeight(2);
        line(a1x,a1y,a2x+this.offsetX,a2y+this.offsetY)
    }
    }


}