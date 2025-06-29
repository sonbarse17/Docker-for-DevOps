# Docker Test App 🐳

A simple full-stack web application demonstrating a user registration system with MongoDB integration. This project is designed for Docker containerization and demonstrates basic CRUD operations in a Node.js environment.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 📖 About

This is a demonstration application for learning Docker containerization with a full-stack web application. It features a simple university student registration system where users can sign up and their data is stored in a MongoDB database.

## 🎯 Features

- **User Registration**: Simple form-based user signup
- **MongoDB Integration**: Persistent data storage
- **RESTful API**: GET and POST endpoints
- **Responsive Design**: Clean and simple UI
- **Docker Ready**: Designed for containerization

## 🚀 Tech Stack

### Backend Technologies
- **Node.js**: JavaScript runtime environment
- **Express.js v4.21.2**: Fast, unopinionated web framework
- **MongoDB Driver v6.13.0**: Official MongoDB driver for Node.js

### Frontend Technologies
- **HTML5**: Semantic markup and form structure
- **CSS3**: Styling and responsive design
- **Vanilla JavaScript**: Form handling (via Express static middleware)

### Development Tools
- **npm**: Package manager
- **Express Static Middleware**: Serving static files
- **Express URL Encoding**: Form data parsing

## 📁 Project Structure

```
docker-testapp/
├── server.js              # Main Express server file
├── package.json           # Node.js dependencies and scripts
├── package-lock.json      # Dependency lock file
├── node_modules/          # Installed dependencies
└── public/                # Static frontend files
    ├── index.html         # Main HTML page
    └── style.css          # Stylesheet
```

## 🔧 API Endpoints

### GET `/getUsers`
- **Description**: Retrieve all users from the database
- **Response**: JSON array of user objects
- **Database**: `apnacollege-db.users` collection

### POST `/addUser`
- **Description**: Add a new user to the database
- **Body Parameters**:
  - `email`: User's email address
  - `username`: User's display name
  - `password`: User's password
- **Database**: `apnacollege-db.users` collection

### GET `/` (Static)
- **Description**: Serves the main HTML page
- **File**: `public/index.html`

## 🗄️ Database Configuration

- **Database System**: MongoDB
- **Connection URL**: `mongodb://admin:qwerty@mongo:27017/`
- **Database Name**: `apnacollege-db`
- **Collection**: `users`
- **Authentication**: Username: `admin`, Password: `qwerty`

## 🚀 Deployment Guide

### Method 1: Local Development Setup

#### Prerequisites
- Node.js (v14 or higher)
- MongoDB instance running
- npm package manager

#### Steps
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd docker-testapp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start MongoDB** (if running locally):
   ```bash
   # Start MongoDB service
   mongod
   
   # Or using MongoDB Atlas (update connection string in server.js)
   ```

4. **Update MongoDB connection** (if needed):
   Edit `server.js` line 10 to match your MongoDB setup:
   ```javascript
   const MONGO_URL = "mongodb://localhost:27017/";
   ```

5. **Start the application**:
   ```bash
   node server.js
   ```

6. **Access the application**:
   - Open browser and go to `http://localhost:5050`

### Method 2: Docker Deployment

#### Prerequisites
- Docker installed
- Docker Compose (recommended for multi-container setup)

#### Option A: Docker with External MongoDB

1. **Create a Dockerfile**:
   ```dockerfile
   # Use official Node.js runtime as base image
   FROM node:18-alpine
   
   # Set working directory in container
   WORKDIR /app
   
   # Copy package files
   COPY package*.json ./
   
   # Install dependencies
   RUN npm install
   
   # Copy application files
   COPY . .
   
   # Expose the port
   EXPOSE 5050
   
   # Start the application
   CMD ["node", "server.js"]
   ```

2. **Build and run**:
   ```bash
   docker build -t docker-testapp .
   docker run -p 5050:5050 --name testapp docker-testapp
   ```

#### Option B: Docker Compose (Recommended)

1. **Create docker-compose.yml**:
   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - "5050:5050"
       depends_on:
         - mongo
       environment:
         - NODE_ENV=production
   
     mongo:
       image: mongo:latest
       container_name: mongodb
       ports:
         - "27017:27017"
       environment:
         - MONGO_INITDB_ROOT_USERNAME=admin
         - MONGO_INITDB_ROOT_PASSWORD=qwerty
       volumes:
         - mongodb_data:/data/db
   
   volumes:
     mongodb_data:
   ```

2. **Deploy with Docker Compose**:
   ```bash
   docker-compose up -d
   ```

3. **Access the application**:
   - Open browser and go to `http://localhost:5050`

### Method 3: Cloud Deployment

#### Deploy to Heroku
1. **Install Heroku CLI**
2. **Create Procfile**:
   ```
   web: node server.js
   ```
3. **Deploy**:
   ```bash
   heroku create your-app-name
   heroku config:set MONGO_URL="your-mongodb-atlas-url"
   git push heroku main
   ```

#### Deploy to Digital Ocean App Platform
1. Connect GitHub repository
2. Set build command: `npm install`
3. Set run command: `node server.js`
4. Add MongoDB environment variable

## 🔧 Development Setup

### Environment Variables (Optional)
Create a `.env` file for environment-specific configurations:
```env
PORT=5050
MONGO_URL=mongodb://admin:qwerty@mongo:27017/
DB_NAME=apnacollege-db
```

### Package.json Scripts (Recommended additions)
Add these scripts to your `package.json`:
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

### Development Dependencies (Optional)
For development, consider adding:
```bash
npm install --save-dev nodemon
```

## 🛠️ Code Analysis

### Server.js Breakdown

| Function | Purpose | Lines |
|----------|---------|-------|
| **Express Setup** | Initialize Express app and middleware | 1-8 |
| **MongoDB Connection** | Setup MongoDB client and connection | 10-12 |
| **GET /getUsers** | Retrieve all users from database | 15-24 |
| **POST /addUser** | Add new user to database | 27-38 |
| **Server Start** | Start Express server on port 5050 | 41-43 |

### Frontend Features
- **Form Validation**: Basic HTML5 validation
- **Responsive Design**: CSS styling for mobile compatibility
- **User Experience**: Clean, centered layout with form styling

## 🐛 Known Issues & Fixes

### Issue 1: Connection Variable Mismatch
**Problem**: Line 16 and 30 in server.js reference `URL` instead of `MONGO_URL`

**Fix**:
```javascript
// Change from:
await client.connect(URL);

// To:
await client.connect(MONGO_URL);
```

### Issue 2: No Response in POST Route
**Problem**: POST `/addUser` doesn't send response to client

**Fix**:
```javascript
app.post("/addUser", async (req, res) => {
    // ... existing code ...
    res.status(201).json({ message: "User added successfully", data: data });
});
```

## 🔒 Security Considerations

- **Password Hashing**: Implement bcrypt for password security
- **Input Validation**: Add validation middleware
- **Environment Variables**: Move sensitive data to environment variables
- **CORS**: Configure CORS for production deployment
- **Rate Limiting**: Implement rate limiting for API endpoints

## 📚 Learning Objectives

This project demonstrates:
- ✅ **Node.js & Express.js** fundamentals
- ✅ **MongoDB** integration and operations
- ✅ **RESTful API** design patterns
- ✅ **Static file serving** with Express
- ✅ **Form handling** and data processing
- ✅ **Docker containerization** concepts
- ✅ **Multi-tier application** architecture

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help with deployment, feel free to open an issue or contact the development team.

---

**Happy Coding! 🚀**

