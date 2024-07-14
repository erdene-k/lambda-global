FROM node:22-alpine AS front-builder
WORKDIR /app/front
COPY front/package*.json ./
RUN npm install
COPY front ./
RUN npm run build


FROM node:22-alpine AS back-builder
WORKDIR /app/back
COPY back/package*.json ./
RUN npm install
COPY back ./
RUN npm run build


FROM node:22-alpine

WORKDIR /app

COPY --from=front-builder /app/front ./front
COPY --from=back-builder /app/back ./back

WORKDIR /app/front
RUN npm install --production

WORKDIR /app/back
RUN npm install --production

EXPOSE 4000 3000

CMD ["sh", "-c", "cd /app/front && npm start & cd /app/back && npm start"]
