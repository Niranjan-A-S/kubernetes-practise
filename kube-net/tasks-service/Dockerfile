FROM node:18-alpine

ARG TASKS_SERVICE_PORT=3002

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE ${TASKS_SERVICE_PORT}

CMD ["node", "app"]