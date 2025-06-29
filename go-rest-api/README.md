# Go REST API

A production-ready REST API built with Go featuring proper architecture, middleware, configuration management, and Docker support.

## Features

- **Clean Architecture**: Separated concerns with handlers, services, and models
- **Middleware**: Logging, recovery, and CORS support
- **Configuration**: Environment-based configuration management
- **Structured Logging**: Using Go's slog package
- **Graceful Shutdown**: Proper server shutdown handling
- **Health Checks**: Built-in health check endpoint
- **Input Validation**: Request validation with proper error responses
- **Docker Support**: Multi-stage Docker build with security best practices

## API Endpoints

- `GET /` - Web UI for testing the API
- `GET /api/items` - Get all items
- `POST /api/items` - Create a new item
- `GET /health` - Health check endpoint

## Quick Start

### Local Development

```bash
# Run the application
go run cmd/main.go

# The server will start on port 8080
# Visit http://localhost:8080 for the web UI
```

### Docker

```bash
# Build the image
docker build -t go-rest-api .

# Run the container
docker run -p 8080:8080 go-rest-api
```

## Configuration

The application supports environment variables:

- `PORT`: Server port (default: 8080)
- `READ_TIMEOUT`: HTTP read timeout (default: 10s)
- `WRITE_TIMEOUT`: HTTP write timeout (default: 10s)

Copy `.env.example` to `.env` and modify as needed.

## Project Structure

```
.
├── cmd/
│   └── main.go              # Application entry point
├── internal/
│   ├── config/              # Configuration management
│   ├── handler/             # HTTP handlers
│   ├── middleware/          # HTTP middleware
│   ├── models/              # Data models
│   └── service/             # Business logic
├── Dockerfile               # Docker configuration
├── go.mod                   # Go module definition
└── README.md               # This file
```

## API Usage Examples

### Get Items
```bash
curl http://localhost:8080/api/items
```

### Create Item
```bash
curl -X POST http://localhost:8080/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"My Item"}'
```

### Health Check
```bash
curl http://localhost:8080/health
```