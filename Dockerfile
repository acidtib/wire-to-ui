FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


FROM node:20-alpine

COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app/.next ./.next

EXPOSE 3000

CMD ["npm", "start"]