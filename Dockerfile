FROM node:18-slim
WORKDIR /app
RUN apt-get update && apt-get install -y gcc make
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
