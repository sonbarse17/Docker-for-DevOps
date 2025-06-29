function HTMLActuator() {
  this.tileContainer = document.querySelector('.tile-container');
  this.scoreContainer = document.querySelector('.score-container');
  this.bestContainer = document.querySelector('.best-container');
  this.messageContainer = document.querySelector('.game-message');
  this.score = 0;

  // Validate required DOM elements
  if (!this.tileContainer || !this.scoreContainer || !this.bestContainer || !this.messageContainer) {
    throw new Error('Required DOM elements not found');
  }
}

HTMLActuator.prototype.actuate = function (grid, metadata) {
  const self = this;

  window.requestAnimationFrame(() => {
    self.clearContainer(self.tileContainer);

    // Render all tiles
    grid.cells.forEach(column => {
      column.forEach(cell => {
        if (cell) {
          self.addTile(cell);
        }
      });
    });

    self.updateScore(metadata.score);
    self.updateBestScore(metadata.bestScore);

    if (metadata.terminated) {
      self.message(metadata.won);
    }
  });
};

// Continues the game (both restart and keep playing)
HTMLActuator.prototype.continueGame = function () {
  this.clearMessage();
};

HTMLActuator.prototype.clearContainer = function (container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

HTMLActuator.prototype.addTile = function (tile) {
  const self = this;
  const wrapper = document.createElement('div');
  const inner = document.createElement('div');
  const position = tile.previousPosition || { x: tile.x, y: tile.y };
  
  const classes = [
    CSS_CLASSES.TILE,
    `tile-${tile.value}`,
    this.positionClass(position)
  ];

  if (tile.value > GAME_CONFIG.WIN_TILE) {
    classes.push(CSS_CLASSES.TILE_SUPER);
  }

  this.applyClasses(wrapper, classes);
  inner.classList.add(CSS_CLASSES.TILE_INNER);
  inner.textContent = tile.value;

  if (tile.previousPosition) {
    // Animate tile movement
    window.requestAnimationFrame(() => {
      classes[2] = self.positionClass({ x: tile.x, y: tile.y });
      self.applyClasses(wrapper, classes);
    });
  } else if (tile.mergedFrom) {
    classes.push(CSS_CLASSES.TILE_MERGED);
    this.applyClasses(wrapper, classes);
    
    // Render merged tiles
    tile.mergedFrom.forEach(merged => self.addTile(merged));
  } else {
    classes.push(CSS_CLASSES.TILE_NEW);
    this.applyClasses(wrapper, classes);
  }

  wrapper.appendChild(inner);
  this.tileContainer.appendChild(wrapper);
};

HTMLActuator.prototype.applyClasses = function (element, classes) {
  element.setAttribute("class", classes.join(" "));
};

HTMLActuator.prototype.normalizePosition = function (position) {
  return { x: position.x + 1, y: position.y + 1 };
};

HTMLActuator.prototype.positionClass = function (position) {
  position = this.normalizePosition(position);
  return "tile-position-" + position.x + "-" + position.y;
};

HTMLActuator.prototype.updateScore = function (score) {
  this.clearContainer(this.scoreContainer);
  
  const difference = score - this.score;
  this.score = score;
  this.scoreContainer.textContent = this.score;

  if (difference > 0) {
    const addition = document.createElement('div');
    addition.classList.add(CSS_CLASSES.SCORE_ADDITION);
    addition.textContent = `+${difference}`;
    this.scoreContainer.appendChild(addition);
  }
};

HTMLActuator.prototype.updateBestScore = function (bestScore) {
  this.bestContainer.textContent = bestScore;
};

HTMLActuator.prototype.message = function (won) {
  const type = won ? CSS_CLASSES.GAME_WON : CSS_CLASSES.GAME_OVER;
  const message = won ? 'You win!' : 'Game over!';

  this.messageContainer.classList.add(type);
  const messageElement = this.messageContainer.querySelector('p');
  if (messageElement) {
    messageElement.textContent = message;
  }
};

HTMLActuator.prototype.clearMessage = function () {
  this.messageContainer.classList.remove(CSS_CLASSES.GAME_WON, CSS_CLASSES.GAME_OVER);
};
