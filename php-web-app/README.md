# Simple PHP Project 🐘

A basic PHP web application demonstrating a clean separation between frontend and backend components, with database integration capabilities. This project follows modern PHP development practices with a clear directory structure.

![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 📖 About

This project provides a foundational structure for building PHP web applications with a focus on maintainability and scalability. It includes database integration, styling, and client-side interactivity.

## 🎯 Features

- **Structured Layout**: Clean separation of concerns
- **Database Integration**: MySQL connection handling
- **Responsive Design**: Mobile-friendly CSS styling
- **Configuration Management**: Centralized config files
- **Docker Ready**: Containerization support

## 🚀 Tech Stack

### Backend
- **PHP**: Server-side scripting
- **MySQL**: Database management
- **Apache/Nginx**: Web server

### Frontend
- **HTML5**: Structure and content
- **CSS3**: Styling and layout
- **JavaScript**: Client-side functionality

## 📁 Project Structure

```
simple-php-project/
├── public/
│   ├── index.php          # Application entry point
│   ├── css/
│   │   └── style.css      # Frontend styling
│   └── js/
│       └── script.js      # Client-side scripts
├── src/
│   ├── backend.php        # Business logic
│   └── db/
│       └── database.php   # Database operations
├── config/
│   └── config.php         # Configuration settings
└── README.md             # Documentation
```

## 🚀 Deployment Guide

### Method 1: Local Development Setup

#### Prerequisites
- PHP 7.4 or higher
- MySQL/MariaDB
- Apache/Nginx web server
- Composer (optional but recommended)

#### Steps

1. **Clone the repository**:
```bash
git clone <repository-url>
cd simple-php-project
```

2. **Configure database**:
```php
// Edit config/config.php
define('DB_HOST', 'localhost');
define('DB_USER', 'your_username');
define('DB_PASS', 'your_password');
define('DB_NAME', 'your_database_name');
```

3. **Set up web server**:
- For Apache, ensure mod_rewrite is enabled
- Point document root to the `public` directory
- Default port: 80 (HTTP)

4. **Access the application**:
- Open browser and visit `http://localhost/simple-php-project/public`

### Method 2: Docker Deployment 

#### Prerequisites
- Docker installed
- Docker Compose (recommended)

#### Option A: Basic Docker Setup

1. **Create Dockerfile**:
```dockerfile
FROM php:8.0-apache

# Install dependencies
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Copy application files
COPY . /var/www/html/

# Set permissions
RUN chown -R www-data:www-data /var/www/html

# Expose port 80
EXPOSE 80
```

2. **Build and run**:
```bash
# Build image
docker build -t simple-php-app .

# Run container
docker run -d -p 8080:80 --name php-app simple-php-app
```

#### Option B: Docker Compose Setup

1. **Create docker-compose.yml**:
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:80"
    volumes:
      - .:/var/www/html
    depends_on:
      - db
  
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
      MYSQL_DATABASE: your_database_name
      MYSQL_USER: your_username
      MYSQL_PASSWORD: your_password
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

2. **Deploy with Docker Compose**:
```bash
docker-compose up -d
```

3. **Access the application**:
- Open browser and visit `http://localhost:8080`

## 🔧 Development

- Modify `public/css/style.css` for styling changes
- Update `src/backend.php` for business logic
- Manage database operations in `src/db/database.php`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For questions and support, please open an issue in the repository.

---

**Happy Coding! 🚀**