var bookClosed, bookClosedImage, bookOpen, bookOpenImage, book, closeButton, buttonUnpressed, buttonPressed;
var introText;
var scout, scoutC;
var ropeButton, ropeButtonI, cloveHitch, cloveHitchI, squareKnot, squareKnotI, tautlineHitch, tautlineHitchI, ropeQuestion;
var nextButton1, nextButton1I;
var PMC, PMCI, PMI1, PMI1I, PMI2, PMI2I, PMQ;
var gameState = 1;
function preload()
{
  bookClosedImage = loadImage("IntroImages/bookClosed.png");
  bookOpenImage = loadImage("IntroImages/bookOpen.png");
  buttonUnpressed = loadImage("IntroImages/buttonUnpressed.png");
  buttonPressed = loadImage("IntroImages/buttonPressed.png");
  scoutC = loadImage("scoutImage.png");
  ropeButtonI = loadImage("imagesL1/ropeButton.png");
  cloveHitchI = loadImage("imagesl1/CloveHitch.png");
  squareKnotI = loadImage("imagesl1/SquareKnot.png");
  tautlineHitchI = loadImage("imagesl1/TautlineHitch.gif");
  nextButton1I = loadImage("IntroImages/buttonPressed.png");
  PMCI = loadImage("imagesL2/patrolMethodCorrect.png");
  PMI1I = loadImage("imagesL2/patrolMethodIncorrect1.png");
  PMI2I = loadImage("imagesL2/patrolMethodIncorrect2.png");
}
function setup() {
  createCanvas(1600,1600);
  book = createSprite(800, 800, 100, 100);
  book.addImage(bookClosedImage);
  scout = createSprite(800, 800, 50, 50);
  scout.addImage("scoutCharacter", scoutC);
  book.scale = 5;
  closeButton = createSprite(1170, 1000, 200, 100);
  closeButton.addImage("Unpressed", buttonUnpressed);
  closeButton.addImage("pressed", buttonPressed);
  closeButton.scale = 2;
  closeButton.visible = false;
  scout.visible = false;
  introText = createElement("h1");
  ropeQuestion = createElement("h1")
  PMQ = createElement("h1");
  ropeButton = createSprite(1200, 200, 50, 50);
  ropeButton.addImage("button", ropeButtonI);
  ropeButton.scale = 5;
  ropeButton.visible = false;
  cloveHitch = createSprite(400, 1200, 50, 50);
  squareKnot = createSprite(800, 1200, 50, 50);
  tautlineHitch = createSprite(1200, 1200, 50, 50);
  cloveHitch.addImage("cloveHitchI", cloveHitchI);
  cloveHitch.scale = 0.7
  squareKnot.addImage("squareKnotI", squareKnotI);
  squareKnot.scale = 0.4
  tautlineHitch.addImage("tautlineHitchI", tautlineHitchI);
  cloveHitch.visible = false;
  squareKnot.visible = false;
  tautlineHitch.visible = false;
  nextButton1 = createSprite(400, 400, 50, 50);
  nextButton1.addImage("nextbuttonimage", nextButton1I);
  nextButton1.scale = 5;
  nextButton1.visible = false;
  PMC = createSprite(300, 1200, 50, 50);
  PMI1 = createSprite(800, 1200, 50, 50);  
  PMI2 = createSprite(1300, 1200, 50, 50);
  PMC.addImage("PMC", PMCI);
  PMI1.addImage("PMI1", PMI1I);
  PMI2.addImage("PMI2", PMI2I);
  PMC.visible = false;
  PMI1.visible = false;
  PMI2.visible = false;

}

function draw() {
  background("Olive"); 
  drawSprites();

  if(mousePressedOver(book))
  {
    gameState = 2;
  } 
  if(gameState == 2)
  {
    book.addImage(bookOpenImage);
    book.scale = 2;
    textSize(20);
    textFont("timesNewRoman");
    introText.html("This game represents the<br/>"+ 
    "different ranks in scouting. You <br/>"+
    "will be given tasks that you need<br/>" +
    "to complete in order to progress<br/>"+
    "through the game. The seven<br/>"+
    "levels or ranks that you will be<br/>" + 
    "completing are Scout, Tenderfoot, <br/>"+
    "Second Class, First Class, Star,<br/>" +
    "Life and Eagle. Good luck on<br/>"+
    " your scouting journey.<br/>");
    introText.position(325, 550);
    closeButton.visible = true;
    
    if(mousePressedOver(closeButton))
    {
      closeButton.changeImage("pressed");
      gameState = 3;
    }
  }


  if(gameState === 3)
  {
    introText.hide();
    book.remove();
    closeButton.remove();
    gameState = 4;
  }

  if(keyDown("down"))
  {
    scout.y = scout.y+50;
  }   

  if(keyDown("up"))
  {
    scout.y = scout.y-50;
  }

  if(keyDown("left"))
  {
    scout.x = scout.x-50;
  }

  if(keyDown("right"))
  {
    scout.x = scout.x+50;
  }

  if(gameState === 4)
  {
    scout.visible = true;
    ropeButton.visible = true;
    if(scout.isTouching(ropeButton))
    {
      ropeQuestion.position(450, 800, 50, 50);
      ropeQuestion.html("Which one of these knots is a Square Knot?");
      cloveHitch.visible = true;
      squareKnot.visible = true;
      tautlineHitch.visible = true;
      
    }
    if(scout.isTouching(squareKnot))
      {
        cloveHitch.remove();
        squareKnot.remove();
        tautlineHitch.remove();
        ropeQuestion.html("Good Job!");
        ropeButton.remove();
        nextButton1.visible = true;
      }
      else if(scout.isTouching(cloveHitch)||scout.isTouching(tautlineHitch))
      {
        ropeQuestion.html("Nope, try again.");
      }

      if(scout.isTouching(nextButton1))
      {
        gameState = 5;
      }
  }

  if(gameState === 5)
  {
    ropeQuestion.remove();
    nextButton1.remove();
    PMC.visible = true;
    PMI1.visible = true;
    PMI2.visible = true;
    PMQ.position(450, 800, 50, 50);
    PMQ.html("What is the correct way to wash your dishes after a meal?")
    if(scout.isTouching(PMC))
    {
      PMI1.remove();
      PMI2.remove();

    }
  }

}
