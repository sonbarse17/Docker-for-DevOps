# My Rails App 🛤️

A Ruby on Rails web application demonstrating modern web development practices with a clear separation of concerns between models, views, and controllers (MVC architecture).

![Ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)
![Rails](https://img.shields.io/badge/Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

## 📖 About

This application provides a foundational Rails structure with organized components and a clear project layout, making it ideal for building scalable web applications.

## 🎯 Features

- **MVC Architecture**: Clean separation of business logic, presentation, and data
- **Asset Pipeline**: Integrated handling of JavaScript and CSS assets
- **Database Migrations**: Structured database schema management
- **Mailer Support**: Built-in email functionality
- **Helper Methods**: Reusable view helper functions

## 🚀 Tech Stack

### Core Technologies
- **Ruby**: Programming language
- **Ruby on Rails**: Web application framework
- **SQLite**: Default development database
- **Bundler**: Dependency management

### Frontend
- **HTML/ERB**: View templates
- **CSS**: Styling (via Asset Pipeline)
- **JavaScript**: Client-side interactions

## 📁 Project Structure

```
my-rails-app/
├── app/                    # Application core
│   ├── controllers/        # Request handling logic
│   ├── models/            # Business logic & data models
│   ├── views/             # View templates
│   ├── helpers/           # View helper methods
│   ├── assets/            # Frontend assets
│   │   ├── stylesheets/   # CSS files
│   │   └── javascripts/   # JavaScript files
│   └── mailers/           # Email handling
├── config/                # Configuration files
│   ├── database.yml      # Database configuration
│   └── routes.rb         # URL routing rules
├── db/                    # Database files
│   └── migrate/          # Database migrations
├── public/               # Static files
├── Gemfile              # Ruby dependencies
└── Rakefile             # Utility tasks
```

## 🔧 Setup & Installation

### Prerequisites
- Ruby (recent version)
- Ruby on Rails
- SQLite3
- Bundler

### Installation Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd my-rails-app
```

2. **Install dependencies**
```bash
bundle install
```

3. **Configure database**
```bash
# Edit config/database.yml with your credentials
rails db:setup
rails db:migrate
```

4. **Start the server**
```bash
rails server
```

5. **Access the application**
- Open your browser and visit `http://localhost:3000`

## 🚀 Deployment Guide

### Method 1: Traditional Deployment

1. **Prepare for production**
```bash
RAILS_ENV=production rails assets:precompile
RAILS_ENV=production rails db:migrate
```

2. **Configure production settings**
- Update `config/database.yml` for production
- Set production environment variables
- Configure production web server (Nginx/Apache)

3. **Start the application**
```bash
RAILS_ENV=production rails server
```

### Method 2: Docker Deployment

1. **Create Dockerfile**
```dockerfile
FROM ruby:3.0
WORKDIR /app
COPY Gemfile* ./
RUN bundle install
COPY . .
EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]
```

2. **Build and run**
```bash
docker build -t my-rails-app .
docker run -p 3000:3000 my-rails-app
```

## 🔧 Development

- Modify models in `app/models` for business logic
- Update controllers in `app/controllers` for request handling
- Add views in `app/views` for user interface
- Style your application in `app/assets/stylesheets`
- Add JavaScript in `app/assets/javascripts`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions and support, please open an issue in the repository.

---

**Happy Coding! 🚂✨**