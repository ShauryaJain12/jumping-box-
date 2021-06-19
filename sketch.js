var canvas;
var music;

function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800, 600);

    music.loop()
    box1 = createSprite(50, 550, 120, 40);
    box1.shapeColor = "blue";
    box2 = createSprite(250, 550, 120, 40);
    box2.shapeColor = "yellow"
    box3 = createSprite(450, 550, 120, 40);
    box3.shapeColor = "pink"
    box4 = createSprite(650, 550, 120, 40);
    box4.shapeColor = "purple"

    ball = createSprite(random(10,400),100, 30, 30)
    ball.shapeColor = "green";
    ball.velocityX =Math.round(random(1,5)) ;
    ball.velocityY =Math.round(random(1,10));

    edges = createEdgeSprites();
    //create box sprite and give velocity

}

function draw() {
    background("lightgrey");
    ball.bounceOff(edges);


    if (box1.isTouching(ball) && ball.bounceOff(box1)) {
        ball.shapeColor = box1.shapeColor
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;

    }
    if (box2.isTouching(ball) && ball.bounceOff(box2)) {
        ball.shapeColor = box2.shapeColor
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;

    }
    if (box3.isTouching(ball) && ball.bounceOff(box3)) {
        ball.shapeColor = box3.shapeColor;
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;

    }
    if (box4.isTouching(ball) && ball.bounceOff(box4)) {
        ball.shapeColor = box4.shapeColor
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;


    }
    drawSprites();
    //add condition to check if box touching surface and make it box
}
