function KeyboardInputManager() {
  this.events = {};
  this.touchStartX = 0;
  this.touchStartY = 0;

  // Use modern touch events (IE10 pointer events are obsolete)
  this.eventTouchstart = 'touchstart';
  this.eventTouchmove = 'touchmove';
  this.eventTouchend = 'touchend';

  this.listen();
}

KeyboardInputManager.prototype.on = function (event, callback) {
  if (!this.events[event]) {
    this.events[event] = [];
  }
  this.events[event].push(callback);
};

KeyboardInputManager.prototype.emit = function (event, data) {
  var callbacks = this.events[event];
  if (callbacks) {
    callbacks.forEach(function (callback) {
      callback(data);
    });
  }
};

KeyboardInputManager.prototype.listen = function () {
  const self = this;

  // Respond to direction keys
  document.addEventListener('keydown', (event) => {
    const modifiers = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
    const mapped = KEY_MAPPINGS[event.which];

    if (!modifiers) {
      if (mapped !== undefined) {
        event.preventDefault();
        self.emit('move', mapped);
      }
      // R key restarts the game
      if (event.which === 82) {
        self.restart(event);
      }
    }
  });

  // Respond to button presses
  this.bindButtonPress('.retry-button', this.restart);
  this.bindButtonPress('.restart-button', this.restart);
  this.bindButtonPress('.keep-playing-button', this.keepPlaying);

  // Respond to swipe events
  const gameContainer = document.querySelector('.game-container');
  if (!gameContainer) return;

  gameContainer.addEventListener(this.eventTouchstart, (event) => {
    if (event.touches.length > 1) {
      return; // Ignore multi-touch
    }

    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
    event.preventDefault();
  });

  gameContainer.addEventListener(this.eventTouchmove, (event) => {
    event.preventDefault();
  });

  gameContainer.addEventListener(this.eventTouchend, (event) => {
    if (event.touches.length > 0) {
      return; // Ignore if still touching
    }

    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;
    
    const dx = touchEndX - this.touchStartX;
    const dy = touchEndY - this.touchStartY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (Math.max(absDx, absDy) > GAME_CONFIG.MIN_SWIPE_DISTANCE) {
      const direction = absDx > absDy 
        ? (dx > 0 ? DIRECTIONS.RIGHT : DIRECTIONS.LEFT)
        : (dy > 0 ? DIRECTIONS.DOWN : DIRECTIONS.UP);
      self.emit('move', direction);
    }
  });
};

KeyboardInputManager.prototype.restart = function (event) {
  event.preventDefault();
  this.emit('restart');
};

KeyboardInputManager.prototype.keepPlaying = function (event) {
  event.preventDefault();
  this.emit('keepPlaying');
};

KeyboardInputManager.prototype.bindButtonPress = function (selector, fn) {
  const button = document.querySelector(selector);
  if (button) {
    button.addEventListener('click', fn.bind(this));
    button.addEventListener(this.eventTouchend, fn.bind(this));
  }
};
