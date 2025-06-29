# Flask DevOps Application 🐍

A minimal Flask web application designed for DevOps learning and containerization. This project demonstrates basic Flask development, deployment strategies, and Docker containerization concepts.

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Werkzeug](https://img.shields.io/badge/Werkzeug-663399?style=for-the-badge)

## 📖 About

This is a simple Flask web application created for the "DevOps Zero To Hero (Junoon Batch 9)" course. It serves as a foundational project to understand web application development, containerization, and deployment in a DevOps context.

## 🎯 Features

- **Simple Web Server**: Basic Flask application with HTTP endpoints
- **Health Check Endpoint**: Monitoring and health verification
- **Docker Ready**: Optimized for containerization
- **Lightweight**: Minimal dependencies for fast deployment
- **Development Friendly**: Debug mode enabled for local development

## 🚀 Tech Stack

### Core Technologies
- **Python**: Programming language (Python 3.x recommended)
- **Flask 2.2.2**: Lightweight WSGI web application framework
- **Werkzeug 2.2.2**: WSGI utility library for Python

### Development Tools
- **pip**: Package installer for Python
- **Virtual Environment**: Isolated Python environment (recommended)

### Deployment Technologies
- **Docker**: Containerization platform
- **WSGI**: Web Server Gateway Interface
- **HTTP**: Application protocol

## 📁 Project Structure

```
flask-app/
├── app.py              # Main Flask application
├── run.py              # Application runner with configuration
├── requirements.txt    # Python dependencies
└── README.md          # Project documentation
```

## 🔧 Application Architecture

### app.py - Core Application
- **Flask Instance**: Main application object
- **Route Handlers**: HTTP endpoint definitions
- **Business Logic**: Application functionality

### run.py - Application Runner
- **Server Configuration**: Host, port, and debug settings
- **Application Bootstrap**: Entry point for the application

### requirements.txt - Dependencies
- **Flask Framework**: Web application framework
- **Werkzeug**: WSGI utilities and development server

## 🌐 API Endpoints

### GET `/`
- **Description**: Welcome endpoint with course information
- **Response**: Plain text greeting message
- **Example**: `"Hello Dosto, welcome "`

### GET `/health`
- **Description**: Health check endpoint for monitoring
- **Response**: Server status message
- **Example**: `"Server is up and running"`
- **Use Case**: Load balancer health checks, monitoring systems

## 🚀 Deployment Guide

### Method 1: Local Development Setup

#### Prerequisites
- Python 3.7+ installed
- pip package manager
- Virtual environment (recommended)

#### Steps

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd flask-app
   ```

2. **Create virtual environment** (recommended):
   ```bash
   # Windows
   python -m venv venv
   venv\Scripts\activate
   
   # Linux/macOS
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**:
   ```bash
   # Option 1: Using run.py
   python run.py
   
   # Option 2: Using Flask CLI
   export FLASK_APP=app.py  # Linux/macOS
   set FLASK_APP=app.py     # Windows
   flask run --host=0.0.0.0 --port=80
   
   # Option 3: Direct execution
   python -c "from app import app; app.run(debug=True, host='0.0.0.0', port=80)"
   ```

5. **Access the application**:
   - Main page: `http://localhost` or `http://localhost:80`
   - Health check: `http://localhost/health`

### Method 2: Docker Deployment

#### Prerequisites
- Docker installed on your system
- Basic Docker knowledge

#### Option A: Basic Docker Deployment

1. **Create a Dockerfile**:
   ```dockerfile
   # Use official Python runtime as base image
   FROM python:3.9-slim
   
   # Set working directory in container
   WORKDIR /app
   
   # Copy requirements first for better caching
   COPY requirements.txt .
   
   # Install Python dependencies
   RUN pip install --no-cache-dir -r requirements.txt
   
   # Copy application files
   COPY . .
   
   # Expose port 80
   EXPOSE 80
   
   # Run the application
   CMD ["python", "run.py"]
   ```

2. **Build the Docker image**:
   ```bash
   docker build -t flask-devops-app .
   ```

3. **Run the container**:
   ```bash
   docker run -d -p 80:80 --name flask-app flask-devops-app
   ```

4. **Access the application**:
   - Open browser and go to `http://localhost`

#### Option B: Production-Ready Docker

1. **Create optimized Dockerfile**:
   ```dockerfile
   # Multi-stage build for production
   FROM python:3.9-slim as builder
   
   WORKDIR /app
   COPY requirements.txt .
   RUN pip install --user --no-cache-dir -r requirements.txt
   
   FROM python:3.9-slim
   WORKDIR /app
   
   # Copy Python packages from builder stage
   COPY --from=builder /root/.local /root/.local
   
   # Copy application
   COPY . .
   
   # Create non-root user
   RUN useradd --create-home --shell /bin/bash app
   USER app
   
   # Make sure scripts in .local are usable
   ENV PATH=/root/.local/bin:$PATH
   
   EXPOSE 80
   CMD ["python", "run.py"]
   ```

2. **Build and run**:
   ```bash
   docker build -t flask-devops-app:prod .
   docker run -d -p 80:80 --name flask-app-prod flask-devops-app:prod
   ```

### Method 3: Docker Compose Deployment

1. **Create docker-compose.yml**:
   ```yaml
   version: '3.8'
   services:
     flask-app:
       build: .
       ports:
         - "80:80"
       environment:
         - FLASK_ENV=production
       restart: unless-stopped
       healthcheck:
         test: ["CMD", "curl", "-f", "http://localhost/health"]
         interval: 30s
         timeout: 10s
         retries: 3
   ```

2. **Deploy with Docker Compose**:
   ```bash
   docker-compose up -d
   ```

3. **Scale the application** (if needed):
   ```bash
   docker-compose up -d --scale flask-app=3
   ```

### Method 4: Cloud Deployment

#### Deploy to Heroku

1. **Create Procfile**:
   ```
   web: python run.py
   ```

2. **Deploy to Heroku**:
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

#### Deploy to AWS EC2

1. **Launch EC2 instance**
2. **Install Docker**:
   ```bash
   sudo yum update -y
   sudo yum install docker -y
   sudo service docker start
   ```
3. **Deploy application**:
   ```bash
   docker run -d -p 80:80 flask-devops-app
   ```

#### Deploy to Google Cloud Run

1. **Build and push to Container Registry**:
   ```bash
   gcloud builds submit --tag gcr.io/PROJECT_ID/flask-app
   ```

2. **Deploy to Cloud Run**:
   ```bash
   gcloud run deploy --image gcr.io/PROJECT_ID/flask-app --port 80
   ```

### Method 5: Kubernetes Deployment

1. **Create deployment.yaml**:
   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: flask-app
   spec:
     replicas: 3
     selector:
       matchLabels:
         app: flask-app
     template:
       metadata:
         labels:
           app: flask-app
       spec:
         containers:
         - name: flask-app
           image: flask-devops-app:latest
           ports:
           - containerPort: 80
   ---
   apiVersion: v1
   kind: Service
   metadata:
     name: flask-app-service
   spec:
     selector:
       app: flask-app
     ports:
     - port: 80
       targetPort: 80
     type: LoadBalancer
   ```

2. **Deploy to Kubernetes**:
   ```bash
   kubectl apply -f deployment.yaml
   ```

## 🔧 Development Setup

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
FLASK_APP=app.py
FLASK_ENV=development
FLASK_DEBUG=True
PORT=80
HOST=0.0.0.0
```

### Enhanced run.py with Environment Variables
```python
import os
from app import app

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 80))
    host = os.environ.get('HOST', '0.0.0.0')
    debug = os.environ.get('FLASK_DEBUG', 'True').lower() == 'true'
    
    app.run(debug=debug, host=host, port=port)
```

### Adding More Dependencies
For enhanced functionality, consider adding:
```txt
flask==2.2.2
Werkzeug==2.2.2
gunicorn==20.1.0          # Production WSGI server
flask-cors==4.0.0         # Cross-Origin Resource Sharing
python-dotenv==1.0.0      # Environment variable loading
```

## 🛠️ Code Analysis

### Application Structure

| File | Purpose | Key Features |
|------|---------|---------------|
| **app.py** | Main Flask application | Route definitions, business logic |
| **run.py** | Application runner | Server configuration, debug mode |
| **requirements.txt** | Dependencies | Flask, Werkzeug versions |

### Route Analysis

| Route | Method | Purpose | Response Type |
|-------|--------|---------|---------------|
| `/` | GET | Welcome page | Plain text |
| `/health` | GET | Health check | Plain text |

## 🔍 Configuration Details

### Server Configuration
- **Host**: `0.0.0.0` (accepts connections from any IP)
- **Port**: `80` (standard HTTP port)
- **Debug**: `True` (development mode enabled)
- **Protocol**: HTTP

### Flask Configuration
- **Framework**: Flask 2.2.2
- **WSGI**: Werkzeug 2.2.2
- **Environment**: Development (debug enabled)

## 🐛 Troubleshooting

### Common Issues

1. **Port 80 Permission Denied**:
   ```bash
   # Use a different port
   python -c "from app import app; app.run(debug=True, host='0.0.0.0', port=5000)"
   ```

2. **Module Not Found Error**:
   ```bash
   # Ensure virtual environment is activated
   pip install -r requirements.txt
   ```

3. **Docker Build Issues**:
   ```bash
   # Clear Docker cache
   docker system prune -a
   docker build --no-cache -t flask-devops-app .
   ```

## 🔒 Security Considerations

### Development vs Production
- **Debug Mode**: Disable in production (`debug=False`)
- **Secret Key**: Add Flask secret key for sessions
- **HTTPS**: Use reverse proxy (nginx) for SSL termination
- **Input Validation**: Add request validation middleware

### Production Enhancements
```python
# Enhanced app.py for production
from flask import Flask
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-key-change-in-prod')

@app.route('/')
def hello_world():
    return 'Hello Dosto, welcome to DevOps Zero To Hero (Junoon Batch 9)'

@app.route('/health')
def health():
    return {'status': 'healthy', 'message': 'Server is up and running'}

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=80)
```

## 📚 Learning Objectives

This project demonstrates:
- ✅ **Flask Web Framework** basics
- ✅ **Python Web Development** fundamentals
- ✅ **HTTP Protocol** understanding
- ✅ **Docker Containerization** concepts
- ✅ **DevOps Principles** application
- ✅ **Cloud Deployment** strategies
- ✅ **Monitoring & Health Checks** implementation

## 🧪 Testing

### Manual Testing
```bash
# Test main endpoint
curl http://localhost/

# Test health endpoint
curl http://localhost/health

# Test with different methods
curl -X GET http://localhost/
curl -X POST http://localhost/  # Should return 405 Method Not Allowed
```

### Automated Testing
Create `test_app.py`:
```python
import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_hello_world(client):
    response = client.get('/')
    assert response.status_code == 200
    assert b'Hello Dosto' in response.data

def test_health_check(client):
    response = client.get('/health')
    assert response.status_code == 200
    assert b'Server is up and running' in response.data
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

- **Course**: DevOps Zero To Hero (Junoon Batch 9)
- **Framework Documentation**: [Flask Documentation](https://flask.palletsprojects.com/)
- **Docker Documentation**: [Docker Docs](https://docs.docker.com/)

For questions about this project, please open an issue or contact the development team.

---

**Happy Learning & Coding! 🐍🚀**

