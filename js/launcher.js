class Launcher{
    constructor(myBodyA, myPointB){
        var options={
			bodyA: myBodyA,
            pointB: myPointB,
            stiffness: 0.01,
            length: 10   
        } 	
        this.pointB = myPointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;    
    }

    attach(myBodyA){
        this.launcher.bodyA = myBodyA;
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y, pointB.x, pointB.y);
        }
    }
}