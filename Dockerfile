FROM node:14.15.4-alpine3.10

WORKDIR /usr/src/app

COPY ./client/package.json ./client/package.json
COPY ./server/package.json ./server/package.json

RUN cd client && npm install --no-package-lock
RUN cd server && npm install --no-package-lock

COPY ./client ./client
COPY ./server ./server

RUN cd client && NODE_OPTIONS=--max_old_space_size=4096 npm run build

EXPOSE 3000

WORKDIR /usr/src/app/server

CMD ["node", "app.js"]
