//variables
const canvasWidth = 500;
const canvasHeight = 500;
const movementSpeed = 5;
var Player;
var coin;
var gameState = "play";
var score = 0;
const COINSIZE = 10;
const COIN_TIMEOUT = 2000;
const PLAYERSIZE = 20;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    score = 0;
	console.log("setup: ");
	cnv = new Canvas(canvasWidth, canvasHeight);
	Player = new Sprite(100, 100, PLAYERSIZE, PLAYERSIZE, 'd');
	Player.color = 'orange';
    Player.rotationSpeed = 0;
    coinGroup = new Group();
    createCoin ();
}

/*******************************************************/
// draw()
/*******************************************************/

function draw() {
    if (gameState == "play") {
        runGame();
    }
    else if (gameState == "lose") {
        loseGame();
    }
		
}
function runGame() {
    background('gray'); 
    if (random(0,500)<5) {
        coinGroup.add(createCoin());
    }
    movePlayer ();
    for (var i = 0; i < coinGroup.length; i++) {
    console.log(coinGroup.length)
    if(checkCoinTime(coinGroup[i])) {
        coinGroup[i].remove();
        gameState = "lose";
    }
    }
    checkCoinTime();
    coinGroup.collides(Player, playerHitCoin);
    displayScore ();
   
}
function loseGame() {
 background('red');
 Player.remove();
 coinGroup.remove();
 console.log("Help");
}
function createCoin () {
    coin = new Sprite(random (0, canvasHeight), random (0, canvasHeight), COINSIZE, 'd');
    coin.color = 'yellow';
    //coinGroup.add(coin);
    coin.spawntime = millis ();
    return(coin);
  
}
function displayScore () {
    textSize(30);
    text("Score: "+ score, 0, 25);
}
function checkCoinTime () {
    //check if the coin has been around too long (COIN_TIMEOUT milliseconds)
   if (coin.spawntime + COIN_TIMEOUT < millis()){
  coin.remove()
   }
}

function playerHitCoin(coin, Player) {
    // Delete the alien which was hit
    coin.remove();
    score++
   
    Player.rotationSpeed = 0;
    Player.rotation = 0;
   
    }	

function movePlayer () {
	if (kb.pressing('a')) {

        // Set sprite's velocity to the left
        Player.vel.x = -movementSpeed;
    
    }
    
    else if (kb.pressing ('d')) 
    {
        // Set sprite's velocity to the right
        Player.vel.x = movementSpeed;	   
    
    }
    else if (kb.pressing ('w')) 
        {
            // Set sprite's velocity to the left
            Player.vel.y = -movementSpeed;	   
        
        }
    else if (kb.pressing ('s')) 
        {
            
                Player.vel.y = movementSpeed;	   
            
        };
    
    if (kb.released('a')) {
    
        // Set sprite's velocity to zero
        Player.vel.x = 0;
    
    }
    
    else if (kb.released('d')) 
    {
        // Set sprite's velocity to zero
        Player.vel.x = 0;
    }
    else if (kb.released('w')) 
        {
            // Set sprite's velocity to zero
            Player.vel.y = 0;
        }
    
    else if (kb.released('s')) 
            {
                // Set sprite's velocity to zero
                Player.vel.y = 0;
            };
}

/*******************************************************/
//  END OF APP
/*******************************************************/