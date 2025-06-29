# Vue.js & Express.js Full Stack Application 🚀

A modern full-stack web application built with Vue.js 3 for the frontend and Express.js for the backend. This application demonstrates the integration of a Vue.js single-page application with a RESTful Express.js backend service.

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## 📖 About

This project serves as a template for building full-stack JavaScript applications using Vue.js and Express.js. It includes a modern development setup with hot-reloading, production builds, and a clean project structure.

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3**: Progressive JavaScript framework
- **Vue Router 4**: Official router for Vue.js
- **Axios**: HTTP client for API requests
- **@vue/cli**: Vue.js development tools

### Backend
- **Express.js**: Web application framework
- **CORS**: Cross-Origin Resource Sharing middleware
- **Body Parser**: Request parsing middleware
- **Nodemon**: Development auto-reload utility

## 📁 Project Structure

```
my-vue-express-app/
├── backend/                # Express backend
│   ├── src/
│   │   └── app.js         # Express application entry
│   └── package.json       # Backend dependencies
├── frontend/              # Vue frontend
│   ├── public/
│   │   └── index.html    # HTML entry point
│   ├── src/
│   │   ├── App.vue       # Root Vue component
│   │   └── main.js       # Vue application entry
│   └── package.json      # Frontend dependencies
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:
```bash
git clone <repository-url>
cd my-vue-express-app
```

2. **Install backend dependencies**:
```bash
cd backend
npm install
```

3. **Install frontend dependencies**:
```bash
cd ../frontend
npm install
```

## 🌐 Running the Application

### Development Mode

1. **Start the backend server**:
```bash
cd backend
npm run dev  # Runs with nodemon on port 3000
```

2. **Start the frontend development server**:
```bash
cd frontend
npm run serve  # Runs with hot-reload on port 8080
```

### Production Mode

1. **Build the frontend**:
```bash
cd frontend
npm run build
```

2. **Start the production server**:
```bash
cd ../backend
npm start
```

## 📡 Ports & URLs

- **Frontend Development**: `http://localhost:8080`
- **Backend API**: `http://localhost:3000`
- **API Endpoints**:
  - GET `/api`: Test endpoint returning a welcome message

## 🔧 Development

### Frontend Development
- Source code in `frontend/src`
- Vue components in `.vue` files
- Styles in component files or CSS files
- Static assets in `frontend/public`

### Backend Development
- Source code in `backend/src`
- API routes in `app.js`
- Middleware configuration in `app.js`
- Environment variables via `process.env`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, please open an issue in the repository or contact the development team.

---

**Happy Coding! 💻✨**