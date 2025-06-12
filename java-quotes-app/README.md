# Java Quotes App ☕

A lightweight Java web application that serves inspirational quotes via a REST API. This project demonstrates Java HTTP server capabilities, file I/O operations, and containerization concepts for DevOps learning.

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![HTTP Server](https://img.shields.io/badge/HTTP_Server-Built--in-green?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

## 📖 About

This is a simple Java application that creates an HTTP server serving random inspirational quotes in JSON format. Built with vanilla Java using the built-in `com.sun.net.httpserver` package, it demonstrates core Java concepts including file I/O, HTTP handling, and JSON response generation.

## 🎯 Features

- **HTTP REST API**: Serves quotes via HTTP GET requests
- **JSON Responses**: Returns structured JSON data
- **Random Quote Selection**: Serves different quotes on each request
- **File-based Data**: Loads quotes from external text file
- **Lightweight**: No external dependencies or frameworks
- **Docker Ready**: Easily containerizable for deployment
- **Error Handling**: Graceful handling of file reading errors

## 🚀 Tech Stack

### Core Technologies
- **Java**: Programming language (Java 8+ recommended)
- **Built-in HTTP Server**: `com.sun.net.httpserver.HttpServer`
- **Standard Java Libraries**: File I/O, Collections, Streams API

### Key Java Components
- **HttpServer**: Built-in lightweight HTTP server
- **BufferedReader**: Efficient file reading
- **Streams API**: Modern Java collection processing
- **Random**: Random number generation for quote selection
- **StandardCharsets**: UTF-8 encoding for international characters

### Data Format
- **Input**: Plain text file with one quote per line
- **Output**: JSON formatted responses
- **Encoding**: UTF-8 for full Unicode support

## 📁 Project Structure

```
java-quotes-app/
├── src/
│   └── Main.java          # Main application class
├── quotes.txt             # Inspirational quotes database
└── README.md             # Project documentation
```

## 🔧 Application Architecture

### Main.java - Core Application
- **HTTP Server Setup**: Creates server on port 8000
- **Request Handling**: Processes GET requests to root path
- **Quote Management**: Loads and serves random quotes
- **JSON Response**: Formats quotes as JSON
- **Error Handling**: Manages file reading exceptions

### quotes.txt - Data Source
- **20 Inspirational Quotes**: Curated collection of motivational quotes
- **Famous Authors**: Quotes from Roosevelt, Disney, Jobs, Mandela, etc.
- **Plain Text Format**: One quote per line for easy parsing
- **UTF-8 Encoding**: Supports international characters

## 🌐 API Endpoints

### GET `/`
- **Description**: Returns a random inspirational quote
- **Response Format**: JSON
- **Content-Type**: `application/json`
- **Status Code**: 200 OK

#### Example Request
```bash
curl http://localhost:8000/
```

#### Example Response
```json
{
  "quote": "Believe you can and you're halfway there. – Theodore Roosevelt"
}
```

## 🚀 Deployment Guide

### Method 1: Local Development Setup

#### Prerequisites
- Java Development Kit (JDK) 8 or higher
- Java Runtime Environment (JRE)
- Command line access

#### Steps

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd java-quotes-app
   ```

2. **Verify Java installation**:
   ```bash
   java -version
   javac -version
   ```

3. **Compile the application**:
   ```bash
   # Navigate to src directory
   cd src
   
   # Compile Java file
   javac Main.java
   
   # Return to project root
   cd ..
   ```

4. **Run the application**:
   ```bash
   # Run from project root (ensures quotes.txt is found)
   java -cp src Main
   ```

5. **Access the application**:
   - API endpoint: `http://localhost:8000/`
   - Test with curl: `curl http://localhost:8000/`

### Method 2: JAR Package Deployment

#### Create JAR File

1. **Compile and package**:
   ```bash
   # Compile the source
   javac -d build src/Main.java
   
   # Create JAR file
   jar cfe quotes-app.jar Main -C build .
   
   # Copy quotes.txt to same directory as JAR
   cp quotes.txt .
   ```

2. **Run JAR file**:
   ```bash
   java -jar quotes-app.jar
   ```

### Method 3: Docker Deployment

#### Prerequisites
- Docker installed on your system
- Basic Docker knowledge

#### Option A: Basic Docker Deployment

1. **Create a Dockerfile**:
   ```dockerfile
   # Use official OpenJDK runtime as base image
   FROM openjdk:11-jre-slim
   
   # Set working directory in container
   WORKDIR /app
   
   # Copy source files
   COPY src/Main.java /app/
   COPY quotes.txt /app/
   
   # Compile Java application
   RUN javac Main.java
   
   # Expose port 8000
   EXPOSE 8000
   
   # Run the application
   CMD ["java", "Main"]
   ```

2. **Build the Docker image**:
   ```bash
   docker build -t java-quotes-app .
   ```

3. **Run the container**:
   ```bash
   docker run -d -p 8000:8000 --name quotes-app java-quotes-app
   ```

4. **Access the application**:
   - Open browser and go to `http://localhost:8000`

#### Option B: Multi-stage Docker Build

1. **Create optimized Dockerfile**:
   ```dockerfile
   # Multi-stage build for smaller image
   FROM openjdk:11-jdk-slim as builder
   
   WORKDIR /app
   COPY src/Main.java .
   RUN javac Main.java
   
   # Runtime stage
   FROM openjdk:11-jre-slim
   
   WORKDIR /app
   
   # Copy compiled class from builder stage
   COPY --from=builder /app/Main.class .
   COPY quotes.txt .
   
   # Create non-root user for security
   RUN useradd -r -u 1000 appuser
   USER appuser
   
   EXPOSE 8000
   CMD ["java", "Main"]
   ```

2. **Build and run**:
   ```bash
   docker build -t java-quotes-app:optimized .
   docker run -d -p 8000:8000 --name quotes-app-opt java-quotes-app:optimized
   ```

### Method 4: Docker Compose Deployment

1. **Create docker-compose.yml**:
   ```yaml
   version: '3.8'
   services:
     quotes-app:
       build: .
       ports:
         - "8000:8000"
       restart: unless-stopped
       healthcheck:
         test: ["CMD", "curl", "-f", "http://localhost:8000/"]
         interval: 30s
         timeout: 10s
         retries: 3
         start_period: 40s
   ```

2. **Deploy with Docker Compose**:
   ```bash
   docker-compose up -d
   ```

3. **Scale the application**:
   ```bash
   docker-compose up -d --scale quotes-app=3
   ```

### Method 5: Cloud Deployment

#### Deploy to AWS EC2

1. **Launch EC2 instance with Java**:
   ```bash
   # Install Java on Amazon Linux
   sudo yum update -y
   sudo yum install java-11-amazon-corretto -y
   ```

2. **Deploy application**:
   ```bash
   # Upload files to EC2
   scp -i your-key.pem -r . ec2-user@your-instance:/home/ec2-user/quotes-app
   
   # SSH and run
   ssh -i your-key.pem ec2-user@your-instance
   cd quotes-app
   javac src/Main.java
   java -cp src Main
   ```

#### Deploy to Google Cloud Run

1. **Build and push to Container Registry**:
   ```bash
   gcloud builds submit --tag gcr.io/PROJECT_ID/quotes-app
   ```

2. **Deploy to Cloud Run**:
   ```bash
   gcloud run deploy --image gcr.io/PROJECT_ID/quotes-app --port 8000
   ```

#### Deploy to Heroku

1. **Create Procfile**:
   ```
   web: java -cp src Main
   ```

2. **Deploy**:
   ```bash
   heroku create your-quotes-app
   git push heroku main
   ```

### Method 6: Kubernetes Deployment

1. **Create deployment.yaml**:
   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: quotes-app
   spec:
     replicas: 3
     selector:
       matchLabels:
         app: quotes-app
     template:
       metadata:
         labels:
           app: quotes-app
       spec:
         containers:
         - name: quotes-app
           image: java-quotes-app:latest
           ports:
           - containerPort: 8000
           livenessProbe:
             httpGet:
               path: /
               port: 8000
             initialDelaySeconds: 30
             periodSeconds: 10
   ---
   apiVersion: v1
   kind: Service
   metadata:
     name: quotes-app-service
   spec:
     selector:
       app: quotes-app
     ports:
     - port: 80
       targetPort: 8000
     type: LoadBalancer
   ```

2. **Deploy to Kubernetes**:
   ```bash
   kubectl apply -f deployment.yaml
   ```

## 🔧 Development Setup

### Enhanced Build Configuration

#### Maven Configuration (Optional)
Create `pom.xml` for dependency management:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <groupId>com.example</groupId>
    <artifactId>quotes-app</artifactId>
    <version>1.0.0</version>
    <packaging>jar</packaging>
    
    <properties>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
            </plugin>
        </plugins>
    </build>
</project>
```

#### Gradle Configuration (Alternative)
Create `build.gradle`:
```gradle
plugins {
    id 'java'
    id 'application'
}

group = 'com.example'
version = '1.0.0'
java.sourceCompatibility = JavaVersion.VERSION_11

application {
    mainClassName = 'Main'
}

task fatJar(type: Jar) {
    manifest {
        attributes 'Main-Class': 'Main'
    }
    from {
        configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) }
    }
    with jar
}
```

### Environment Configuration

#### Configurable Port
Enhanced `Main.java` with environment variables:
```java
public class Main {
    private static final int DEFAULT_PORT = 8000;
    
    public static void main(String[] args) throws IOException {
        // Get port from environment variable or use default
        int port = Integer.parseInt(System.getenv().getOrDefault("PORT", String.valueOf(DEFAULT_PORT)));
        
        // Rest of the application logic...
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        // ...
    }
}
```

## 🛠️ Code Analysis

### Application Components

| Component | Purpose | Key Features |
|-----------|---------|---------------|
| **HttpServer** | Web server | Built-in Java HTTP server |
| **Quote Loading** | Data management | File I/O with error handling |
| **Random Selection** | Business logic | Random quote generation |
| **JSON Response** | API format | Structured data output |
| **Error Handling** | Reliability | Graceful failure management |

### Method Breakdown

| Method | Purpose | Parameters | Return Type |
|--------|---------|------------|-------------|
| `main()` | Application entry point | String[] args | void |
| `loadQuotesFromFile()` | Load quotes from file | String filename | List<String> |
| `getRandomQuote()` | Select random quote | None | String |

### Java Features Demonstrated

- **Lambda Expressions**: HTTP request handling
- **Streams API**: File processing with `collect(Collectors.toList())`
- **Try-with-resources**: Automatic resource management
- **Modern Java I/O**: BufferedReader and FileReader
- **Collections Framework**: List operations
- **Exception Handling**: IOException management

## 🔍 Configuration Details

### Server Configuration
- **Port**: 8000 (configurable via environment variable)
- **Host**: All interfaces (0.0.0.0)
- **Protocol**: HTTP/1.1
- **Content-Type**: application/json
- **Encoding**: UTF-8

### Application Configuration
- **Quotes File**: quotes.txt (must be in working directory)
- **Response Format**: JSON with "quote" field
- **Random Seed**: System-generated (different each run)

## 🐛 Troubleshooting

### Common Issues

1. **Port 8000 Already in Use**:
   ```bash
   # Find process using port
   netstat -an | findstr :8000  # Windows
   lsof -i :8000              # Linux/macOS
   
   # Use different port
   set PORT=8080 && java -cp src Main  # Windows
   PORT=8080 java -cp src Main         # Linux/macOS
   ```

2. **quotes.txt Not Found**:
   ```bash
   # Ensure you're running from project root
   ls quotes.txt  # Should show the file
   java -cp src Main
   ```

3. **Compilation Errors**:
   ```bash
   # Check Java version
   java -version
   
   # Ensure JDK is installed (not just JRE)
   javac -version
   ```

4. **JSON Response Issues**:
   ```bash
   # Test with curl to see raw response
   curl -v http://localhost:8000/
   ```

## 🔒 Security Considerations

### Production Enhancements

1. **Input Validation**: Validate file paths and content
2. **Error Responses**: Don't expose internal errors to clients
3. **Rate Limiting**: Implement request throttling
4. **HTTPS**: Use reverse proxy for SSL termination
5. **Resource Limits**: Set memory and CPU constraints

### Enhanced Security Implementation
```java
// Enhanced error handling
private static void handleRequest(HttpExchange exchange) {
    try {
        String quote = getRandomQuote();
        if (quote == null) {
            sendErrorResponse(exchange, 500, "Service temporarily unavailable");
            return;
        }
        sendJsonResponse(exchange, quote);
    } catch (Exception e) {
        logger.error("Request handling failed", e);
        sendErrorResponse(exchange, 500, "Internal server error");
    }
}
```

## 📚 Learning Objectives

This project demonstrates:
- ✅ **Java HTTP Server** implementation
- ✅ **File I/O Operations** with proper error handling
- ✅ **JSON Response** generation
- ✅ **REST API** design principles
- ✅ **Docker Containerization** for Java applications
- ✅ **Modern Java Features** (Streams, Lambda expressions)
- ✅ **Error Handling** best practices
- ✅ **Resource Management** with try-with-resources

## 🧪 Testing

### Manual Testing
```bash
# Basic functionality test
curl http://localhost:8000/

# Multiple requests to verify randomness
for i in {1..5}; do curl http://localhost:8000/; echo; done

# Response time test
time curl http://localhost:8000/

# Header verification
curl -I http://localhost:8000/
```

### Load Testing
```bash
# Using Apache Bench (if available)
ab -n 1000 -c 10 http://localhost:8000/

# Using curl in loop
for i in {1..100}; do curl -s http://localhost:8000/ > /dev/null; done
```

### Automated Testing
Create `TestMain.java`:
```java
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;

public class TestMain {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("http://localhost:8000/"))
            .build();
            
        HttpResponse<String> response = client.send(request, 
            HttpResponse.BodyHandlers.ofString());
            
        System.out.println("Status: " + response.statusCode());
        System.out.println("Response: " + response.body());
        
        assert response.statusCode() == 200;
        assert response.body().contains("quote");
        System.out.println("All tests passed!");
    }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Adding New Quotes
To add more quotes, simply edit `quotes.txt`:
1. Add one quote per line
2. Include author attribution with " – Author Name" format
3. Ensure UTF-8 encoding for international characters
4. Test with the application to verify proper loading

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

- **Java Documentation**: [Oracle Java Docs](https://docs.oracle.com/en/java/)
- **HTTP Server Guide**: [Java HttpServer Tutorial](https://docs.oracle.com/javase/8/docs/jre/api/net/httpserver/spec/com/sun/net/httpserver/package-summary.html)
- **Docker Documentation**: [Docker Docs](https://docs.docker.com/)

For questions about this project, please open an issue or contact the development team.

---

**Happy Coding with Java! ☕🚀**

