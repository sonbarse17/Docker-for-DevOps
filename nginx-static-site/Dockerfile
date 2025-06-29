# Multi-stage build for better security and smaller image
FROM nginx:alpine

# Create non-root user for security
RUN addgroup -g 1001 -S nginx-user && \
    adduser -S -D -H -u 1001 -h /var/cache/nginx -s /sbin/nologin -G nginx-user -g nginx-user nginx-user

# Copy only necessary files (exclude Dockerfile, README, etc.)
COPY --chown=nginx-user:nginx-user *.html /usr/share/nginx/html/
COPY --chown=nginx-user:nginx-user css/ /usr/share/nginx/html/css/
COPY --chown=nginx-user:nginx-user js/ /usr/share/nginx/html/js/
COPY --chown=nginx-user:nginx-user images/ /usr/share/nginx/html/images/
COPY --chown=nginx-user:nginx-user fonts/ /usr/share/nginx/html/fonts/

# Remove default nginx config and add custom config
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/

# Set proper permissions
RUN chown -R nginx-user:nginx-user /usr/share/nginx/html && \
    chown -R nginx-user:nginx-user /var/cache/nginx && \
    chown -R nginx-user:nginx-user /var/log/nginx && \
    chown -R nginx-user:nginx-user /etc/nginx/conf.d

# Switch to non-root user
USER nginx-user

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]