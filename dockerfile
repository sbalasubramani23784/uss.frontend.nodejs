FROM node:latest
WORKDIR /app

ENV PORT=4000

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 4000
CMD ["npm", "start"]
