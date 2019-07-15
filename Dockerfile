FROM node:alpine

RUN mkdir /node
COPY package.json /node/package.json
COPY server.js /node/server.js
RUN cd /node && npm install
CMD node /node/server.js
