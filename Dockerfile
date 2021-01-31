FROM node:14.15.4-alpine3.10

WORKDIR /usr/src/app/client
COPY ./client/package.json ./package.json
RUN  npm install
COPY ./client .
RUN NODE_OPTIONS=--max_old_space_size=4096 npm run build


WORKDIR /usr/src/app/server
COPY ./server/package.json ./package.json
RUN npm install
COPY ./server .


# this line makes local development with docker possible,
# but is ignored by heroku, which assigns a random port
# accessible as an environment variable PORT
EXPOSE 3000

CMD ["node", "app.js"]
