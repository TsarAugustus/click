// TODO: refactor the code.
// Can easily reduce codebase by 50%
'use strict';

console.log('Loaded');

let game = {
  wood: 99,
  coal: 99,
  stone: 99,
  woodClickPower: 1,
  coalClickPower: 1,
  stoneClickPower: 1,
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
  console.log('Coal Click Upgrade');
  if(game.coal >= game.coalClickUpgrades.coalRequirement) {
    game.coal = game.coal - game.coalClickUpgrades.coalRequirement;
    game.coalClickUpgrades.amount++;
    game.coalClickPower++;
    game.coalClickUpgrades.coalRequirement = game.coalClickUpgrades.coalRequirement + game.coalClickUpgrades.coalRequirement;
  }
  update();
}

function stoneClickUpgrade() {
  console.log('Stone Click Upgrade');
  if(game.stone >= game.stoneClickUpgrades.stoneRequirement) {
    game.stone = game.stone - game.stoneClickUpgrades.stoneRequirement;
    game.stoneClickUpgrades.amount++;
    game.stoneClickPower++;
    game.stoneClickUpgrades.stoneRequirement = game.stoneClickUpgrades.stoneRequirement + game.stoneClickUpgrades.stoneRequirement;
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

function update() {
  // basic resource html
  document.getElementById("woodCount").innerHTML = game.wood;
  document.getElementById("coalCount").innerHTML = game.coal;
  document.getElementById("stoneCount").innerHTML = game.stone;

  // upgrade list html
  document.getElementById("woodUpgrades").innerHTML = game.woodClickUpgrades.amount;
  document.getElementById("coalUpgrades").innerHTML = game.coalClickUpgrades.amount;
  document.getElementById("stoneUpgrades").innerHTML = game.stoneClickUpgrades.amount;

  // click power html
  document.getElementById("woodClickPower").innerHTML = game.woodClickPower;
  document.getElementById("coalClickPower").innerHTML = game.coalClickPower;
  document.getElementById("stoneClickPower").innerHTML = game.stoneClickPower;

  // click update requirements
  document.getElementById("woodUpgradeCost").innerHTML = game.woodClickUpgrades.woodRequirement;
  document.getElementById("coalUpgradeCost").innerHTML = game.coalClickUpgrades.coalRequirement;
  document.getElementById("stoneUpgradeCost").innerHTML = game.stoneClickUpgrades.stoneRequirement;

  // worker amounts
  document.getElementById("woodWorkers").innerHTML = game.woodWorker.amount;
  document.getElementById("coalWorkers").innerHTML = game.coalWorker.amount;
  document.getElementById("stoneWorkers").innerHTML = game.stoneWorker.amount;

  // worker update costs
  document.getElementById("woodWorkerCost").innerHTML = game.woodWorker.woodAmount;
  document.getElementById("coalWorkerCost").innerHTML = game.coalWorker.coalAmount;
  document.getElementById("stoneWorkerCost").innerHTML = game.stoneWorker.stoneAmount;
}

window.setInterval(function() {
  game.wood = game.wood + game.woodWorker.increase;
  game.coal = game.coal + game.coalWorker.increase;
  game.stone = game.stone + game.stoneWorker.increase;
  update();
}, 1000)
