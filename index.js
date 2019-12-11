var game = new Phaser.Game(600, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image("base", "assets/base.png");
    game.load.image("topDoor", "assets/top door.png");
    game.load.image("purpleDoor", "assets/right door.png");
    game.load.image("greenDoor", "assets/left door.png");
    game.load.spritesheet("girl", "assets/girl.png", 32, 32);

}

var cursors;
var doorsLevel1;
door1Crossed = false;

function create() {

    backgroundSprite = game.add.sprite (50 , 50, "base");
    playerSprite = game.add.sprite(290, 290, "girl");

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable(playerSprite);
    


    //controlling animations
    playerSprite.animations.add("down", [0, 1, 2], 10, true);
    playerSprite.animations.add("left", [3, 4, 5], 10, true);
    playerSprite.animations.add("right", [6, 7, 8], 10, true);
    playerSprite.animations.add("up", [9, 10, 11], 10, true);

    //adding level1 door locations
    doorsLevel1 = game.add.group();
        var topDoorSprite = game.add.sprite(70, 50, "topDoor");
        var leftDoorSprite = game.add.sprite(50, 100, "greenDoor");
        var rightDoorSprite = game.add.sprite(50, 70, "purpleDoor");
    doorsLevel1.add(topDoorSprite, leftDoorSprite, rightDoorSprite);     

    //adding physics to non-moving bodies
    // doorsLevel1.enableBody = true;
    // backgroundSprite.enableBody = true;
    // leftDoorSprite.body.immovable = true;
    // rightDoorSprite.body.immovable = true;
    // topDoorSprite.body.immovable = true;
    // backgroundSprite.body.immovable = true;


    //controlling changing levels
    do {
        doorsLevel1.visible = true;       
    } while(level1Done = false);
}

function update() {
    cursors = game.input.keyboard.createCursorKeys();
    // //reset velocity
    playerSprite.body.velocity.x = 0;
    playerSprite.body.velocity.y = 0;

    //MOVING IS DONE
    if (cursors.left.isDown)
    {
        //  Move to the left
        playerSprite.body.velocity.x = -150;

        playerSprite.animations.play("left");
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        playerSprite.body.velocity.x = 150;

        playerSprite.animations.play("right");
    }
    else if (cursors.down.isDown)
    {
        //  Move to the down
        playerSprite.body.velocity.y = 150;

        playerSprite.animations.play("down");
    }
    else if (cursors.up.isDown)
    {
        //  Move to the up
        playerSprite.body.velocity.y = -150;

        playerSprite.animations.play("up");
    }        
    else
    {
        //  Stand still
        playerSprite.animations.stop();

        playerSprite.frame = 2;
    }
    //if (door1Crossed = true) {
//      level1Done = true;
    //}
}