// Game constants
const GAME_CONFIG = {
  GRID_SIZE: 4,
  START_TILES: 2,
  WIN_TILE: 2048,
  NEW_TILE_PROBABILITY: 0.9, // 90% chance for 2, 10% for 4
  MIN_SWIPE_DISTANCE: 10
};

const DIRECTIONS = {
  UP: 0,
  RIGHT: 1,
  DOWN: 2,
  LEFT: 3
};

const DIRECTION_VECTORS = {
  [DIRECTIONS.UP]: { x: 0, y: -1 },
  [DIRECTIONS.RIGHT]: { x: 1, y: 0 },
  [DIRECTIONS.DOWN]: { x: 0, y: 1 },
  [DIRECTIONS.LEFT]: { x: -1, y: 0 }
};

const KEY_MAPPINGS = {
  38: DIRECTIONS.UP,    // Arrow Up
  39: DIRECTIONS.RIGHT, // Arrow Right
  40: DIRECTIONS.DOWN,  // Arrow Down
  37: DIRECTIONS.LEFT,  // Arrow Left
  75: DIRECTIONS.UP,    // K (Vim)
  76: DIRECTIONS.RIGHT, // L (Vim)
  74: DIRECTIONS.DOWN,  // J (Vim)
  72: DIRECTIONS.LEFT,  // H (Vim)
  87: DIRECTIONS.UP,    // W
  68: DIRECTIONS.RIGHT, // D
  83: DIRECTIONS.DOWN,  // S
  65: DIRECTIONS.LEFT   // A
};

const STORAGE_KEYS = {
  BEST_SCORE: 'bestScore',
  GAME_STATE: 'gameState'
};

const CSS_CLASSES = {
  TILE: 'tile',
  TILE_INNER: 'tile-inner',
  TILE_NEW: 'tile-new',
  TILE_MERGED: 'tile-merged',
  TILE_SUPER: 'tile-super',
  SCORE_ADDITION: 'score-addition',
  GAME_WON: 'game-won',
  GAME_OVER: 'game-over'
};