# Wanderlust - Travel Blog Application

A full-stack travel blog application built with React (frontend) and Node.js (backend), containerized with Docker.

## Features

- User authentication (signup/signin)
- Create and view blog posts
- MongoDB database with Redis caching
- Responsive design with Tailwind CSS
- Docker containerization

## Tech Stack

**Frontend:**
- React 18 with TypeScript
- Vite build tool
- Tailwind CSS
- React Router DOM
- Axios for API calls

**Backend:**
- Node.js with Express
- MongoDB with Mongoose
- Redis for caching
- JWT authentication
- bcryptjs for password hashing

## Quick Start with Docker

1. Clone the repository
2. Run with Docker Compose:
```bash
docker-compose up --build
```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Development Setup

### Prerequisites
- Node.js 18+
- MongoDB
- Redis

### Installation
```bash
# Install all dependencies
npm run installer

# Start development servers
npm start
```

### Individual Services
```bash
# Frontend only
npm run start-frontend

# Backend only  
npm run start-backend
```

## Environment Variables

Copy `.env.example` to `.env` in the backend directory and configure:

```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/wanderlust
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-secret-key-here
CORS_ORIGIN=http://localhost:3000
```

## Testing

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test
```

## Docker Services

- **backend**: Node.js API server (port 5000)
- **frontend**: React app served by nginx (port 3000)
- **mongo**: MongoDB database (port 27017)
- **redis**: Redis cache (port 6379)

## License

This project is licensed under the MIT License.