# 2048 Game 🎮

A web-based implementation of the popular 2048 puzzle game. Join the numbers and get to the **2048 tile**!

![2048 Game](https://img.shields.io/badge/Game-2048-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📖 About

This is the official web version of 2048, created by [Gabriele Cirulli](http://gabrielecirulli.com). The game is based on [1024 by Veewo Studio](https://itunes.apple.com/us/app/1024!/id823499224) and conceptually similar to [Threes by Asher Vollmer](http://asherv.com/threes/).

## 🎯 How to Play

- **Objective**: Join numbers to reach the **2048** tile!
- **Controls**: Use your **arrow keys** to move the tiles
- **Rules**: When two tiles with the same number touch, they **merge into one**
- **Goal**: Try to reach the highest score possible!

## 🚀 Tech Stack

### Frontend Technologies
- **HTML5**: Semantic markup and game structure
- **CSS3/SCSS**: Styling and animations
  - Main styles: `style/main.css` (compiled from `main.scss`)
  - Helper utilities: `style/helpers.scss`
  - Custom fonts included in `style/fonts/`
- **Vanilla JavaScript (ES5)**: Game logic and interactivity

### JavaScript Architecture

The game follows a modular architecture with the following components:

| Module | Purpose | File |
|--------|---------|------|
| **Application** | Entry point and game initialization | `js/application.js` |
| **Game Manager** | Core game logic and state management | `js/game_manager.js` |
| **Grid** | Game grid management and operations | `js/grid.js` |
| **Tile** | Individual tile representation | `js/tile.js` |
| **HTML Actuator** | DOM manipulation and rendering | `js/html_actuator.js` |
| **Keyboard Input Manager** | Keyboard event handling | `js/keyboard_input_manager.js` |
| **Local Storage Manager** | Game state persistence | `js/local_storage_manager.js` |
| **Polyfills** | Browser compatibility | `js/*_polyfill.js` |

### Browser Compatibility
- **Animation Frame Polyfill**: For smooth animations
- **Class List Polyfill**: For older browser support
- **Bind Polyfill**: Function binding compatibility

### Mobile Optimization
- **Responsive Design**: Mobile-first approach
- **Touch Support**: Optimized for mobile devices
- **Apple Web App**: PWA capabilities with custom icons
- **Viewport Optimization**: Proper scaling for different screen sizes

## 📁 Project Structure

```
2048-game/
├── index.html              # Main HTML file
├── favicon.ico             # Website favicon
├── LICENSE.txt             # MIT License
├── .jshintrc              # JavaScript linting configuration
├── .dockerignore          # Docker ignore rules
├── js/                    # JavaScript modules
│   ├── application.js     # Game initialization
│   ├── game_manager.js    # Core game logic
│   ├── grid.js           # Grid management
│   ├── tile.js           # Tile representation
│   ├── html_actuator.js  # DOM manipulation
│   ├── keyboard_input_manager.js # Input handling
│   ├── local_storage_manager.js  # State persistence
│   └── *_polyfill.js     # Browser compatibility
├── style/                 # Stylesheets
│   ├── main.css          # Compiled main stylesheet
│   ├── main.scss         # Main SCSS source
│   ├── helpers.scss      # SCSS utilities
│   └── fonts/            # Custom fonts
└── meta/                  # App icons and metadata
    ├── apple-touch-icon.png
    └── apple-touch-startup-image-*.png
```

## 🚀 Deployment Guide

### Method 1: Simple Web Server Deployment

#### Prerequisites
- Any web server (Apache, Nginx, IIS, etc.)
- No server-side processing required

#### Steps
1. **Clone or download the project**:
   ```bash
   git clone <repository-url>
   cd 2048-game
   ```

2. **Deploy to web server**:
   - Copy all files to your web server's document root
   - Ensure `index.html` is accessible
   - No build process required!

3. **Access the game**:
   - Open your browser and navigate to your server URL
   - The game should load immediately

### Method 2: Docker Deployment

#### Prerequisites
- Docker installed on your system
- Basic knowledge of Docker commands

#### Option A: Using Nginx

1. **Create a Dockerfile**:
   ```dockerfile
   # Use official nginx image
   FROM nginx:alpine
   
   # Copy game files to nginx html directory
   COPY . /usr/share/nginx/html/
   
   # Expose port 80
   EXPOSE 80
   
   # Start nginx
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Build the Docker image**:
   ```bash
   docker build -t 2048-game .
   ```

3. **Run the container**:
   ```bash
   docker run -d -p 8080:80 --name 2048-game 2048-game
   ```

4. **Access the game**:
   - Open browser and go to `http://localhost:8080`

#### Option B: Using Apache HTTP Server

1. **Create a Dockerfile**:
   ```dockerfile
   # Use official Apache image
   FROM httpd:alpine
   
   # Copy game files to Apache html directory
   COPY . /usr/local/apache2/htdocs/
   
   # Expose port 80
   EXPOSE 80
   ```

2. **Build and run**:
   ```bash
   docker build -t 2048-game-apache .
   docker run -d -p 8080:80 --name 2048-apache 2048-game-apache
   ```

### Method 3: Static Site Hosting

#### Deploy to GitHub Pages
1. Fork/upload the repository to GitHub
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your game will be available at `https://username.github.io/repository-name`

#### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: (leave empty)
3. Set publish directory: `/` (root)
4. Deploy automatically on git push

#### Deploy to Vercel
1. Import project from GitHub
2. No build configuration needed
3. Deploy with zero configuration

### Method 4: Local Development Server

#### Using Python (Python 3)
```bash
cd 2048-game
python -m http.server 8000
# Access at http://localhost:8000
```

#### Using Node.js (with http-server)
```bash
npm install -g http-server
cd 2048-game
http-server -p 8000
# Access at http://localhost:8000
```

#### Using PHP
```bash
cd 2048-game
php -S localhost:8000
# Access at http://localhost:8000
```

## 🔧 Development Setup

### SCSS Development (Optional)
If you want to modify styles:

1. **Install Sass**:
   ```bash
   npm install -g sass
   ```

2. **Compile SCSS to CSS**:
   ```bash
   sass style/main.scss style/main.css
   ```

3. **Watch for changes**:
   ```bash
   sass --watch style/main.scss:style/main.css
   ```

### Code Quality
- **JSHint**: JavaScript linting configured in `.jshintrc`
- **Code Style**: Follows ES5 standards for maximum compatibility

## 🌐 Browser Support

- ✅ Chrome (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Edge (all versions)
- ✅ Internet Explorer 9+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Features

- **Touch gestures**: Swipe to move tiles
- **Responsive design**: Adapts to different screen sizes
- **PWA ready**: Add to home screen functionality
- **Optimized performance**: Smooth animations on mobile devices

## 🎮 Game Features

- **Score tracking**: Current score and best score persistence
- **Local storage**: Game state saved automatically
- **Smooth animations**: CSS transitions for tile movements
- **Keyboard controls**: Arrow keys for desktop
- **Touch controls**: Swipe gestures for mobile
- **Game over detection**: Automatic win/lose conditions
- **Continue playing**: Option to keep playing after reaching 2048

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

- **Original Creator**: [Gabriele Cirulli](http://gabrielecirulli.com)
- **Official Version**: This is the official web version
- **Mobile Access**: [http://git.io/2048](http://git.io/2048)

## 🚨 Important Note

**This is the official version of 2048.** All other apps or sites are derivatives or fakes and should be used with caution.

---

**Enjoy playing 2048! 🎯**

