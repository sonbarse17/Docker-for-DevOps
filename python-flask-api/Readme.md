# Python Flask API

Modern Flask API server with responsive web interface and RESTful endpoints.

## Features
- Flask framework with error handling
- RESTful API endpoints
- Modern responsive UI with gradient design
- Docker ready deployment
- Mobile-friendly interface
- JSON API responses

## API Endpoints
- `GET /` - Main web interface
- `GET /api/status` - Server status and timestamp
- `GET /api/hello` - API greeting endpoint

## Quick Start
```bash
docker build -t python-flask-api .
docker run -p 9001:9001 python-flask-api
```

## Access
- **Web Interface**: http://localhost:9001
- **API Status**: http://localhost:9001/api/status
- **API Hello**: http://localhost:9001/api/hello

## Local Development
```bash
pip install -r requirements.txt
python main.py
```

---
**Created by Sushant Sonbarse** | [GitHub](https://github.com/sonbarse17/)