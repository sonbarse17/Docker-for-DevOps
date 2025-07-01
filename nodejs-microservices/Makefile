.PHONY: build up down logs clean test lint

# Build all services
build:
	docker-compose build

# Start all services
up:
	docker-compose up -d

# Stop all services
down:
	docker-compose down

# View logs
logs:
	docker-compose logs -f

# Clean up containers, networks, and volumes
clean:
	docker-compose down -v --remove-orphans
	docker system prune -f

# Run tests
test:
	cd services/service1 && npm test

# Run linting
lint:
	cd services/service1 && npm run lint

# Health check
health:
	@echo "Checking service health..."
	@curl -f http://localhost:5001/health || echo "Service1 unhealthy"
	@curl -f http://localhost:6379 || echo "Redis unhealthy"

# Development setup
dev-setup:
	cd services/service1 && npm install
	cd frontend && npm install