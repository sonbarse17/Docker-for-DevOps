# Microservices Web Application

This project is a microservices-based web application featuring 10 individual Node.js/TypeScript services, a React frontend, and a Redis database for caching and data storage. The architecture demonstrates scalable, modular development and is fully containerized for easy deployment.

---

## 📖 Description

Each microservice is responsible for a specific domain or business logic and communicates via RESTful APIs. Redis is used for caching and fast data access, improving overall system performance. The frontend is built with React and interacts with the backend services to provide a seamless user experience.

---

## 🛠️ Tech Stack

### Backend (Microservices)
- **Node.js** (v14+)
- **TypeScript**
- **Express.js** (REST API framework)
- **Redis** (caching, fast data store)
- **Jest** (unit testing, some services)
- **ts-node** (TypeScript execution)
- **Docker** (containerization)

### Frontend
- **React** (TypeScript)
- **Vite** or **Create React App** (depending on setup)
- **Axios** or **fetch** (API calls)

### Database
- **Redis** (in-memory data store, shared among services)

### Orchestration
- **Docker Compose** (multi-container orchestration)

---

## 📁 Project Structure

```
microservices-app/
├── docker-compose.yml         # Orchestration for all services, frontend, and Redis
├── database/
│   └── redis/
│       └── README.md         # Redis setup and usage
├── frontend/
│   ├── public/               # Static assets
│   └── src/
│       ├── App.tsx           # Main React app entry
│       ├── components/       # Reusable React components
│       └── pages/            # Main pages/views
└── services/
    ├── service1/
    │   ├── src/
    │   │   └── index.ts      # Service entry point
    │   ├── package.json
    │   └── README.md
    ├── ...                   # service2/ ... service10/ (same structure)
```

---

## 🚀 Deployment Guide

### Prerequisites

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/)
- Node.js (for local development, not needed for Docker deployment)

---

### 1. Clone the Repository

```sh
git clone <repository-url>
cd microservices-app
```

---

### 2. Build and Deploy with Docker Compose

This will start all microservices, the frontend, and Redis in isolated containers.

```sh
docker-compose up --build
```

- The frontend will be available at: [http://localhost:3000](http://localhost:3000)
- Each microservice will be available on its configured port (see `docker-compose.yml`).
- Redis will be available internally to services as `redis:6379`.

---

### 3. Local Development (Optional)

To run a single service locally (for development/debugging):

```sh
cd services/service1   # or any service directory
npm install
npm start
```

To run the frontend locally:

```sh
cd frontend
npm install
npm start
```

---

### 4. Running Tests

Some services include Jest tests:

```sh
cd services/serviceX
npm test
```

---

### 5. Redis Configuration

- Redis is configured via the official Docker image in `docker-compose.yml`.
- For advanced configuration, edit `database/redis/redis.conf` and mount it in the compose file.

---

## 🌐 API Endpoints

Each service exposes its own RESTful API. Example endpoints:

- `GET /api/service1/resource`
- `POST /api/service2/resource`
- (See each service's README for details)

---

## 🧩 Adding New Services

1. Copy an existing service folder as a template.
2. Update `package.json` and implement your logic in `src/index.ts`.
3. Add the new service to `docker-compose.yml`.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## 📚 References

- [Redis Documentation](https://redis.io/documentation)
- [Express.js](https://expressjs.com/)
- [React](https://react.dev/)
- [Docker Compose](https://docs.docker.com/compose/)