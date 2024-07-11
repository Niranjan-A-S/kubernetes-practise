FROM node:18-alpine

ARG AUTH_SERVICE_PORT=3001

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE ${AUTH_SERVICE_PORT}

CMD ["node", "app"]