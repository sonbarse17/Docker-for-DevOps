# Little Fashion - Nginx Static Site

A modern, responsive fashion e-commerce website template served by Nginx web server with Docker containerization.

## 🚀 Features

- **High Performance**: Optimized Nginx configuration with gzip compression
- **Security**: Security headers, non-root user, and best practices
- **Responsive Design**: Bootstrap 5 based responsive layout
- **Modern UI**: Clean and professional fashion template
- **Docker Ready**: Containerized with multi-stage build
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📋 Prerequisites

- Docker installed on your system
- Basic knowledge of Docker commands

## 🛠️ Quick Start

### Development
```bash
# Clone the repository
git clone <repository-url>
cd nginx-static-site

# Build the Docker image
docker build -t little-fashion .

# Run the container
docker run -d -p 8080:8080 --name little-fashion-app little-fashion
```

### Production
```bash
# Build with production optimizations
docker build -t little-fashion:prod .

# Run with restart policy
docker run -d \
  --name little-fashion-prod \
  --restart unless-stopped \
  -p 8080:8080 \
  little-fashion:prod
```

## 🌐 Access

Visit: http://localhost:8080

## 📁 Project Structure

```
├── css/                 # Stylesheets
├── js/                  # JavaScript files
├── images/              # Image assets
├── fonts/               # Font files
├── *.html              # HTML pages
├── Dockerfile          # Docker configuration
├── nginx.conf          # Nginx server configuration
└── README.md           # Project documentation
```

## 🔧 Configuration

### Nginx Configuration
- Runs on port 8080 (non-privileged)
- Gzip compression enabled
- Security headers configured
- Static asset caching (1 year)
- Error page handling

### Docker Configuration
- Based on nginx:alpine for minimal size
- Non-root user for security
- Optimized layer caching
- Multi-stage build ready

## 🚀 Deployment

### Docker Compose (Recommended)
```yaml
version: '3.8'
services:
  little-fashion:
    build: .
    ports:
      - "8080:8080"
    restart: unless-stopped
    container_name: little-fashion
```

## 🔒 Security Features

- Non-root user execution
- Security headers (XSS, CSRF, etc.)
- Minimal attack surface
- No sensitive data exposure

## 📊 Performance Optimizations

- Gzip compression
- Static asset caching
- Optimized Docker layers
- Minimal base image

---
**Created by Sushant Sonbarse** | [GitHub](https://github.com/sonbarse17/)

**Template Credits**: [Tooplate](https://www.tooplate.com/view/2127-little-fashion)