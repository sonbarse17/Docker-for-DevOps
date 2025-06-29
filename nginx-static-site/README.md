# Little Fashion - Nginx Static Website 👗

A modern, responsive fashion e-commerce website template built with HTML5, CSS3, and JavaScript. This project demonstrates static web development, responsive design principles, and containerization with Nginx for DevOps deployment scenarios.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)

## 📖 About

**Little Fashion** is a professionally designed e-commerce website template created by Tooplate. This project showcases a complete fashion retail website with modern design patterns, responsive layouts, and interactive elements. It's perfect for learning web development, practicing containerization, and understanding static site deployment with Nginx.

## 🎯 Features

- **Responsive Design**: Mobile-first approach with Bootstrap framework
- **Modern UI/UX**: Clean, professional fashion e-commerce interface
- **Interactive Elements**: Slick carousel, smooth animations, and dynamic components
- **Multi-page Structure**: Complete website with 8 different pages
- **Cross-browser Compatibility**: Works across all modern browsers
- **SEO Optimized**: Semantic HTML structure with proper meta tags
- **Fast Loading**: Optimized assets and efficient code structure
- **Accessibility**: ARIA labels and keyboard navigation support

## 🚀 Tech Stack

### Frontend Technologies
- **HTML5**: Semantic markup with modern standards
- **CSS3**: Advanced styling with custom properties and animations
- **JavaScript (ES5/ES6)**: Interactive functionality and DOM manipulation
- **Bootstrap 5**: Responsive grid system and components
- **jQuery 3.x**: DOM manipulation and event handling

### CSS Frameworks & Libraries
- **Bootstrap 5.x**: Responsive framework and component library
- **Bootstrap Icons**: Icon library for UI elements
- **Slick Carousel**: Touch-enabled, responsive carousel
- **Google Fonts (Inter)**: Modern typography

### JavaScript Libraries
- **jQuery**: Fast, small, and feature-rich JavaScript library
- **Bootstrap Bundle**: JavaScript components for Bootstrap
- **Slick.js**: Responsive carousel/slider plugin
- **Headroom.js**: Header visibility management on scroll
- **Custom JS**: Page-specific functionality

### Web Server
- **Nginx**: High-performance web server for static content delivery
- **HTTP/HTTPS**: Standard web protocols
- **Static File Serving**: Optimized for static website deployment

## 📁 Project Structure

```
nginx-project-1/
├── index.html              # Homepage
├── about.html              # About us page
├── products.html           # Products listing page
├── product-detail.html     # Product details page
├── contact.html            # Contact information page
├── faq.html               # Frequently asked questions
├── sign-in.html           # User login page
├── sign-up.html           # User registration page
├── css/                   # Stylesheets directory
│   ├── bootstrap.min.css      # Bootstrap framework
│   ├── bootstrap-icons.css    # Bootstrap icons
│   ├── slick.css             # Slick carousel styles
│   └── tooplate-little-fashion.css # Custom theme styles
├── js/                    # JavaScript files
│   ├── jquery.min.js         # jQuery library
│   ├── bootstrap.bundle.min.js # Bootstrap components
│   ├── slick.min.js          # Slick carousel
│   ├── Headroom.js           # Header scroll effects
│   ├── jQuery.headroom.js    # jQuery Headroom integration
│   └── custom.js             # Custom functionality
├── images/                # Image assets
│   ├── header/               # Header images
│   ├── people/               # People/team photos
│   ├── product/              # Product images
│   ├── slideshow/            # Carousel images
│   └── *.jpeg               # Various image files
├── fonts/                 # Web fonts (if any)
└── README.md             # Project documentation
```

## 🔧 Application Architecture

### Frontend Architecture
- **MVC Pattern**: Separation of concerns with HTML (View), CSS (Style), JS (Controller)
- **Component-based**: Reusable UI components across pages
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Mobile-first**: Responsive design starting from mobile breakpoints

### Page Structure

| Page | Purpose | Key Features |
|------|---------|---------------|
| **index.html** | Homepage | Hero slider, featured products, navigation |
| **about.html** | Company info | Team section, company story, values |
| **products.html** | Product catalog | Product grid, filtering, pagination |
| **product-detail.html** | Product details | Product images, specifications, reviews |
| **contact.html** | Contact info | Contact form, location, social links |
| **faq.html** | Help section | Frequently asked questions, support |
| **sign-in.html** | User login | Authentication form, social login |
| **sign-up.html** | Registration | User registration form, validation |

### CSS Architecture
- **CSS Custom Properties**: Modern variable system for theming
- **BEM Methodology**: Block, Element, Modifier naming convention
- **Mobile-first**: Responsive design approach
- **Component Styling**: Modular CSS organization

### JavaScript Architecture
- **jQuery-based**: DOM manipulation and event handling
- **Plugin Integration**: Slick carousel, Headroom.js
- **Progressive Enhancement**: Graceful degradation support
- **Event-driven**: User interaction handling

## 🌐 Key Features & Functionality

### Interactive Components
- **Hero Slideshow**: Auto-playing carousel with fade transitions
- **Navigation**: Sticky header with scroll effects (Headroom.js)
- **Product Carousel**: Touch-enabled product sliders
- **Responsive Menu**: Mobile-friendly navigation
- **Smooth Scrolling**: Enhanced user experience
- **Loading Animation**: Preloader with spinner

### Design Features
- **Custom Color Scheme**: Orange (#FF4400) primary color
- **Typography**: Inter font family with multiple weights
- **Grid System**: Bootstrap responsive grid
- **Icons**: Bootstrap Icons throughout the interface
- **Animations**: CSS transitions and transforms

## 🚀 Deployment Guide

### Method 1: Local Development Setup

#### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

#### Steps

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd nginx-project-1
   ```

2. **Serve locally** (recommended):
   ```bash
   # Using Python (Python 3)
   python -m http.server 8000
   
   # Using Python (Python 2)
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (with http-server)
   npm install -g http-server
   http-server -p 8000
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Access the website**:
   - Open browser and go to `http://localhost:8000`
   - Or simply open `index.html` directly in browser

### Method 2: Nginx Deployment

#### Prerequisites
- Nginx installed on your system
- Basic Nginx configuration knowledge

#### Option A: Basic Nginx Setup

1. **Install Nginx**:
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install nginx
   
   # CentOS/RHEL
   sudo yum install nginx
   
   # macOS (with Homebrew)
   brew install nginx
   
   # Windows (download from nginx.org)
   ```

2. **Copy files to web root**:
   ```bash
   # Default Nginx web root
   sudo cp -r . /var/www/html/
   
   # Or create custom directory
   sudo mkdir -p /var/www/little-fashion
   sudo cp -r . /var/www/little-fashion/
   ```

3. **Configure Nginx**:
   Create `/etc/nginx/sites-available/little-fashion`:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;
       
       root /var/www/little-fashion;
       index index.html;
       
       location / {
           try_files $uri $uri/ =404;
       }
       
       # Optimize static file serving
       location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
       
       # Security headers
       add_header X-Frame-Options "SAMEORIGIN" always;
       add_header X-Content-Type-Options "nosniff" always;
       add_header Referrer-Policy "no-referrer-when-downgrade" always;
   }
   ```

4. **Enable site and restart Nginx**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/little-fashion /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

#### Option B: SSL/HTTPS Configuration

1. **Obtain SSL certificate** (using Let's Encrypt):
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

2. **Enhanced Nginx configuration**:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;
       return 301 https://$server_name$request_uri;
   }
   
   server {
       listen 443 ssl http2;
       server_name your-domain.com www.your-domain.com;
       
       ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
       
       root /var/www/little-fashion;
       index index.html;
       
       # ... rest of configuration
   }
   ```

### Method 3: Docker Deployment

#### Prerequisites
- Docker installed on your system
- Basic Docker knowledge

#### Option A: Basic Docker Setup

1. **Create Dockerfile**:
   ```dockerfile
   # Use official Nginx image
   FROM nginx:alpine
   
   # Copy website files to Nginx web root
   COPY . /usr/share/nginx/html/
   
   # Copy custom Nginx configuration (optional)
   # COPY nginx.conf /etc/nginx/nginx.conf
   
   # Expose port 80
   EXPOSE 80
   
   # Start Nginx
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Build and run container**:
   ```bash
   docker build -t little-fashion .
   docker run -d -p 80:80 --name fashion-site little-fashion
   ```

#### Option B: Custom Nginx Configuration

1. **Create nginx.conf**:
   ```nginx
   worker_processes auto;
   error_log /var/log/nginx/error.log warn;
   pid /var/run/nginx.pid;
   
   events {
       worker_connections 1024;
   }
   
   http {
       include /etc/nginx/mime.types;
       default_type application/octet-stream;
       
       sendfile on;
       keepalive_timeout 65;
       
       server {
           listen 80;
           server_name localhost;
           
           root /usr/share/nginx/html;
           index index.html;
           
           location / {
               try_files $uri $uri/ /index.html;
           }
           
           # Cache static assets
           location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
               expires 1y;
               add_header Cache-Control "public, immutable";
           }
       }
   }
   ```

2. **Enhanced Dockerfile**:
   ```dockerfile
   FROM nginx:alpine
   
   # Remove default Nginx website
   RUN rm -rf /usr/share/nginx/html/*
   
   # Copy website files
   COPY . /usr/share/nginx/html/
   
   # Copy custom Nginx configuration
   COPY nginx.conf /etc/nginx/nginx.conf
   
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

### Method 4: Docker Compose Deployment

1. **Create docker-compose.yml**:
   ```yaml
   version: '3.8'
   services:
     web:
       build: .
       ports:
         - "80:80"
       volumes:
         - ./nginx.conf:/etc/nginx/nginx.conf:ro
       restart: unless-stopped
       healthcheck:
         test: ["CMD", "curl", "-f", "http://localhost"]
         interval: 30s
         timeout: 10s
         retries: 3
   ```

2. **Deploy with Docker Compose**:
   ```bash
   docker-compose up -d
   ```

### Method 5: Cloud Deployment

#### Deploy to AWS S3 + CloudFront

1. **Create S3 bucket**:
   ```bash
   aws s3 mb s3://your-bucket-name
   aws s3 website s3://your-bucket-name --index-document index.html
   ```

2. **Upload files**:
   ```bash
   aws s3 sync . s3://your-bucket-name --exclude "*.md" --exclude ".git/*"
   ```

3. **Setup CloudFront distribution** for global CDN

#### Deploy to Netlify

1. **Deploy via Git**:
   - Connect GitHub repository to Netlify
   - Set build command: (leave empty)
   - Set publish directory: `/` (root)

2. **Deploy via CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=.
   ```

#### Deploy to Vercel

1. **Deploy via CLI**:
   ```bash
   npm install -g vercel
   vercel --prod
   ```

#### Deploy to GitHub Pages

1. **Enable GitHub Pages** in repository settings
2. **Select source branch** (usually `main`)
3. **Access via**: `https://username.github.io/repository-name`

### Method 6: Kubernetes Deployment

1. **Create deployment.yaml**:
   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: little-fashion
   spec:
     replicas: 3
     selector:
       matchLabels:
         app: little-fashion
     template:
       metadata:
         labels:
           app: little-fashion
       spec:
         containers:
         - name: nginx
           image: little-fashion:latest
           ports:
           - containerPort: 80
           livenessProbe:
             httpGet:
               path: /
               port: 80
             initialDelaySeconds: 30
             periodSeconds: 10
   ---
   apiVersion: v1
   kind: Service
   metadata:
     name: little-fashion-service
   spec:
     selector:
       app: little-fashion
     ports:
     - port: 80
       targetPort: 80
     type: LoadBalancer
   ```

2. **Deploy to Kubernetes**:
   ```bash
   kubectl apply -f deployment.yaml
   ```

## 🔧 Development Setup

### Local Development Environment

#### Prerequisites
- Code editor (VS Code, Sublime Text, etc.)
- Live Server extension/plugin
- Browser developer tools

#### Recommended VS Code Extensions
- Live Server
- HTML CSS Support
- Auto Rename Tag
- Prettier - Code formatter
- Bootstrap 4, Font awesome 4, Font Awesome 5

### Customization Guide

#### Color Scheme
Edit CSS custom properties in `css/tooplate-little-fashion.css`:
```css
:root {
  --primary-color: #FF4400;     /* Main brand color */
  --section-bg-color: #f0f8ff;  /* Background color */
  --dark-color: #000000;        /* Text color */
  --grey-color: #d0d1d1;        /* Border color */
}
```

#### Typography
Update Google Fonts link in HTML files:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@100;300;400;700;900&display=swap" rel="stylesheet">
```

#### Adding New Pages
1. Copy existing HTML structure
2. Update navigation links
3. Modify content sections
4. Test responsiveness

## 🛠️ Code Analysis

### Performance Optimization

| Feature | Implementation | Benefit |
|---------|----------------|----------|
| **Minified Assets** | Bootstrap and jQuery minified | Faster loading |
| **Image Optimization** | Compressed JPEG images | Reduced bandwidth |
| **CSS Variables** | Custom properties for theming | Better maintainability |
| **Semantic HTML** | Proper HTML5 structure | SEO and accessibility |
| **Lazy Loading** | Can be implemented for images | Improved performance |

### Browser Compatibility

| Browser | Version | Support |
|---------|---------|----------|
| **Chrome** | 60+ | ✅ Full support |
| **Firefox** | 55+ | ✅ Full support |
| **Safari** | 12+ | ✅ Full support |
| **Edge** | 79+ | ✅ Full support |
| **IE** | 11+ | ⚠️ Limited support |

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: Image descriptions for screen readers
- **Keyboard Navigation**: Focusable interactive elements
- **Color Contrast**: WCAG 2.1 compliant color ratios
- **Responsive Design**: Works on all device sizes

## 🔍 Configuration Details

### Nginx Configuration Options

```nginx
# Basic configuration
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;
    
    # Enable Gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    
    # Cache static assets
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Docker Environment Variables

```yaml
# docker-compose.yml
services:
  web:
    environment:
      - NGINX_HOST=localhost
      - NGINX_PORT=80
```

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**:
   ```bash
   # Check file paths and permissions
   ls -la images/
   # Ensure proper case sensitivity
   ```

2. **CSS/JS not loading**:
   ```bash
   # Verify MIME types in Nginx
   # Check browser console for 404 errors
   ```

3. **Mobile layout issues**:
   ```html
   <!-- Ensure viewport meta tag is present -->
   <meta name="viewport" content="width=device-width, initial-scale=1">
   ```

4. **Docker container not starting**:
   ```bash
   # Check Dockerfile syntax
   docker logs container-name
   
   # Verify port mapping
   docker ps -a
   ```

## 🔒 Security Considerations

### Production Security

1. **HTTP Security Headers**:
   ```nginx
   add_header X-Frame-Options "SAMEORIGIN";
   add_header X-Content-Type-Options "nosniff";
   add_header Referrer-Policy "strict-origin-when-cross-origin";
   add_header Content-Security-Policy "default-src 'self'";
   ```

2. **SSL/TLS Configuration**:
   ```nginx
   ssl_protocols TLSv1.2 TLSv1.3;
   ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
   ```

3. **Rate Limiting**:
   ```nginx
   limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
   limit_req zone=one burst=5;
   ```

## 📚 Learning Objectives

This project demonstrates:
- ✅ **Modern HTML5** semantic structure
- ✅ **Responsive CSS3** with custom properties
- ✅ **JavaScript** event handling and DOM manipulation
- ✅ **Bootstrap Framework** usage and customization
- ✅ **Static Website** development best practices
- ✅ **Nginx Configuration** for web serving
- ✅ **Docker Containerization** for deployment
- ✅ **Performance Optimization** techniques
- ✅ **Accessibility Standards** implementation

## 🧪 Testing

### Manual Testing Checklist

- [ ] **Homepage loads correctly**
- [ ] **Navigation works on all pages**
- [ ] **Responsive design on mobile/tablet**
- [ ] **Images load properly**
- [ ] **Forms function correctly**
- [ ] **Cross-browser compatibility**
- [ ] **Performance (< 3s load time)**
- [ ] **Accessibility (screen reader friendly)**

### Automated Testing

```bash
# Lighthouse performance audit
npx lighthouse http://localhost --output html

# HTML validation
npx html-validate *.html

# CSS validation
npx stylelint "css/**/*.css"
```

### Load Testing

```bash
# Using Apache Bench
ab -n 1000 -c 10 http://localhost/

# Using curl for basic testing
curl -I http://localhost/
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow semantic HTML5 structure
- Use BEM methodology for CSS classes
- Maintain responsive design principles
- Test across multiple browsers
- Optimize images before committing
- Document any new features

## 📄 License

This project is based on the **Tooplate 2127 Little Fashion** template and is available under the [Tooplate License](https://www.tooplate.com/view/2127-little-fashion). Please check the original template license for usage terms.

## 📞 Support

- **Original Template**: [Tooplate Little Fashion](https://www.tooplate.com/view/2127-little-fashion)
- **Bootstrap Documentation**: [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/)
- **Nginx Documentation**: [Nginx Docs](https://nginx.org/en/docs/)
- **Docker Documentation**: [Docker Docs](https://docs.docker.com/)

For questions about this project, please open an issue or contact the development team.

---

**Happy Coding & Designing! 👗✨**

