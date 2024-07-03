FROM node:20.14-alpine

ARG PORT=80

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

ENV PORT ${PORT}

EXPOSE ${PORT}

CMD [ "node", "index" ]