// I needed some random numbers so rather than doing this over and over I made a function.
var getNum = function(min, max) {
  var number = Math.floor((Math.random() * (min, max) + min));
  return number;
}


//   Enemies our player must avoid
var Enemy = function(x, y) {
    //  need a list of possible rows
    // this.row = [60,145,220,310]
    // I needed a way to get the row 
    // this.rowSelect = getNum(4)
    // this.x = 0;
    //each enemy picks a row at random.
    // this.y = this.row[this.rowSelect]
    this.x = x;
    this.y = y;
    this.speed = getNum(50, 300);
    this.size = 30
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * dt;
    if (this.x > 555) {
        this.x = -45;
    }

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    }

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

var allEnemies = [new Enemy(-45,60), new Enemy(-45,226), new Enemy(-45,309), new Enemy(-45,392)];

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// Enemies our player must avoid
var player = function() {
    this.x = 202;
    this.y = 475;
    this.size = 25;
    this.sprite = 'images/char-boy.png';
}


 player.prototype.update = function(x, y) {
   console.log(this.x, this.y);
}
 

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

// Draw the enemy on the screen, required method for game
player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

player.prototype.handleInput = function(key) {
    switch(key) {
        case 'space':
            break;
        case 'left':
            if (this.x - 100 >= 0 ) {
                this.x = this.x - 100;
            }
            break;
        case 'right':
            if(this.x + 100 <= 500) {
                this.x = this.x + 100;
            }
            break;
        case 'up':
            if(this.y - 40 >= 0 ) {
              this.y = this.y - 83;
            }
            break;
        case 'down':
            if(this.y + 83 <= 550) {
                this.y = this.y + 83;
            }
            break;
    }
}


var player = new player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'space'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


function checkCollisions() {   
      allEnemies.forEach(function(enemy) {
      console.log("player " + player.x + " " + player.y + " enemy " + enemy.x + enemy.y )
      if (player.x < enemy.x + enemy.size &&
        player.x + player.size > enemy.x &&
        player.y < enemy.y + enemy.size &&
        player.size + player.y > enemy.y){
        console.log("he's dead Jim")
        }
    });
}