# Usa la imagen base de Node.js
FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
EXPOSE 4000
CMD ["npm", "start"]