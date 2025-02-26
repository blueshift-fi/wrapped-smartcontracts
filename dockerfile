FROM node:18-alpine

WORKDIR /app

WORKDIR /home/node/app

COPY . .

RUN npm run prepare-artifacts
RUN npm install

CMD [ "npm", "run", "oracle:dev" ]
