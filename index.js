var game = new Phaser.Game(600, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image("level1", "assets/level 1.png");
    game.load.image("level2", "assets/level 2.png");
    game.load.image("level3", "assets/level 3.png");
    game.load.image("level4", "assets/level 4.png");
    game.load.spritesheet("girl", "assets/girl.png", 32, 32);

}

var player;
var platforms;
var cursors;

function create() {
    game.add.sprite(0, 0, "girl");

}

function update() {
}