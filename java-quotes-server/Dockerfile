FROM openjdk:17-jdk-slim

WORKDIR /app

COPY src/ ./src/
COPY quotes.txt ./

RUN javac -d . src/Main.java

EXPOSE 8000

CMD ["java", "Main"]