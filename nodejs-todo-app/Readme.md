# Node.js Todo List Application 📝

A simple and clean Todo List application built with Node.js and Express.js. Features include adding, editing, and deleting todo items with a user-friendly interface and XSS protection.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge)

## 📖 About

This Todo List application provides basic task management functionality with a clean interface. It uses server-side rendering with EJS templates and includes security features like XSS protection.

## 🎯 Features

- ✨ Add new todo items
- 📝 Edit existing todos
- 🗑️ Delete todos
- 🛡️ XSS protection
- 🎨 Clean, responsive UI
- ✅ Form validation

## 🚀 Tech Stack

### Core Technologies
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **EJS**: Template engine
- **Body Parser**: Request parsing
- **Method Override**: Support for PUT/DELETE requests
- **Sanitizer**: XSS protection

### Development Tools
- **Mocha**: Testing framework
- **Chai**: Assertion library
- **Supertest**: HTTP testing
- **NYC**: Code coverage

## 📁 Project Structure

```
node-todo/
├── app.js              # Main application file
├── package.json        # Project metadata and dependencies
├── test.js            # Test suite
└── views/             # EJS templates
    ├── edititem.ejs   # Edit item page
    └── todo.ejs       # Main todo list page
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v12 or higher)
- npm (comes with Node.js)

### Local Development Setup

1. **Clone the repository**:
```bash
git clone <repository-url>
cd node-todo
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the application**:
```bash
npm start
```

4. **Access the application**:
- Open browser and navigate to `http://localhost:8000/todo`

### 🐳 Docker Deployment

1. **Create Dockerfile**:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]
```

2. **Build and run with Docker**:
```bash
# Build image
docker build -t node-todo-app .

# Run container
docker run -d -p 8000:8000 --name todo-app node-todo-app
```

3. **Access the application**:
- Open browser and navigate to `http://localhost:8000/todo`

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/todo` | GET | Display todo list |
| `/todo/add` | POST | Add new todo item |
| `/todo/delete/:id` | GET | Delete specific todo |
| `/todo/:id` | GET | View edit page for todo |
| `/todo/edit/:id` | PUT | Update specific todo |

## 🔒 Security

- XSS Protection via `sanitizer`
- Input sanitization for all user inputs
- Method override security for PUT requests

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For support and questions, please open an issue in the repository.

---

**Happy Task Managing! 📝✨**