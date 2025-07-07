FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN chown -R node:node /app

EXPOSE 5000

USER node

CMD ["npm", "start"]