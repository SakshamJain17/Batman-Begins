const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [], umbrella, maxDrops= 100, thunder1, thunder2, thunder3, thunder4;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");

}

function setup(){
    createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(350, 550);
    for(var i=0; i< maxDrops; i++){
     drops.push(new Drop(random(100,600), random(100, 400)));
    }
}

function draw(){
    background("black");    
    Engine.update(engine);
    umbrella.display();
    for(var i=0; i< maxDrops; i++){
        drops[i].display();
        drops[i].update();
       }

    rand=Math.round(random(1,4));
    if(frameCount% 80 === 0){
        thunder = createSprite(random(50,600), random(20,50), 20,20);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;

            case 2: thunder.addImage(thunder2);
            break;

            case 3: thunder.addImage(thunder3);
            break;

            case 4: thunder.addImage(thunder4);
            break;

            default: break 
        }
    }
}   

