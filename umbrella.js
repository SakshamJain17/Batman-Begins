class Umbrella{
    constructor(x, y){
        var options={
           isStatic: true, 
        }
    this.umbrella= Bodies.circle(x, y, 50, options);
    World.add(world, this.umbrella);
    this.image = loadImage("walking_1.png");
    this.radius = 50;    
    }
   display(){
       imageMode(CENTER);
       image(this.image, this.umbrella.position.x, this.umbrella.position.y, 350,300);
   } 
}