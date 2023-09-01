FROM node:16-alpine


WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

CMD [ "npm", "run","start:dev" ]