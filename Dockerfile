FROM node:10.5.0-alpine

RUN mkdir -p /code
WORKDIR /code
COPY ./package.json /code

RUN npm i
COPY . /code

CMD npm start
