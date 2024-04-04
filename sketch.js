let angle1 = 0;
let scalar = 25;
const barWidth = 20;
let lastBar = -5;

let posX = 200;
let posY = 200;
let sizeX = 100;
let sizeY = 150;

let posX2 = 300;
let posY2 = 300;
let sizeX2 = 200;
let sizeY2 = 350;


function setup() 
{
  createCanvas(600, 450);
    colorMode(HSB, width, height, 60);
}


function draw() 
{
  noStroke();
  //print(mouseX +"," + mouseY);
  
  
  
  
  //rainbow background
  
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) 
  {
    let barX = whichBar * barWidth;
    fill(barX, mouseY, 70);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
  
  
  
  
  //first line
    
  fill('rgb(23,41,23)');
  rect(0,0,120,70);
  

  fill('rgb(134,151,204)');
  rect(120,0,120,140);
  
  fill('rgb(255,215,0)');
  let ang1 = radians(angle1);
  let x1 = 140 / 2 + scalar * cos(ang1);
  ellipse(180, x1, 90, 90);
  angle1 += 2;
  //ellipse(180,70,90,90);
  
  fill('rgb(71,82,31)');
  rect(240,0,50,140);
  
  fill('rgb(20,113,145)');
  rect(290,0,100,70);
  
  fill('rgb(27,25,25)');
  rect(390,0,100,70);
  
  fill('rgb(139,76,30)');
  rect(490,0,120,70);
  
  
  
  
  // second line
  
  fill('rgb(85,107,82)');
  rect(0,70,60,120);
  
  fill('rgb(224,219,46)');
  rect(60,70,60,50);
  
  fill('black');
  rect(60,120,60,70);
  
  fill('black');
  rect(120,140,120,50);
  
  
  
  
  //random shapes
  
  fill('rgb(37,88,97)');
  rect(0,350,50,120);
  
  fill('rgb(165,187,128)');
  rect(50,300,50,100);
  
  fill('white');
  rect(360,240,100,140);
  
  fill('rgb(94,133,29)');
  rect(240,100,320,60);
 
  fill('rgb(83,180,230)');
  rect(180,330,120,90);
  
  fill('rgb(94,82,62)');
  rect(200,270,190,100);
  
  fill('rgb(46,111,45)');
  rect(400,220,140,60);
  
  fill('rgb(102,190,102)');
  rect(300,120,40,100);
  
  fill('rgb(236,111,60)');
  rect(200,190,20,80);
  
  fill('rgb(216,103,150)');
  rect(100,170,30,50);
  
  fill('rgb(42,33,94)');
  rect(500,370,100,120);
  
  fill('rgb(188,183,216)');
  rect(440,370,60,60);
  
  fill('rgb(40,189,164)');
  rect(580,200,40,100);
  
  fill('rgb(34,27,146)')
  rect(posX, posY, sizeX, sizeY);
  
  fill('rgb(169,42,0)')
  rect(posX2, posY2, sizeX2, sizeY2);

  
}

function keyReleased(){
  if(key === 'b'){
    posX = random(600);
    posY = random(450);
    sizeX = random(300);
    sizeY = random(300);
  
  }
  
  if(key === 'r'){
    posX2 = random(600);
    posY2 = random(450);
    sizeX2 = random(300);
    sizeY2 = random(300);
  
  }
}bb