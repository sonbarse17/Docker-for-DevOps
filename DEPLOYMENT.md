# Docker for DevOps - Deployment Guide

## Overview
This repository contains multiple containerized applications ready for deployment. All applications have been fixed for bugs, updated dependencies, and configured with proper Dockerfiles.

## Quick Start

### Prerequisites
- Docker installed
- Docker Compose installed

### Deploy All Applications
```bash
# Linux/Mac
./deploy.sh

# Windows
deploy.bat
```

## Individual Application Deployment

### Simple Applications
```bash
# Flask App
cd flask-app && docker build -t flask-app . && docker run -p 5000:5000 flask-app

# Go Backend
cd go-backend-app && docker build -t go-backend . && docker run -p 8080:8080 go-backend

# Java Quotes
cd java-quotes-app && docker build -t java-quotes . && docker run -p 8000:8000 java-quotes

# Node Todo
cd node-todo && docker build -t node-todo . && docker run -p 8001:8000 node-todo

# Python Project
cd python-project-2 && docker build -t python-project . && docker run -p 9001:9001 python-project

# PHP Project
cd simple-php-project && docker build -t php-project . && docker run -p 8080:80 php-project
```

### Complex Applications
```bash
# Vue Express App
cd my-vue-express-app && docker-compose up -d

# Wanderlust (Full Stack)
cd wanderlust && docker-compose up -d

# Microservices App
cd microservices-app && docker-compose up -d
```

## Application URLs

| Application | URL | Description |
|-------------|-----|-------------|
| Flask App | http://localhost:5000 | Simple Flask web app |
| Go Backend | http://localhost:8080 | Go REST API |
| Java Quotes | http://localhost:8000 | Java quotes service |
| Node Todo | http://localhost:8001 | Todo list app |
| Node.js Simple | http://localhost:3001 | Simple Node.js app |
| Python Project | http://localhost:9001 | Flask template app |
| PHP Project | http://localhost:8080 | PHP web app |
| 2048 Game | http://localhost:8081 | Classic 2048 puzzle game |
| Nginx Project | http://localhost:8082 | Static website |
| Vue Express | http://localhost:80 | Vue.js frontend |
| Wanderlust | http://localhost:3000 | Travel blog app |
| Microservices | http://localhost:3000 | Microservices demo |

## Fixed Issues

### Dependencies Updated
- All Node.js packages updated to latest stable versions
- Python Flask updated to 3.x
- Go modules updated
- Security vulnerabilities patched

### Bugs Fixed
- Port conflicts resolved
- Missing configuration files added
- Environment variables properly configured
- Database connections fixed
- CORS issues resolved

### Docker Optimizations
- Multi-stage builds for production
- Security best practices implemented
- Non-root user configurations
- Proper health checks
- Volume management

## Environment Variables

### Wanderlust App
Copy `.env.example` to `.env` and configure:
```
NODE_ENV=production
MONGODB_URI=mongodb://mongo:27017/wanderlust
REDIS_URL=redis://redis:6379
JWT_SECRET=your-secret-key
```

## Troubleshooting

### Common Issues
1. **Port conflicts**: Stop other services using the same ports
2. **Docker daemon**: Ensure Docker is running
3. **Permissions**: Run with appropriate permissions
4. **Memory**: Ensure sufficient Docker memory allocation

### Logs
```bash
# View logs for specific service
docker-compose logs [service-name]

# Follow logs
docker-compose logs -f [service-name]
```

### Cleanup
```bash
# Stop all services
docker-compose down

# Remove all containers and images
docker-compose down --rmi all --volumes
```

## Production Deployment

### Security Considerations
- Change default passwords
- Use environment-specific configurations
- Enable HTTPS
- Configure proper firewall rules
- Regular security updates

### Scaling
```bash
# Scale specific services
docker-compose up -d --scale service-name=3
```

### Monitoring
- Use Docker health checks
- Implement logging aggregation
- Set up monitoring dashboards
- Configure alerts

## Support
For issues or questions, check the individual README files in each application directory.