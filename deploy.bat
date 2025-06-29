@echo off
echo Each project deploys individually:
echo docker build -t python-flask-web ./python-flask-web ^&^& docker run -p 5000:5000 python-flask-web
echo docker build -t go-rest-api ./go-rest-api ^&^& docker run -p 8080:8080 go-rest-api
echo docker build -t java-quotes-server ./java-quotes-server ^&^& docker run -p 8000:8000 java-quotes-server
echo docker build -t nodejs-todo-app ./nodejs-todo-app ^&^& docker run -p 8000:8000 nodejs-todo-app
echo docker build -t nodejs-simple-web ./nodejs-simple-web ^&^& docker run -p 3000:3000 nodejs-simple-web
echo docker build -t python-flask-api ./python-flask-api ^&^& docker run -p 9001:9001 python-flask-api
echo docker build -t php-web-app ./php-web-app ^&^& docker run -p 8080:80 php-web-app
echo docker build -t nodejs-user-manager ./nodejs-user-manager ^&^& docker run -p 3000:3000 nodejs-user-manager
echo docker build -t nodejs-wiki-info ./nodejs-wiki-info ^&^& docker run -p 3000:3000 nodejs-wiki-info
echo docker build -t html-2048-game ./html-2048-game ^&^& docker run -p 80:80 html-2048-game
echo docker build -t nginx-static-site ./nginx-static-site ^&^& docker run -p 80:80 nginx-static-site
pause