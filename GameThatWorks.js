//variables
const canvasWidth = 500;
const canvasHeight = 500;
const movementSpeed = 5;
var Player;
var score;
var coin;
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
	background('gray'); 
    movePlayer ();
    checkCoinTime();
    coinGroup.collides(Player, playerHitCoin);
    displayScore ();
    

	
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
function createCoin () {
    for (i = 0; i < 10; i++) {
		coin = new Sprite(random (0, canvasHeight), random (0, canvasHeight), COINSIZE, 'd');
	    coin.color = 'yellow';
		coinGroup.add(coin);
        coin.spawntime = millis ();
	  }
      
}
function playerHitCoin(coin, Player) {

    // Delete the alien which was hit
    coin.remove();
    Player.rotationSpeed = 0;
    Player.rotation = 0;
    Score = score + 1;
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