var rs = require("readline-sync");

console.log("Welcome to my game!");
var playerName = rs.question("What is your name?");

// while loop continues as long as my hp is > 0, or my wincon is not met

var player = {
    name: playerName,
    hp: 100,
    attack: undefined,
    enemiesKilled: 0
}

var Enemy = function () {
    this.attack = Math.floor(Math.random() * 20) + 10;
    this.hp = 50;
    // etc etc
}


while (player.hp > 0 && player.enemiesKilled < 3) {

}