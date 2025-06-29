# Java Quotes Server

A lightweight Java HTTP server that serves random quotes through both a web UI and REST API.

## Features
- 🌐 **Web UI** - Interactive quote generator with modern design
- 🔌 **REST API** - JSON endpoint for programmatic access
- 📁 **File-based quotes** - Easy quote management via text file
- ⚙️ **Configurable port** - Command-line port configuration
- 🐳 **Docker ready** - Containerized deployment

## Quick Start

### Using Docker
```bash
docker build -t java-quotes-server .
docker run -p 8000:8000 java-quotes-server
```

### Using Java directly
```bash
# Compile
javac -d . src/Main.java

# Run (default port 8000)
java Main

# Run with custom port
java Main 3000
```

## Usage

### Web Interface
Visit: http://localhost:8000
- Click "Get New Quote" to fetch random quotes
- Clean, responsive design

### API Endpoint
**GET** `/api/quote`
```bash
curl http://localhost:8000/api/quote
```

**Response:**
```json
{
  "quote": "Your random quote here"
}
```

## Configuration

### Adding Quotes
Edit `quotes.txt` - one quote per line:
```
The only way to do great work is to love what you do.
Life is what happens to you while you're busy making other plans.
The future belongs to those who believe in the beauty of their dreams.
```

### Port Configuration
```bash
# Default port 8000
java Main

# Custom port
java Main 3000
```

## Project Structure
```
├── src/Main.java    # Server implementation
├── quotes.txt       # Quote database
├── Dockerfile       # Container configuration
└── README.md        # Documentation
```

---
**Created by Sushant Sonbarse** | [GitHub](https://github.com/sonbarse17/)