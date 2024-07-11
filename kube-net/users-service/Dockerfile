FROM node:18-alpine

ARG USERS_SERVICE_PORT=3003

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE ${USERS_SERVICE_PORT}

CMD ["node", "app"]