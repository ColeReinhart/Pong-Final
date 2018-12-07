// CREATE A BOARD/PLAYING AREA
// MAKE A POINT SYSTEM
// HAVE A WAY FOR PLAYERS TO MOVE THEIR OBJECT
// HAVE A WINNER
// ANIMATE THE BALL
// MOVE OBJECTS ON COMMAND
// RESET THE GAME
// HAVE TWO PLAYERS

/*  1. List all user stories
    2. Estimate (12358)
    3. prioritize (order, MVP*,)
    4. kanban(back-log, in progress, review, done)




    /* USER STORIES

    1. as a user i want to be able to see all the objects (paddles, and play square)
    2. As a user i want to be able to keep score automatically
    3. As a user i want the game to end after 10 points
    4. As a user i want to be able to restart my game at anytime
    5. as a user i want to see who the winner is
    6. As a user i want the ball to be animated
    7. as a user i want to be able to move my paddle
    8. as a user i want to be able to have to players on the same keyboard
    9. as a user i want a start screen with instructions
    */
let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d");
let x = canvas.width / 2; //starts ball in center of screen
let y = canvas.height - 200;
let rX = canvas.height / 2;
let positionY = 2;
let positionX = 5;
let ballSize = 10;
let paddleWidth = 10;
let paddleHeight = 75;
let paddleX = 15;
let paddleY = 100;
let paddleDown = false;
let paddleUp = false;
let rPaddleWidth = 10;
let rPaddleHeight = 75;
let rPaddleX = 785;
let rPaddleY = 150;
let rPaddleUp = false;
let rPaddleDown = false;
let lineWidth = 2;
let lineHeight = 400;
let paddleC = (canvas.height - paddleHeight) / 2;
let rPaddleC = (canvas.height - rPaddleHeight) / 2;
ctx.canvas.setAttribute('tabindex', '0'); //click on window to activate keypress
ctx.canvas.focus(); //auto loads tabindex, no click needed
let score1 = 0;
let score2 = 0;
ctx.canvas.onkeydown = function(evt) { //keybindings to move paddle while key is pressed
  if (event.keyCode == 87) {
    paddleUp = true;
  }
  if (event.keyCode == 83) {
    paddleDown = true;
  }
  if (event.keyCode == 38) {
    rPaddleUp = true;
  }
  if (event.keyCode == 40) {
    rPaddleDown = true;
  }
};
ctx.canvas.onkeyup = function(evt) { //keybindings to stop moving paddles when key is not pressed
  if (event.keyCode == 87) {
    paddleUp = false;
  }
  if (event.keyCode == 83) {
    paddleDown = false;
  }
  if (event.keyCode == 38) {
    rPaddleUp = false;
  }
  if (event.keyCode == 40) {
    rPaddleDown = false;
  }
};
const drawLine = () => {
  ctx.beginPath();
  ctx.fillRect(400, 0, lineWidth, lineHeight);
  ctx.closePath();
}

const drawPong = () => {

  ctx.beginPath();
  ctx.arc(x, y, ballSize, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
};

const leftPaddle = () => { //create's paddle on left side of screen
  ctx.save();
  ctx.translate(paddleX, paddleY);
  ctx.fillRect(-5, 0, paddleWidth, paddleHeight);
  ctx.restore();
  if (paddleUp && paddleY > canvas.height - (paddleHeight) * 6 + 50) {
    paddleY = paddleY - 5;
  }
  if (paddleDown && paddleY < canvas.height - paddleHeight) {
    paddleY = paddleY + 5;
  }
};

const rightPaddle = () => {
  ctx.save();
  ctx.translate(rPaddleX, rPaddleY);
  ctx.fillRect(-5, 0, rPaddleWidth, rPaddleHeight);
  ctx.restore();
  if (rPaddleUp && rPaddleY > canvas.height - (rPaddleHeight) * 6 + 50) {
    rPaddleY = rPaddleY - 5;
  }
  if (rPaddleDown && rPaddleY < canvas.height - rPaddleHeight) {
    rPaddleY = rPaddleY + 5;
  }
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  leftPaddle();
  rightPaddle();
  drawPong();
  drawLine();
  
let child = document.getElementById("two")
  if (x + positionX > canvas.width - ballSize){//right
    positionX = -positionX;
    score2++;
    createScorePTwo();
    if(score2 === 10){
      alert("Left wins!")
    };
  } 



  if(x + positionX < ballSize) { //left
    positionX = -positionX;
    score1++;
    createScorePOne();
    if(score1 === 10){
      alert("Right wins!")
    };
  }

  if (y + positionY < ballSize) { //top wall
    positionY = -positionY;

  }

  if (y + positionY > canvas.height - ballSize) { //bottom wall
    positionY = -positionY;
  }

  else if (x + positionX < 25) { // left wall
    if (400-y < canvas.height - paddleY && 400-y > (canvas.height - paddleY)-paddleHeight) { // positionY < rPaddleY
       positionX = -positionX;
    }else if (x + positionX <  - 30)
    alert("end game")
}

  else if (x + positionX > 775) { //right wall
    if (400-y < canvas.height-rPaddleY && 400-y > (canvas.height -rPaddleY)-paddleHeight) { // positionY < rPaddleY
       positionX = -positionX;
    }else if (x + positionX > canvas.width + 30)
    alert("end game")
}

  /*if (x + positionX < ballSize) { //left wall
    positionX = -positionX;
  }*/

  x += positionX;
  y += positionY;
};


const createScorePOne = () =>{
  const div = document.querySelector("#div1");
  const newContent = document.createTextNode(score1);
  div.innerHTML = "";
  div.appendChild(newContent);
}


const createScorePTwo = () =>{
  const div = document.querySelector("#div2");
  const newContent = document.createTextNode(score2);
  div.innerHTML = "";
  div.appendChild(newContent);
}
setInterval(draw, 25);

