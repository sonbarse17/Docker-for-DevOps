# Python Flask Hello World Application 🐍

A minimalist Flask web application that serves a simple "Hello World" page. This project demonstrates basic Flask setup, HTML templating, and containerization with Docker.

![Python](https://img.shields.io/badge/Python-3.x-blue?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-3.0.0-red?style=for-the-badge&logo=flask&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 📖 About

This is a basic Flask web application that:
- Serves a simple HTML page
- Uses Flask's template engine
- Can be containerized using Docker
- Demonstrates basic web server setup

## 🛠️ Tech Stack

### Core Technologies
- **Python**: Programming language (Python 3.x recommended)
- **Flask 3.0.0+**: Lightweight WSGI web application framework
- **HTML**: Basic template rendering

### Development Tools
- **pip**: Package manager for Python dependencies
- **Virtual Environment**: Isolated Python environment
- **Docker**: Containerization platform (optional)

## 🔧 Project Structure

```
python-project-2/
├── main.py              # Main Flask application
├── requirements.txt     # Python dependencies
├── templates/          
│   └── index.html      # HTML template
└── README.md           # Project documentation
```

## 🚀 Deployment Guide

### Method 1: Local Development Setup

#### Prerequisites
- Python 3.x installed
- pip package manager
- Virtual environment (recommended)

#### Steps

1. **Clone the repository**:
```bash
git clone <repository-url>
cd python-project-2
```

2. **Create and activate virtual environment**:
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
python main.py
```

5. **Access the application**:
- Open browser and navigate to `http://localhost:9001`

### Method 2: Docker Deployment

#### Prerequisites
- Docker installed on your system
- Basic Docker knowledge

#### Option A: Basic Docker Setup

1. **Create a Dockerfile**:
```dockerfile
# Use official Python runtime as base image
FROM python:3.9-slim

# Set working directory in container
WORKDIR /app

# Copy requirements first (for better caching)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy rest of application
COPY . .

# Expose port 9001
EXPOSE 9001

# Run the application
CMD ["python", "main.py"]
```

2. **Build and run container**:
```bash
# Build image
docker build -t flask-hello-app .

# Run container
docker run -d -p 9001:9001 --name flask-hello flask-hello-app
```

3. **Access the application**:
- Open browser and navigate to `http://localhost:9001`

## 📡 Ports & URLs

- **Development Server**: Port 9001
- **Default URL**: `http://localhost:9001`
- **Host**: `0.0.0.0` (accessible from external machines)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For questions and support, please open an issue in the repository.

---

**Happy Coding! 🐍✨**