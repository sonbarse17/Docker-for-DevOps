# Node.js Express DevOps Application 🚀

A minimal Node.js web application built with Express.js, designed for DevOps learning and containerization. This project demonstrates Node.js development fundamentals, deployment strategies, and modern DevOps practices.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## 📖 About

This is a simple Node.js application built with Express.js framework, designed specifically for aspiring DevOps engineers. It serves as a foundational project to understand web application development, containerization, CI/CD pipelines, and deployment automation.

## 🎯 Features

- **Lightweight Express Server**: Minimal HTTP server with single endpoint
- **Environment Configuration**: Port configuration via environment variables
- **Development Ready**: Easy setup and fast iteration
- **Docker Compatible**: Ready for containerization
- **Production Ready**: Scalable architecture foundation
- **DevOps Friendly**: Designed for CI/CD pipelines

## 🚀 Tech Stack

### Core Technologies
- **Node.js**: JavaScript runtime environment (v14+ recommended)
- **Express.js v4.21.1**: Fast, unopinionated web framework for Node.js
- **JavaScript (ES6+)**: Modern JavaScript with arrow functions and template literals

### Package Management
- **npm**: Node Package Manager for dependency management
- **package.json**: Project metadata and dependency definitions
- **package-lock.json**: Dependency version locking for consistent installs

### Development Tools
- **Nodemon** (recommended): Automatic server restart during development
- **PM2** (recommended): Process manager for production deployment

## 📁 Project Structure

```
nodejs/
├── index.js              # Main application entry point
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Dependency lock file
├── node_modules/         # Installed dependencies
└── README.md            # Project documentation
```

## 🔧 Application Architecture

### index.js - Main Application
- **Express Setup**: Creates Express application instance
- **Route Definition**: Single GET route serving HTML content
- **Server Configuration**: Port configuration with environment variable fallback
- **Server Startup**: Listens on configured port with logging

### Key Components

| Component | Purpose | Implementation |
|-----------|---------|----------------|
| **Express App** | Web server framework | `const app = express()` |
| **Route Handler** | HTTP request processing | `app.get('/', callback)` |
| **Port Configuration** | Server port management | `process.env.PORT \|\| 5001` |
| **Server Listener** | HTTP server startup | `app.listen(port, callback)` |

## 🌐 API Endpoints

### GET `/`
- **Description**: Returns a welcome message for DevOps engineers
- **Response**: HTML content with greeting message
- **Content-Type**: `text/html`
- **Status Code**: 200 OK

#### Example Request
```bash
curl http://localhost:5001/
```

#### Example Response
```html
<h2>Hello Aspiring DevOps Engineers!</h2>
```

## 🚀 Deployment Guide

### Method 1: Local Development Setup

#### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Command line access

#### Steps

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd nodejs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   # Development mode
   node index.js
   
   # Or with custom port
   PORT=3000 node index.js  # Linux/macOS
   set PORT=3000 && node index.js  # Windows
   ```

4. **Access the application**:
   - Open browser and go to `http://localhost:5001`
   - Or custom port: `http://localhost:3000`

### Method 2: Development with Nodemon

#### Install Nodemon
```bash
# Global installation
npm install -g nodemon

# Or as dev dependency
npm install --save-dev nodemon
```

#### Enhanced package.json scripts
```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

#### Run with Nodemon
```bash
npm run dev
```

### Method 3: Docker Deployment

#### Prerequisites
- Docker installed on your system
- Basic Docker knowledge

#### Option A: Basic Docker Setup

1. **Create Dockerfile**:
   ```dockerfile
   # Use official Node.js runtime as base image
   FROM node:18-alpine
   
   # Set working directory in container
   WORKDIR /app
   
   # Copy package files first for better caching
   COPY package*.json ./
   
   # Install dependencies
   RUN npm ci --only=production
   
   # Copy application files
   COPY . .
   
   # Create non-root user for security
   RUN addgroup -g 1001 -S nodejs
   RUN adduser -S nodeuser -u 1001
   USER nodeuser
   
   # Expose the port
   EXPOSE 5001
   
   # Start the application
   CMD ["node", "index.js"]
   ```

2. **Create .dockerignore**:
   ```
   node_modules
   npm-debug.log
   .git
   .gitignore
   README.md
   .env
   .nyc_output
   coverage
   .DS_Store
   ```

3. **Build and run container**:
   ```bash
   # Build the image
   docker build -t nodejs-devops-app .
   
   # Run the container
   docker run -d -p 5001:5001 --name nodejs-app nodejs-devops-app
   
   # View logs
   docker logs nodejs-app
   ```

4. **Access the application**:
   - Open browser and go to `http://localhost:5001`

#### Option B: Multi-stage Docker Build

1. **Create optimized Dockerfile**:
   ```dockerfile
   # Multi-stage build for smaller production image
   FROM node:18-alpine AS builder
   
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production && npm cache clean --force
   
   # Production stage
   FROM node:18-alpine AS production
   
   # Install dumb-init for proper signal handling
   RUN apk add --no-cache dumb-init
   
   # Create app directory and user
   WORKDIR /app
   RUN addgroup -g 1001 -S nodejs && adduser -S nodeuser -u 1001
   
   # Copy node_modules from builder stage
   COPY --from=builder --chown=nodeuser:nodejs /app/node_modules ./node_modules
   
   # Copy application files
   COPY --chown=nodeuser:nodejs . .
   
   # Switch to non-root user
   USER nodeuser
   
   EXPOSE 5001
   
   # Use dumb-init for proper signal handling
   ENTRYPOINT ["dumb-init", "--"]
   CMD ["node", "index.js"]
   ```

2. **Build and run**:
   ```bash
   docker build -t nodejs-devops-app:optimized .
   docker run -d -p 5001:5001 --name nodejs-app-opt nodejs-devops-app:optimized
   ```

### Method 4: Docker Compose Deployment

1. **Create docker-compose.yml**:
   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - "5001:5001"
       environment:
         - NODE_ENV=production
         - PORT=5001
       restart: unless-stopped
       healthcheck:
         test: ["CMD", "curl", "-f", "http://localhost:5001/"]
         interval: 30s
         timeout: 10s
         retries: 3
         start_period: 30s
       volumes:
         - app_logs:/app/logs
   
   volumes:
     app_logs:
   ```

2. **Deploy with Docker Compose**:
   ```bash
   # Build and start
   docker-compose up -d
   
   # View logs
   docker-compose logs -f
   
   # Scale the application
   docker-compose up -d --scale app=3
   
   # Stop and remove
   docker-compose down
   ```

### Method 5: Production Deployment with PM2

#### Install PM2
```bash
npm install -g pm2
```

#### Create ecosystem.config.js
```javascript
module.exports = {
  apps: [{
    name: 'nodejs-devops-app',
    script: 'index.js',
    instances: 'max', // Use all CPU cores
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development',
      PORT: 5001
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 5001
    },
    log_file: 'logs/combined.log',
    out_file: 'logs/out.log',
    error_file: 'logs/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm Z'
  }]
};
```

#### Deploy with PM2
```bash
# Start application
pm2 start ecosystem.config.js --env production

# Monitor
pm2 monit

# View logs
pm2 logs

# Restart
pm2 restart nodejs-devops-app

# Stop
pm2 stop nodejs-devops-app
```

### Method 6: Cloud Deployment

#### Deploy to Heroku

1. **Create Procfile**:
   ```
   web: node index.js
   ```

2. **Update package.json**:
   ```json
   {
     "engines": {
       "node": "18.x",
       "npm": "9.x"
     }
   }
   ```

3. **Deploy**:
   ```bash
   # Install Heroku CLI and login
   heroku create your-app-name
   git push heroku main
   ```

#### Deploy to AWS EC2

1. **Launch EC2 instance and install Node.js**:
   ```bash
   # Amazon Linux 2
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   source ~/.bashrc
   nvm install 18
   nvm use 18
   ```

2. **Deploy application**:
   ```bash
   # Upload files
   scp -i your-key.pem -r . ec2-user@your-instance:/home/ec2-user/app
   
   # SSH and run
   ssh -i your-key.pem ec2-user@your-instance
   cd app
   npm install
   npm start
   ```

#### Deploy to Google Cloud Run

1. **Build and push to Container Registry**:
   ```bash
   gcloud builds submit --tag gcr.io/PROJECT_ID/nodejs-app
   ```

2. **Deploy to Cloud Run**:
   ```bash
   gcloud run deploy --image gcr.io/PROJECT_ID/nodejs-app --port 5001
   ```

#### Deploy to Digital Ocean App Platform

1. **Create .do/app.yaml**:
   ```yaml
   name: nodejs-devops-app
   services:
   - name: web
     source_dir: /
     github:
       repo: your-username/your-repo
       branch: main
     run_command: node index.js
     environment_slug: node-js
     instance_count: 1
     instance_size_slug: basic-xxs
     http_port: 5001
     envs:
     - key: NODE_ENV
       value: production
   ```

### Method 7: Kubernetes Deployment

1. **Create deployment.yaml**:
   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: nodejs-app
     labels:
       app: nodejs-app
   spec:
     replicas: 3
     selector:
       matchLabels:
         app: nodejs-app
     template:
       metadata:
         labels:
           app: nodejs-app
       spec:
         containers:
         - name: nodejs-app
           image: nodejs-devops-app:latest
           ports:
           - containerPort: 5001
           env:
           - name: NODE_ENV
             value: "production"
           - name: PORT
             value: "5001"
           resources:
             requests:
               memory: "64Mi"
               cpu: "250m"
             limits:
               memory: "128Mi"
               cpu: "500m"
           livenessProbe:
             httpGet:
               path: /
               port: 5001
             initialDelaySeconds: 30
             periodSeconds: 10
           readinessProbe:
             httpGet:
               path: /
               port: 5001
             initialDelaySeconds: 5
             periodSeconds: 5
   ---
   apiVersion: v1
   kind: Service
   metadata:
     name: nodejs-app-service
   spec:
     selector:
       app: nodejs-app
     ports:
     - port: 80
       targetPort: 5001
     type: LoadBalancer
   ```

2. **Deploy to Kubernetes**:
   ```bash
   kubectl apply -f deployment.yaml
   kubectl get pods
   kubectl get services
   ```

## 🔧 Development Setup

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
NODE_ENV=development
PORT=5001
LOG_LEVEL=debug
```

### Install dotenv for environment variables
```bash
npm install dotenv
```

### Enhanced index.js with environment variables
```javascript
require('dotenv').config();
const express = require('express');

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Basic logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Main route
app.get('/', (req, res) => {
  res.send('<h2>Hello Aspiring DevOps Engineers!</h2>');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
```

### Package.json Scripts Enhancement
```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "docker:build": "docker build -t nodejs-devops-app .",
    "docker:run": "docker run -p 5001:5001 nodejs-devops-app"
  }
}
```

## 🛠️ Code Analysis

### Application Structure

| Component | Purpose | Lines |
|-----------|---------|-------|
| **Express Setup** | Initialize Express application | 1-3 |
| **Route Definition** | Define HTTP endpoints | 5-7 |
| **Server Configuration** | Configure port and startup | 10-12 |

### Node.js Features Demonstrated

- **CommonJS Modules**: `require()` for module imports
- **Environment Variables**: `process.env.PORT` for configuration
- **Arrow Functions**: ES6 syntax for callback functions
- **Template Literals**: String interpolation for logging
- **Callback Functions**: Express route handlers

### Express.js Features

- **HTTP Server**: Built-in HTTP server functionality
- **Routing**: Simple GET route definition
- **Middleware**: Extensible middleware system
- **Response Methods**: `res.send()` for HTML responses

## 🔍 Configuration Details

### Server Configuration
- **Default Port**: 5001
- **Environment Port**: Configurable via `PORT` environment variable
- **Content-Type**: `text/html` for the main route
- **HTTP Methods**: GET request handling

### Performance Considerations
- **Single-threaded**: Node.js event loop
- **Non-blocking I/O**: Asynchronous operations
- **Memory Usage**: Minimal footprint
- **Startup Time**: Fast application initialization

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   # Find process using port
   netstat -ano | findstr :5001  # Windows
   lsof -i :5001               # Linux/macOS
   
   # Kill process or use different port
   PORT=3000 node index.js
   ```

2. **Module not found errors**:
   ```bash
   # Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Docker build failures**:
   ```bash
   # Clear Docker cache
   docker system prune -a
   docker build --no-cache -t nodejs-devops-app .
   ```

4. **Permission denied (Docker)**:
   ```bash
   # Add user to docker group (Linux)
   sudo usermod -aG docker $USER
   # Log out and back in
   ```

## 🔒 Security Considerations

### Production Security

1. **Use Non-root User in Docker**:
   ```dockerfile
   USER nodeuser
   ```

2. **Environment Variables**:
   ```bash
   # Never commit secrets to version control
   echo "*.env" >> .gitignore
   ```

3. **Dependencies Security**:
   ```bash
   # Audit dependencies
   npm audit
   npm audit fix
   ```

4. **HTTP Security Headers**:
   ```javascript
   const helmet = require('helmet');
   app.use(helmet());
   ```

### Enhanced Security Implementation
```javascript
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Rest of application...
```

## 📚 Learning Objectives

This project demonstrates:
- ✅ **Node.js Fundamentals**: Server-side JavaScript development
- ✅ **Express.js Framework**: Web application framework usage
- ✅ **npm Package Management**: Dependency management and scripts
- ✅ **Environment Configuration**: Environment variable usage
- ✅ **Docker Containerization**: Application containerization
- ✅ **DevOps Practices**: CI/CD pipeline preparation
- ✅ **Cloud Deployment**: Multiple platform deployment strategies
- ✅ **Production Deployment**: PM2 process management

## 🧪 Testing

### Manual Testing
```bash
# Test main endpoint
curl http://localhost:5001/

# Test with different methods
curl -X GET http://localhost:5001/
curl -X POST http://localhost:5001/  # Should return 404

# Load testing with curl
for i in {1..100}; do curl -s http://localhost:5001/ > /dev/null; done
```

### Automated Testing with Jest

1. **Install Jest**:
   ```bash
   npm install --save-dev jest supertest
   ```

2. **Create test file** (`test/app.test.js`):
   ```javascript
   const request = require('supertest');
   const express = require('express');
   
   // Import your app (you'll need to export it from index.js)
   const app = require('../index');
   
   describe('GET /', () => {
     it('should return welcome message', async () => {
       const response = await request(app).get('/');
       expect(response.status).toBe(200);
       expect(response.text).toContain('Hello Aspiring DevOps Engineers!');
     });
   });
   ```

3. **Run tests**:
   ```bash
   npm test
   ```

### Performance Testing
```bash
# Using Apache Bench (if available)
ab -n 1000 -c 10 http://localhost:5001/

# Using Artillery
npm install -g artillery
echo 'config:
  target: "http://localhost:5001"
  phases:
    - duration: 60
      arrivalRate: 10
scenarios:
  - name: "Get homepage"
    requests:
      - get:
          url: "/"' > load-test.yml
artillery run load-test.yml
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow Node.js best practices
- Use ESLint for code linting
- Write tests for new features
- Update documentation for changes
- Use semantic versioning for releases

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Node.js Documentation**: [Node.js Docs](https://nodejs.org/en/docs/)
- **Express.js Documentation**: [Express.js Docs](https://expressjs.com/)
- **Docker Documentation**: [Docker Docs](https://docs.docker.com/)
- **npm Documentation**: [npm Docs](https://docs.npmjs.com/)

For questions about this project, please open an issue or contact the development team.

---

**Happy Coding, DevOps Engineers! 🚀💚**

