//Upload your infographic
//Add shapes and color to create a button
//When choosing icons, think about what message you are conveying to someone
//Icons: Answering questions, click me, touch me, surprise message, etc. 
//Animate an element of your infographic

//For best button experience
//Create button functions, create a boolean that switches in the mousePressed function

//Variable for Images
let infographic;
let arrow;
let potato;

//Boolean for potato to animate
let potatoShowing = false;

//Variable for rotating animation
let r = 0;

//Must preload images
function preload() {
  infographic = loadImage("infographic.png");
  arrow = loadImage("arrow.png");
  potato = loadImage("potato.png");
}

function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(800, 2000); //same as image

  imageMode(CENTER);
  
  //This is how you resize your images
  infographic.resize(0, height); //0 to keep scale
  arrow.resize(35, 0); 
  potato.resize(100, 100); 

  //Background image needs to be in setup function for events to happen
  image(infographic, width / 2, height / 2);
}

function draw() {
  
  
  //GREEN BUTTON ----------------------------------------------
  noStroke();
  fill("#B1C6BD"); //hex code: hexadecimal way to express rgb
  circle(150, 244, 50); //width, height, size
  image(arrow, 150, 244);

  //RED BUTTON ----------------------------------------------
  fill("#EFA593");
  noStroke();
  circle(650, 244, 50); //width, height, size
  image(arrow, 650, 244);
  
  

  //DRAW A MOVING POTATO-----------------------------------------
  //Need to redraw buttons and background to make this work
  if (potatoShowing == true) {
    push();
    
    image(infographic, width / 2, height / 2);
    
    //GREEN BUTTON ----------------------------------------------
    noStroke();
    fill("#B1C6BD"); //hex code: hexadecimal way to express rgb
    circle(150, 244, 50); //width, height, size
    image(arrow, 150, 244);

    //RED BUTTON ----------------------------------------------
    fill("#EFA593");
    noStroke();
    circle(650, 244, 50); //width, height, size
    image(arrow, 650, 244);
    
    //POTATO --------------------------------------------
    translate(703, 141);
    rotate(radians(r));
    image(potato, 0, 0); //Need to change xy to 0 when translating!
    //Make animation move
    r += 1;
    pop();
  }
  
}

//CREATE A LINK/BUTTON INTERACTION  ------------------------------

function mousePressed() {
  //LINK ---------------------------------------

  if (mouseY >= 1873 && mouseY <= 1891 && mouseX >= 191 && mouseX <= 613) {
    //range accounting for text length
    window.open("http://informationisbeautiful.net/beautifulnews/");
  }

  //GREEN BUTTON INTERACTION ------------------------------------------

  if (mouseY >= 216 && mouseY <= 270 && mouseX >= 124 && mouseX <= 174) {
    fill(0, 100); //Added transparency
    textSize(50);
    textStyle(BOLD);
    text("Add Animation!", 50, 200);
    //Shadow
    fill("#EFA593");
    text("Add Animation!", 52, 202);
  }

  if (mouseY >= 216 && mouseY <= 270 && mouseX >= 620 && mouseX <= 675) {
    //Must create a boolean and toggle the state of the potato
    potatoShowing = !potatoShowing;
  }

  //Click your mouse in the canvas to find coordinates
  console.log(mouseX, mouseY);

  //fix for phone, needs to be at end of function
  return false;
}

function mouseReleased() {
  //Redraws the background
  image(infographic, width / 2, height / 2);
}
