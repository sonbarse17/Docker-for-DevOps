# Simple Node.js People Info App 👥

A web application that allows users to search and retrieve information about people using Wikipedia data. Built with Node.js and Express.js, this application demonstrates API integration with Wikipedia and server-side rendering with EJS templates.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge)

## 📖 About

This application provides a simple interface to search for people and retrieve their information from Wikipedia. It features a clean UI with styled buttons and search functionality.

## 🎯 Features

- **Wikipedia Search**: Search for people using Wikipedia's API
- **Information Parsing**: Extract structured data from Wikipedia infoboxes
- **Responsive Design**: Clean interface with styled buttons
- **Error Handling**: Custom 404 error page

## 🚀 Tech Stack

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **wiki-infobox-parser**: Wikipedia data extraction
- **request**: HTTP client for making API calls

### Frontend
- **EJS**: Template engine for server-side rendering
- **HTML/CSS**: Styled interface with custom buttons
- **Responsive Design**: Mobile-friendly layout

## 📁 Project Structure

```
simple-nodejs-people-info-app/
├── index.js              # Main application file
├── package.json         # Project dependencies
├── views/              # EJS templates
│   ├── index.ejs      # Main search page
│   └── 404.ejs        # Error page
└── README.md          # Documentation
```

## 🚀 Deployment Guide

### Method 1: Local Development Setup

#### Prerequisites
- Node.js (v14 or higher)
- npm package manager

#### Steps
1. **Clone the repository**:
```bash
git clone <repository-url>
cd simple-nodejs-people-info-app
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the application**:
```bash
npm start
```

4. **Access the application**:
- Open browser and visit `http://localhost:3000`

### Method 2: Docker Deployment

#### Prerequisites
- Docker installed on your system

#### Steps

1. **Create a Dockerfile**:
```dockerfile
# Use official Node.js runtime as base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

2. **Create .dockerignore**:
```
node_modules
npm-debug.log
.git
.gitignore
```

3. **Build and run with Docker**:
```bash
# Build image
docker build -t people-info-app .

# Run container
docker run -d -p 3000:3000 --name people-info people-info-app
```

4. **Access the application**:
- Open browser and visit `http://localhost:3000`

## 🔧 Configuration Details

- **Port**: 3000 (default)
- **API**: Wikipedia OpenSearch API
- **Template Engine**: EJS
- **Static Files**: CSS served inline

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, please open an issue in the repository.

---

**Happy Searching! 🔍✨**