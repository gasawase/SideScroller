var game = new Phaser.Game(600, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image("base", "assets/base.png");

    game.load.image("topDoor", "assets/top door.png");
    game.load.image("purpleDoor", "assets/right door.png");
    game.load.image("greenDoor", "assets/left door.png");

    game.load.spritesheet("girl", "assets/girl.png", 32, 32);

    game.load.image("decision1", "assets/decision 1.png");
    game.load.image("decision2", "assets/decision 2.png");
    game.load.image("decision3", "assets/decision 3.png");
    game.load.image("decision4", "assets/decision 4.png");

    game.load.image("goodEnding1", "assets/good ending 1.png");
    game.load.image("goodEnding2", "assets/good ending 2.png");
    game.load.image("badEnding1", "assets/bad ending 1.png");
    game.load.image("badEnding2", "assets/bad ending 2.png");
}

var cursors;
var doorsLevel1;
var doorsLevel2;
var doorsLevel3;
var doorsLevel4;
door1Crossed = false;

function create() {

    backgroundSprite = game.add.sprite (50 , 50, "base");
    playerSprite = game.add.sprite(290, 290, "girl");

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.setBounds(80, 80, 430, 418); //left most, top most, right most, bottom most
    game.physics.arcade.enable(playerSprite);
    playerSprite.body.collideWorldBounds = true;
    
    //controlling animations
    playerSprite.animations.add("down", [0, 1, 2], 10, true);
    playerSprite.animations.add("left", [3, 4, 5], 10, true);
    playerSprite.animations.add("right", [6, 7, 8], 10, true);
    playerSprite.animations.add("up", [9, 10, 11], 10, true);

    level1();
    level2();
    level3();
    level4();

    //controlling changing levels
    // do {
    //     doorsLevel1.visible = true;       
    // } while(level1Done = false);
}

///////add if statements that change which level it is based on boolean

function update() {
    movePlayer();
    // var crossDoor = game.physics.arcade.collide(playerSprite, doors);
    doorsLevel1.visible = false;
    doorsLevel2.visible = false;
    // doorsLevel3.visible = false;
    doorsLevel4.visible = false;
    game.physics.arcade.overlap(playerSprite, doorsLevel1, changeLevel, null, this);
    
    //if (door1Crossed = true) {
//      level1Done = true;
    //}
}

function level1 () {
    doorsLevel1 = game.add.group();
    var topDoorSprite1 = game.add.sprite(300, 66, "topDoor");
    var leftDoorSprite1 = game.add.sprite(66, 300, "greenDoor");
    var rightDoorSprite1 = game.add.sprite(498, 200, "purpleDoor");
    doorsLevel1.add(topDoorSprite1);
    doorsLevel1.enableBody = true;
    doorsLevel1.add(leftDoorSprite1);
    doorsLevel1.add(rightDoorSprite1); 

    decision1 = game.add.sprite(20, 5, "decision1");
    
    // var crossDoor = game.physics.arcade.collide(playerSprite, doorsLevel1);
}

function level2 () {
    doorsLevel2 = game.add.group();
    var leftDoorSprite2 = game.add.sprite(498, 250, "greenDoor");
    var rightDoorSprite2 = game.add.sprite(66, 250, "purpleDoor");
    doorsLevel2.add(leftDoorSprite2);
    doorsLevel2.add(rightDoorSprite2);
    
}

function level3 () {
    doorsLevel3 = game.add.group();
    var topDoorSprite3 = game.add.sprite(330, 66, "topDoor");
    var leftDoorSprite3 = game.add.sprite(66, 280, "greenDoor");
    doorsLevel3.add(topDoorSprite3);
    doorsLevel3.add(leftDoorSprite3);
}

function level4 () {
    doorsLevel4 = game.add.group();
    var topDoorSprite4 = game.add.sprite(20, 50, "topDoor");
    doorsLevel4.add(topDoorSprite4);

}

function movePlayer () {
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
}

function changeLevel () {

    console.log("this works");
}