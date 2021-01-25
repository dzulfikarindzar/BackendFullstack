FROM node:lts-alpine

RUN mkdir -p /usr/apiwarung

WORKDIR /usr/apiwarung

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 9100

CMD [ "node", "app.js" ]