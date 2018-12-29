// TODO: refactor the code.
// Can easily reduce codebase by 50%
'use strict';

console.log('Loaded');

let game = {
  wood: 99,
  coal: 99,
  stone: 99,
  food: 99,
  water: 99,

  woodClickPower: 1,
  coalClickPower: 1,
  stoneClickPower: 1,
  foodClickPower: 1,
  waterClickPower: 1,

  woodClickUpgrades: {
    amount: 0,
    woodRequirement: 100
  },
  coalClickUpgrades: {
    amount: 0,
    coalRequirement: 100
  },
  stoneClickUpgrades: {
    amount: 0,
    stoneRequirement: 100
  },
  foodClickUpgrades: {
    amount: 0,
    foodRequirement: 100
  },
  waterClickUpgrades: {
    amount: 0,
    waterRequirement: 100
  },

  woodWorker: {
    increase: 0,
    amount: 0,
    woodAmount: 50
  },
  coalWorker: {
    increase: 0,
    amount: 0,
    coalAmount: 50
  },
  stoneWorker: {
    increase: 0,
    amount: 0,
    stoneAmount: 50
  },
  foodWorker: {
    increase: 0,
    amount: 0,
    foodAmount: 50
  },
  waterWorker: {
    increase: 0,
    amount: 0,
    waterAmount: 50
  }
};

function getWood() {
  game.wood = game.wood + game.woodClickPower;
  update();
}
function getCoal() {
  game.coal = game.coal + game.coalClickPower;
  update();
}
function getStone() {
  game.stone = game.stone + game.stoneClickPower;
  update();
}
function getFood() {
  game.food = game.food + game.foodClickPower;
  update();
}
function getWater() {
  game.water = game.water + game.waterClickPower;
  update();
}

function woodClickUpgrade() {
  if(game.wood >= game.woodClickUpgrades.woodRequirement) {
    game.wood = game.wood - game.woodClickUpgrades.woodRequirement;
    game.woodClickUpgrades.amount++;
    game.woodClickPower++;
    game.woodClickUpgrades.woodRequirement = game.woodClickUpgrades.woodRequirement + game.woodClickUpgrades.woodRequirement;
  }
  update();
}
function coalClickUpgrade() {
  if(game.coal >= game.coalClickUpgrades.coalRequirement) {
    game.coal = game.coal - game.coalClickUpgrades.coalRequirement;
    game.coalClickUpgrades.amount++;
    game.coalClickPower++;
    game.coalClickUpgrades.coalRequirement = game.coalClickUpgrades.coalRequirement + game.coalClickUpgrades.coalRequirement;
  }
  update();
}
function stoneClickUpgrade() {
  if(game.stone >= game.stoneClickUpgrades.stoneRequirement) {
    game.stone = game.stone - game.stoneClickUpgrades.stoneRequirement;
    game.stoneClickUpgrades.amount++;
    game.stoneClickPower++;
    game.stoneClickUpgrades.stoneRequirement = game.stoneClickUpgrades.stoneRequirement + game.stoneClickUpgrades.stoneRequirement;
  }
  update();
}
function foodClickUpgrade() {
  if(game.food >= game.foodClickUpgrades.foodRequirement) {
    game.food = game.food - game.foodClickUpgrades.foodRequirement;
    game.foodClickUpgrades.amount++;
    game.foodClickPower++;
    game.foodClickUpgrades.foodRequirement = game.foodClickUpgrades.foodRequirement + game.foodClickUpgrades.foodRequirement;
  }
  update();
}
function waterClickUpgrade() {
  if(game.water >= game.waterClickUpgrades.waterRequirement) {
    game.water = game.water - game.waterClickUpgrades.waterRequirement;
    game.waterClickUpgrades.amount++;
    game.waterClickPower++;
    game.waterClickUpgrades.waterRequirement = game.waterClickUpgrades.waterRequirement + game.waterClickUpgrades.waterRequirement;
  }
  update();
}

function woodWorker() {
  if(game.wood >= game.woodWorker.woodAmount) {
    game.woodWorker.amount++;
    game.woodWorker.increase = game.woodWorker.amount * 2;
    game.wood = game.wood - game.woodWorker.woodAmount;
    game.woodWorker.woodAmount = game.woodWorker.woodAmount + game.woodWorker.woodAmount;
  }
  update();
}
function coalWorker() {
  if(game.coal >= game.coalWorker.coalAmount) {
    game.coalWorker.amount++;
    game.coalWorker.increase = game.coalWorker.amount * 2;
    game.coal = game.coal - game.coalWorker.coalAmount;
    game.coalWorker.coalAmount = game.coalWorker.coalAmount + game.coalWorker.coalAmount;
  }
  update();
}
function stoneWorker() {
  if(game.stone >= game.stoneWorker.stoneAmount) {
    game.stoneWorker.amount++;
    game.stoneWorker.increase = game.stoneWorker.amount * 2;
    game.stone = game.stone - game.stoneWorker.stoneAmount;
    game.stoneWorker.stoneAmount = game.stoneWorker.stoneAmount + game.stoneWorker.stoneAmount;
  }
  update();
}
function foodWorker() {
  if(game.food >= game.foodWorker.foodAmount) {
    game.foodWorker.amount++;
    game.foodWorker.increase = game.foodWorker.amount * 2;
    game.food = game.food - game.foodWorker.foodAmount;
    game.foodWorker.foodAmount = game.foodWorker.foodAmount + game.foodWorker.foodAmount;
  }
  update();
}
function waterWorker() {
  if(game.water >= game.waterWorker.waterAmount) {
    game.waterWorker.amount++;
    game.waterWorker.increase = game.waterWorker.amount * 2;
    game.water = game.water - game.waterWorker.waterAmount;
    game.waterWorker.waterAmount = game.waterWorker.waterAmount + game.waterWorker.waterAmount;
  }
  update();
}

// dear god please reduce this

function update() {
  // basic resource html
  document.getElementById("woodCount").innerHTML = game.wood;
  document.getElementById("coalCount").innerHTML = game.coal;
  document.getElementById("stoneCount").innerHTML = game.stone;
  document.getElementById("foodCount").innerHTML = game.food;
  document.getElementById("waterCount").innerHTML = game.water;

  // upgrade list html
  document.getElementById("woodUpgrades").innerHTML = game.woodClickUpgrades.amount;
  document.getElementById("coalUpgrades").innerHTML = game.coalClickUpgrades.amount;
  document.getElementById("stoneUpgrades").innerHTML = game.stoneClickUpgrades.amount;
  document.getElementById("foodUpgrades").innerHTML = game.foodClickUpgrades.amount;
  document.getElementById("waterUpgrades").innerHTML = game.waterClickUpgrades.amount;

  // click power html
  document.getElementById("woodClickPower").innerHTML = game.woodClickPower;
  document.getElementById("coalClickPower").innerHTML = game.coalClickPower;
  document.getElementById("stoneClickPower").innerHTML = game.stoneClickPower;
  document.getElementById("foodClickPower").innerHTML = game.foodClickPower;
  document.getElementById("waterClickPower").innerHTML = game.waterClickPower;

  // click update requirements
  document.getElementById("woodUpgradeCost").innerHTML = game.woodClickUpgrades.woodRequirement;
  document.getElementById("coalUpgradeCost").innerHTML = game.coalClickUpgrades.coalRequirement;
  document.getElementById("stoneUpgradeCost").innerHTML = game.stoneClickUpgrades.stoneRequirement;
  document.getElementById("foodUpgradeCost").innerHTML = game.foodClickUpgrades.foodRequirement;
  document.getElementById("waterUpgradeCost").innerHTML = game.waterClickUpgrades.waterRequirement;

  // worker amounts
  document.getElementById("woodWorkers").innerHTML = game.woodWorker.amount;
  document.getElementById("coalWorkers").innerHTML = game.coalWorker.amount;
  document.getElementById("stoneWorkers").innerHTML = game.stoneWorker.amount;
  document.getElementById("foodWorkers").innerHTML = game.foodWorker.amount;
  document.getElementById("waterWorkers").innerHTML = game.waterWorker.amount;

  // worker update costs
  document.getElementById("woodWorkerCost").innerHTML = game.woodWorker.woodAmount;
  document.getElementById("coalWorkerCost").innerHTML = game.coalWorker.coalAmount;
  document.getElementById("stoneWorkerCost").innerHTML = game.stoneWorker.stoneAmount;
  document.getElementById("foodWorkerCost").innerHTML = game.foodWorker.foodAmount;
  document.getElementById("waterWorkerCost").innerHTML = game.waterWorker.waterAmount;
}

window.setInterval(function() {
  game.wood = game.wood + game.woodWorker.increase;
  game.coal = game.coal + game.coalWorker.increase;
  game.stone = game.stone + game.stoneWorker.increase;
  game.food = game.food + game.foodWorker.increase;
  game.water = game.water + game.waterWorker.increase;
  update();
}, 1000)
