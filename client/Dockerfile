FROM node:14.15.0-alpine

WORKDIR /usr/src/app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]