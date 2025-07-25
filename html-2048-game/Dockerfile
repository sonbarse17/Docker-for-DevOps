FROM nginx:stable-alpine-perl

WORKDIR /app

COPY . /usr/share/nginx/html

EXPOSE 80 

ENTRYPOINT ["nginx", "-g", "daemon off;"]
