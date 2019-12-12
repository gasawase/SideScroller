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
    game.load.image("neutralEnding", "assets/neutral ending.png");
    game.load.image("badEnding2", "assets/bad ending 2.png");
}

var cursors;

var topDoorSprite1;
var topDoorSprite3;
var topDoorSprite4;

var leftDoorSprite1;
var leftDoorSprite2;
var leftDoorSprite3;

var rightDoorSprite1;
var rightDoorSprite2;

var goodEndAdd = 0;
var badEndAdd = 0;
var neutralEndAdd = 0;

var top1Bool;
var right1Bool;

function create() {


    backgroundSprite = game.add.sprite (50 , 50, "base");
    playerSprite = game.add.sprite(290, 290, "girl");

    //add door groups
    doorsLevel1 = game.add.group();
    // doorsLevel3 = game.add.group();
    // doorsLevel4 = game.add.group();

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.setBounds(80, 80, 430, 418); //left most, top most, right most, bottom most
    game.physics.arcade.enable(playerSprite);
    playerSprite.body.collideWorldBounds = true;
    
    //controlling animations
    playerSprite.animations.add("down", [0, 1, 2], 10, true);
    playerSprite.animations.add("left", [3, 4, 5], 10, true);
    playerSprite.animations.add("right", [6, 7, 8], 10, true);
    playerSprite.animations.add("up", [9, 10, 11], 10, true);

    showLev1();
}


function update() {

    movePlayer();
    overlappedDoors();
}

function overlappedDoors () {//tests to see if overlapped
    //Level 1
    // var top1Bool = false;
    var right1Bool = false;
    var left1Bool = false;
    // if ((game.physics.arcade.overlap(playerSprite, topDoorSprite1, changeLevel2, null, this)) = true) {
    //     console.log("kill me pleaase");
    // }
    top1Bool = game.physics.arcade.overlap(playerSprite, topDoorSprite1, changeLevel2, null, this);
    right1Bool = game.physics.arcade.overlap(playerSprite, rightDoorSprite1, changeLevel2, null, this);
    left1Bool = game.physics.arcade.overlap(playerSprite, leftDoorSprite1, changeLevel2, null, this);

    //Level 2
    var right2Bool = false;
    var left2Bool = false;
    right2Bool = game.physics.arcade.overlap(playerSprite, rightDoorSprite2, changeLevel3, null, this);
    left2Bool = game.physics.arcade.overlap(playerSprite, leftDoorSprite2, changeLevel3, null, this);

    //Level 3
    var left3Bool = false;
    var top3Bool = false;
    left3Bool = game.physics.arcade.overlap(playerSprite, leftDoorSprite3, changeLevel4, null, this);
    top3Bool = game.physics.arcade.overlap(playerSprite, topDoorSprite3, changeLevel4, null, this);

    //Level 4
    var top4Bool = false;
    top4Bool = game.physics.arcade.overlap(playerSprite, topDoorSprite4, showEnding, null, this);
}

function showLev1 () {
    console.log(badEndAdd);
    console.log(goodEndAdd);
    console.log(neutralEndAdd);
    level1Stage();

    decision1 = game.add.sprite(20, 5, "decision1");
}

function showLev2 () {
    topDoorSprite1.kill();
    rightDoorSprite1.kill();
    leftDoorSprite1.kill();
    decision1.kill();

    playerSprite.x = 290;
    playerSprite.y = 290;
    level2Stage();

    decision2 = game.add.sprite(20, 5, "decision2");
}

function showLev3 () {
    rightDoorSprite2.kill();
    leftDoorSprite2.kill();
    decision2.kill();

    playerSprite.x = 290;
    playerSprite.y = 290;

    level3Stage();

    decision3 = game.add.sprite(20, 5, "decision3");
}

function showLev4 () {
    leftDoorSprite3.kill();
    topDoorSprite3.kill();
    decision3.kill();

    playerSprite.x = 290;
    playerSprite.y = 290;

    level4Stage();

    decision4 = game.add.sprite(20, 5, "decision4");
}

function level1Stage () {
    topDoorSprite1 = game.add.sprite(300, 66, "topDoor");
    leftDoorSprite1 = game.add.sprite(66, 400, "greenDoor");
    rightDoorSprite1 = game.add.sprite(498, 200, "purpleDoor");
    // doorsLevel1.enableBody = true;
    topDoorSprite1.enableBody = true;
    leftDoorSprite1.enableBody = true;
    rightDoorSprite1.enableBody = true;
    doorsLevel1.add(leftDoorSprite1);
    doorsLevel1.add(rightDoorSprite1); 
    doorsLevel1.add(topDoorSprite1);

    // decision1 = game.add.sprite(20, 5, "decision1");

    game.physics.arcade.enable(doorsLevel1);
    
}

function level2Stage () {
    leftDoorSprite2 = game.add.sprite(498, 250, "greenDoor");
    rightDoorSprite2 = game.add.sprite(66, 250, "purpleDoor");
    leftDoorSprite2.enableBody = true;
    rightDoorSprite2.enableBody = true;
    doorsLevel2.add(leftDoorSprite2);
    doorsLevel2.add(rightDoorSprite2);

    game.physics.arcade.enable(doorsLevel2);
}

function level3Stage () {
    topDoorSprite3 = game.add.sprite(330, 66, "topDoor");
    leftDoorSprite3 = game.add.sprite(66, 130, "greenDoor");
    topDoorSprite3.enableBody = true;
    leftDoorSprite3.enableBody = true;
    doorsLevel3.add(topDoorSprite3);
    doorsLevel3.add(leftDoorSprite3);

    game.physics.arcade.enable(doorsLevel3);
}

function level4Stage () {
    topDoorSprite4 = game.add.sprite(200, 66, "topDoor");
    doorsLevel4.add(topDoorSprite4);
    topDoorSprite4.enableBody = true;

    game.physics.arcade.enable(doorsLevel4);
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

function changeLevel2 () {
    console.log(top1Bool);
    // console.log(right2Bool);
    console.log(right1Bool);
    console.log(badEndAdd);
    console.log(goodEndAdd);
    console.log(neutralEndAdd);
    doorsLevel2 = game.add.group();
    playerSprite.x = 290;
    playerSprite.y = 290;
    ///Checking Level 1 Totals
    if (top1Bool = false) {
        badEndAdd += 1;
    }
    else if (right1Bool = true) {
        goodEndAdd += 1;
    }
    else if (left1Bool = true) {
        neutralEndAdd += 1;
    }
    showLev2();
}

function changeLevel3 () {
    console.log(badEndAdd);
    console.log(goodEndAdd);
    console.log(neutralEndAdd);
    doorsLevel3 = game.add.group();
    //Checking Level 2 Totals
    if (right2Bool = true) {
        goodEndAdd += 1;
    }
    else if (left2Bool = true) {
        badEndAdd += 1;
    }
    showLev3();
}

function changeLevel4 () {
    console.log(badEndAdd);
    console.log(goodEndAdd);
    console.log(neutralEndAdd);
    doorsLevel4 = game.add.group();
    //Checking Level 3 Totals
    if (left3Bool = true) {
        badEndAdd += 1
    }
    else if (top3Bool = true) {
        goodEndAdd += 1;
    }
    showLev4();
}

function showEnding () {
    backgroundSprite.kill();
    decision4.kill();
    topDoorSprite4.kill();
    playerSprite.kill();

    console.log(badEndAdd);
    console.log(goodEndAdd);
    console.log(neutralEndAdd);
    if (badEndAdd >= 2) {
        badEnding = game.add.sprite(0, 0, "badEnding2");
    }
    else if (goodEndAdd >= 2) {
        goodEnding = game.add.sprite(0, 0, "goodEnding1");
    }
    else {
        neutralEnding = game.add.sprite(0, 0, "neutralEnding");
    }
}

// function checkEnding (endAdd){

// }