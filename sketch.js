const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;
var score = 0 

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    

    Engine.update(engine);

    // write code to display time in correct format here
getBackgroundImg()

}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<07){
       bg = "sunrise1.png";
    }
    if(hour>=07 && hour<08){
        bg = "sunrise2.png";
     }
     if(hour>=08 && hour<09){
        bg = "sunrise3.png";
     }
     if(hour>=09 && hour<10){
        bg = "sunrise4.png";
     }
     if(hour>=10 && hour<11){
        bg = "sunrise5.png";
     }
     if(hour>=11 && hour<12){
        bg = "sunrise6.png";
     }
     if(hour>=12 && hour<13){
        bg = "sunrset7.png";
     }
     if(hour>=13 && hour<14){
        bg = "sunset8.png";
     }
     if(hour>=14 && hour<15){
        bg = "sunset9.png";
     }
     if(hour>=15 && hour<16){
        bg = "sunset10.png";
     }
     if(hour>=16 && hour<17){
        bg = "sunset11.png";
     }
     if(hour>=17 && hour<18){
        bg = "sunset12.png";
     }


    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
