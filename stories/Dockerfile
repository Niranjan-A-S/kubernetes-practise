ARG NODE_VERSION=20.14.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]