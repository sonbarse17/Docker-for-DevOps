# 2048 Game - Dockerized

A modern, high-quality implementation of the classic 2048 puzzle game with Docker support.

## Features
- **Modern JavaScript (ES6+)** - Clean, maintainable code
- **Responsive Design** - Works on desktop and mobile
- **Touch & Keyboard Controls** - Arrow keys, WASD, Vim keys, touch gestures
- **Local Storage** - Saves game state and best score
- **Docker Ready** - Easy deployment with Docker
- **Error Handling** - Robust error management

## Quick Start

### With Docker
```bash
docker build -t html-2048-game .
docker run -p 80:80 html-2048-game
```
Visit: http://localhost

### Local Development
Simply open `index.html` in your browser.

## Game Controls
- **Arrow Keys** - Move tiles
- **WASD Keys** - Alternative movement
- **Vim Keys (HJKL)** - For Vim users
- **Touch Gestures** - Swipe on mobile devices
- **R Key** - Restart game
- **New Game Button** - Reset the game

## Code Quality
This implementation features:
- Modern ES6+ JavaScript syntax
- Centralized configuration constants
- Comprehensive error handling
- Optimized performance
- Clean, maintainable code structure


## Project Structure
```
├── index.html          # Main game page
├── js/
│   ├── constants.js    # Game configuration
│   ├── game_manager.js # Core game logic
│   ├── grid.js         # Grid management
│   ├── tile.js         # Tile objects
│   └── ...            # Other modules
├── style/
│   ├── main.css       # Game styling
│   └── error.css      # Error message styles
└── Dockerfile         # Docker configuration
```

---
**Enhanced by Code Quality Improvements** | **Created by Sushant Sonbarse** | [GitHub](https://github.com/sonbarse17/)