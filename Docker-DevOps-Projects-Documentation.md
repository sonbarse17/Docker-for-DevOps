# Docker for DevOps Projects Collection - Complete Documentation

**Created by Sushant Sonbarse** | [GitHub](https://github.com/sonbarse17/)

---

## Table of Contents
1. [Overview](#overview)
2. [Project Architecture](#project-architecture)
3. [Individual Projects](#individual-projects)
4. [Deployment Guide](#deployment-guide)
5. [Technology Stack](#technology-stack)
6. [Best Practices](#best-practices)

---

## Overview

This collection contains 14+ containerized applications demonstrating various technology stacks and DevOps practices. Each project includes modern UI interfaces and can be deployed independently using Docker.

### Key Features
- **Modern UIs**: All projects include responsive web interfaces
- **Individual Deployment**: Each project deploys independently
- **Multiple Tech Stacks**: 14+ different technology demonstrations
- **Containerized Apps**: Docker-ready with optimized Dockerfiles
- **RESTful APIs**: Backend services with API endpoints
- **Database Integration**: MongoDB, MySQL, Redis support

---

## Project Architecture

```
Docker-for-DevOps/
├── python-flask-web/        # Python Flask Web App with UI
├── go-rest-api/            # Go REST API with Web Interface
├── java-quotes-server/     # Java HTTP Server with Quotes API
├── nodejs-todo-app/        # Node.js Todo App with EJS Views
├── nodejs-simple-web/      # Node.js Simple Web with Modern UI
├── python-flask-api/       # Python Flask API Server
├── php-web-app/           # PHP Web App with Dashboard UI
├── nodejs-user-manager/    # Node.js + MongoDB User Manager
├── nodejs-wiki-info/       # Node.js Wikipedia Info App
├── html-2048-game/         # HTML5 2048 Puzzle Game
├── nginx-static-site/      # Nginx Static Website
├── vue-express-fullstack/  # Vue.js + Express Full Stack
├── ruby-rails-web/         # Ruby on Rails Web App
└── nodejs-microservices/   # Node.js Microservices Demo
```

---

## Individual Projects

### 1. Python Flask Web App
**Directory**: `python-flask-web/`
**Port**: 5000
**Technology**: Python Flask

**Features**:
- Flask web framework
- Modern responsive UI
- Health check endpoint
- Docker containerized

**Deployment**:
```bash
docker build -t python-flask-web ./python-flask-web
docker run -p 5000:5000 python-flask-web
```
**Access**: http://localhost:5000

---

### 2. Go REST API
**Directory**: `go-rest-api/`
**Port**: 8080
**Technology**: Go HTTP Server

**Features**:
- Go HTTP server
- REST API endpoints
- Interactive web UI
- Graceful shutdown

**Deployment**:
```bash
docker build -t go-rest-api ./go-rest-api
docker run -p 8080:8080 go-rest-api
```
**Access**: http://localhost:8080

---

### 3. Java Quotes Server
**Directory**: `java-quotes-server/`
**Port**: 8000
**Technology**: Java HTTP Server

**Features**:
- Java HTTP server
- Random quotes API
- JSON responses
- External quotes file

**Deployment**:
```bash
docker build -t java-quotes-server ./java-quotes-server
docker run -p 8000:8000 java-quotes-server
```
**Access**: http://localhost:8000

---

### 4. Node.js Todo App
**Directory**: `nodejs-todo-app/`
**Port**: 8000
**Technology**: Node.js + Express + EJS

**Features**:
- Express.js server
- EJS templating
- Todo CRUD operations
- XSS protection

**Deployment**:
```bash
docker build -t nodejs-todo-app ./nodejs-todo-app
docker run -p 8000:8000 nodejs-todo-app
```
**Access**: http://localhost:8000

---

### 5. Node.js Simple Web
**Directory**: `nodejs-simple-web/`
**Port**: 3000
**Technology**: Node.js + Express

**Features**:
- Express.js server
- Modern gradient design
- Interactive elements
- DevOps themed

**Deployment**:
```bash
docker build -t nodejs-simple-web ./nodejs-simple-web
docker run -p 3000:3000 nodejs-simple-web
```
**Access**: http://localhost:3000

---

### 6. Python Flask API
**Directory**: `python-flask-api/`
**Port**: 9001
**Technology**: Python Flask

**Features**:
- Flask framework
- API endpoints
- Modern UI
- Docker ready

**Deployment**:
```bash
docker build -t python-flask-api ./python-flask-api
docker run -p 9001:9001 python-flask-api
```
**Access**: http://localhost:9001

---

### 7. PHP Web App
**Directory**: `php-web-app/`
**Port**: 8080
**Technology**: PHP + Apache

**Features**:
- PHP backend
- System information dashboard
- Session management
- Database ready

**Deployment**:
```bash
docker build -t php-web-app ./php-web-app
docker run -p 8080:80 php-web-app
```
**Access**: http://localhost:8080

---

### 8. Node.js User Manager
**Directory**: `nodejs-user-manager/`
**Port**: 3000
**Technology**: Node.js + MongoDB

**Features**:
- Express.js server
- MongoDB integration
- User CRUD operations
- Modern responsive UI

**Deployment**:
```bash
docker build -t nodejs-user-manager ./nodejs-user-manager
docker run -p 3000:3000 nodejs-user-manager
```
**Access**: http://localhost:3000

---

### 9. Node.js Wiki Info
**Directory**: `nodejs-wiki-info/`
**Port**: 3000
**Technology**: Node.js + Wikipedia API

**Features**:
- Express.js server
- Wikipedia API integration
- EJS templating
- Person information lookup

**Deployment**:
```bash
docker build -t nodejs-wiki-info ./nodejs-wiki-info
docker run -p 3000:3000 nodejs-wiki-info
```
**Access**: http://localhost:3000

---

### 10. HTML5 2048 Game
**Directory**: `html-2048-game/`
**Port**: 80
**Technology**: HTML5 + CSS3 + JavaScript

**Features**:
- HTML5 game
- Touch/keyboard controls
- Score tracking
- Responsive design

**Deployment**:
```bash
docker build -t html-2048-game ./html-2048-game
docker run -p 80:80 html-2048-game
```
**Access**: http://localhost

---

### 11. Nginx Static Site
**Directory**: `nginx-static-site/`
**Port**: 80
**Technology**: Nginx

**Features**:
- Nginx web server
- Static content serving
- High performance
- Production ready

**Deployment**:
```bash
docker build -t nginx-static-site ./nginx-static-site
docker run -p 80:80 nginx-static-site
```
**Access**: http://localhost

---

### 12. Vue Express Fullstack
**Directory**: `vue-express-fullstack/`
**Ports**: 3000 (backend), 8080 (frontend)
**Technology**: Vue.js + Express.js

**Features**:
- Vue.js frontend
- Express.js backend
- Full-stack architecture
- Modern development stack

**Deployment**:
```bash
cd vue-express-fullstack/backend && docker build -t vue-express-backend .
cd ../frontend && docker build -t vue-express-frontend .
docker run -p 3000:3000 vue-express-backend
docker run -p 8080:8080 vue-express-frontend
```

---

### 13. Ruby Rails Web
**Directory**: `ruby-rails-web/`
**Port**: 3000
**Technology**: Ruby on Rails

**Features**:
- Ruby on Rails framework
- MVC architecture
- SQLite database
- Bootstrap styling

**Deployment**:
```bash
docker build -t ruby-rails-web ./ruby-rails-web
docker run -p 3000:3000 ruby-rails-web
```
**Access**: http://localhost:3000

---

### 14. Node.js Microservices
**Directory**: `nodejs-microservices/`
**Port**: 5000
**Technology**: Node.js + TypeScript + Redis

**Features**:
- Microservices architecture
- Multiple Node.js services
- Redis integration
- TypeScript support

**Deployment**:
```bash
cd nodejs-microservices
docker-compose up -d
```
**Services**:
- Service 1: http://localhost:5000
- Service 2: http://localhost:5000

---

## Deployment Guide

### Prerequisites
- Docker installed
- Git (optional)

### Individual Project Deployment
Each project can be deployed independently using Docker:

1. **Build the Docker image**:
   ```bash
   docker build -t <project-name> ./<project-directory>
   ```

2. **Run the container**:
   ```bash
   docker run -p <host-port>:<container-port> <project-name>
   ```

3. **Access the application**:
   Open browser and navigate to `http://localhost:<host-port>`

### Quick Deployment Commands
```bash
# Python Flask Web
docker build -t python-flask-web ./python-flask-web && docker run -p 5000:5000 python-flask-web

# Go REST API
docker build -t go-rest-api ./go-rest-api && docker run -p 8080:8080 go-rest-api

# Java Quotes Server
docker build -t java-quotes-server ./java-quotes-server && docker run -p 8000:8000 java-quotes-server

# Node.js Todo App
docker build -t nodejs-todo-app ./nodejs-todo-app && docker run -p 8000:8000 nodejs-todo-app

# And so on for other projects...
```

---

## Technology Stack

### Programming Languages
- **Python**: Flask web applications and APIs
- **Go**: High-performance HTTP servers
- **Java**: Enterprise-grade applications
- **JavaScript/Node.js**: Full-stack web development
- **PHP**: Traditional web applications
- **Ruby**: Rails web framework
- **TypeScript**: Type-safe JavaScript development

### Frameworks & Libraries
- **Flask**: Python web framework
- **Express.js**: Node.js web framework
- **Vue.js**: Progressive JavaScript framework
- **Ruby on Rails**: Full-stack web framework
- **EJS**: Embedded JavaScript templating

### Databases
- **MongoDB**: NoSQL document database
- **Redis**: In-memory data structure store
- **SQLite**: Lightweight relational database
- **MySQL**: Popular relational database

### Web Servers
- **Nginx**: High-performance web server
- **Apache**: Traditional web server
- **Node.js HTTP**: Built-in HTTP server

### DevOps Tools
- **Docker**: Containerization platform
- **Docker Compose**: Multi-container orchestration

---

## Best Practices

### Docker Best Practices
1. **Multi-stage builds**: Used in production-ready applications
2. **Non-root users**: Security-focused container setup
3. **Health checks**: Application monitoring and reliability
4. **Minimal base images**: Alpine Linux for smaller footprint
5. **Layer optimization**: Efficient Docker image building

### Security Practices
1. **Input validation**: XSS protection and sanitization
2. **Environment variables**: Secure configuration management
3. **Error handling**: Graceful error responses
4. **CORS configuration**: Cross-origin resource sharing

### Development Practices
1. **Responsive design**: Mobile-friendly interfaces
2. **RESTful APIs**: Standard HTTP methods and status codes
3. **Code organization**: Modular and maintainable structure
4. **Documentation**: Comprehensive README files

### Performance Optimization
1. **Caching strategies**: Redis integration
2. **Static asset serving**: Nginx optimization
3. **Database connections**: Efficient connection management
4. **Resource monitoring**: Health check endpoints

---

## Project Summary

| Project | Technology | Port | UI | Database |
|---------|------------|------|----|---------| 
| python-flask-web | Python Flask | 5000 | ✅ | - |
| go-rest-api | Go HTTP | 8080 | ✅ | - |
| java-quotes-server | Java | 8000 | ✅ | File |
| nodejs-todo-app | Node.js + EJS | 8000 | ✅ | Memory |
| nodejs-simple-web | Node.js | 3000 | ✅ | - |
| python-flask-api | Python Flask | 9001 | ✅ | - |
| php-web-app | PHP + Apache | 8080 | ✅ | MySQL |
| nodejs-user-manager | Node.js + MongoDB | 3000 | ✅ | MongoDB |
| nodejs-wiki-info | Node.js + API | 3000 | ✅ | Wikipedia |
| html-2048-game | HTML5 + JS | 80 | ✅ | LocalStorage |
| nginx-static-site | Nginx | 80 | ✅ | - |
| vue-express-fullstack | Vue + Express | 3000/8080 | ✅ | - |
| ruby-rails-web | Ruby on Rails | 3000 | ✅ | SQLite |
| nodejs-microservices | Node.js + Redis | 5000 | ✅ | Redis |

---

## Conclusion

This Docker for DevOps Projects Collection demonstrates comprehensive containerization across multiple technology stacks. Each project showcases modern development practices, responsive UI design, and production-ready Docker configurations.

The collection serves as an excellent learning resource for:
- Docker containerization techniques
- Multi-language development
- Modern web application architecture
- DevOps best practices
- Full-stack development patterns

All projects are independently deployable and include comprehensive documentation for easy setup and deployment.

---

**Created by Sushant Sonbarse** | [GitHub](https://github.com/sonbarse17/)

*Last Updated: 2025*