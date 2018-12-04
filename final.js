// PONG:
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
     let x = canvas.width/2;
     let y = canvas.height-30;
     let positionY = 9;
     let positionX = 5;
     let ballSize = 10;
     let paddleWidth = 10;
     let paddleHeight = 75;
     let paddleX = 15;
     let paddleY = 100;
     let paddleDown = false;
     let paddleUp = false;
     ctx.canvas.setAttribute('tabindex', '0'); //click on window to activate keypress
     ctx.canvas.focus(); //auto loads tabindex, no click needed

     ctx.canvas.onkeydown = function(evt){ //keybindings to move paddle while key is pressed
       if(event.keyCode == 38) {
         paddleUp = true;
       }
       if(event.keyCode == 40) {
         paddleDown = true;
       }
     }
     ctx.canvas.onkeyup = function(evt){ //keybindings to stop moving paddles when key is not pressed
       if(event.keyCode == 38) {
         paddleUp = false;
       }
       if(event.keyCode == 40) {
         paddleDown = false;
       }
     }


     const drawPong = () => {

         ctx.beginPath();
         ctx.arc(x, y, ballSize, 0, Math.PI*2);
         ctx.fillStyle = "white";
         ctx.fill();
         ctx.closePath();
     };

     const collision = () => {



     }

     const drawPaddle = () => { //create's paddle on left side of screen
       ctx.save();
       ctx.translate(paddleX, paddleY);
       ctx.fillRect(-5, 50, paddleWidth, paddleHeight);
       ctx.restore();
       if(paddleUp){
         paddleY = paddleY - 5;
       }
       if(paddleDown){
         paddleY = paddleY + 5;
       }
     }

     const draw = () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       drawPaddle();
       drawPong();
       collision();


       if(x+positionX > canvas.width-ballSize || x + positionX < ballSize){ //left and right
        positionX = -positionX;
    }

    if(y + positionY < ballSize) { //top
        positionY = -positionY;

    }
     if(y + positionY > canvas.height-ballSize) { //bottom
         positionY = -positionY;
        }
        x += positionX;
        y += positionY;
    };
     setInterval(draw, 25);


     module.exports ={
      drawPong,
     };
