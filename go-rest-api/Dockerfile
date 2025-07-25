FROM golang:1.24.5-alpine

WORKDIR /app

COPY . .

EXPOSE 8080

ENTRYPOINT ["go", "run", "cmd/main.go"]