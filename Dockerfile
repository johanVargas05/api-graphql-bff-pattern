FROM node:20-alpine3.18 as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine3.18

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package*.json ./

RUN npm install --only=production

COPY --from=builder /usr/src/app/dist ./dist

ENV URL_SERVER_CUSTOMER_DATA=http://localhost:3001 \
    URL_SERVER_PORTFOLIO_DATA=http://localhost:3000 \
    PORT=3002

EXPOSE 3002

CMD ["node", "dist/main"]