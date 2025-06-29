// Fallback storage for environments without localStorage
window.fakeStorage = {
  _data: {},

  setItem(id, val) {
    this._data[id] = String(val);
  },

  getItem(id) {
    return Object.prototype.hasOwnProperty.call(this._data, id) ? this._data[id] : null;
  },

  removeItem(id) {
    delete this._data[id];
  },

  clear() {
    this._data = {};
  }
};

function LocalStorageManager() {
  this.bestScoreKey = STORAGE_KEYS.BEST_SCORE;
  this.gameStateKey = STORAGE_KEYS.GAME_STATE;
  this.storage = this.localStorageSupported() ? window.localStorage : window.fakeStorage;
}

LocalStorageManager.prototype.localStorageSupported = function () {
  const testKey = 'test';
  try {
    const storage = window.localStorage;
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    console.warn('LocalStorage not supported, using fallback storage');
    return false;
  }
};

// Best score getters/setters
LocalStorageManager.prototype.getBestScore = function () {
  return this.storage.getItem(this.bestScoreKey) || 0;
};

LocalStorageManager.prototype.setBestScore = function (score) {
  this.storage.setItem(this.bestScoreKey, score);
};

// Game state getters/setters and clearing
LocalStorageManager.prototype.getGameState = function () {
  try {
    const stateJSON = this.storage.getItem(this.gameStateKey);
    return stateJSON ? JSON.parse(stateJSON) : null;
  } catch (error) {
    console.error('Error parsing game state:', error);
    return null;
  }
};

LocalStorageManager.prototype.setGameState = function (gameState) {
  try {
    this.storage.setItem(this.gameStateKey, JSON.stringify(gameState));
  } catch (error) {
    console.error('Error saving game state:', error);
  }
};

LocalStorageManager.prototype.clearGameState = function () {
  this.storage.removeItem(this.gameStateKey);
};
