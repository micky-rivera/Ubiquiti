FROM node:16 AS ui-build

WORKDIR /usr/ubiquiti/client
COPY /client ./
RUN npm install
RUN npm run build

FROM node:16 AS server-build

WORKDIR /usr/ubiquiti

COPY --from=ui-build /usr/ubiquiti/client/build/ ./client/build
WORKDIR /usr/ubiquiti/server/

COPY /server/package*.json ./
RUN npm install

COPY /server/index.js ./

EXPOSE 8080

CMD [ "node", "index.js" ]