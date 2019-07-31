FROM node:10-alpine

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN yarn global add @vue/cli
RUN yarn global add @vue/cli-service-global

RUN yarn install --silent

EXPOSE 8080