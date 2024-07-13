# Dockerfile

# Base image for front-end Next.js app
FROM node:22-alpine AS front-builder
WORKDIR /app/front
COPY front/package*.json ./
RUN npm install
COPY front ./
RUN npm run build

# Base image for back-end Next.js app
FROM node:22-alpine AS back-builder
WORKDIR /app/back
COPY back/package*.json ./
RUN npm install
COPY back ./
RUN npm run build

# Final stage
FROM node:22-alpine

# Set working directory for the app
WORKDIR /app

# Copy front-end build
COPY --from=front-builder /app/front ./front

# Copy back-end build
COPY --from=back-builder /app/back ./back

# Install production dependencies for both front-end and back-end
WORKDIR /app/front
RUN npm install --production

WORKDIR /app/back
RUN npm install --production

# Expose ports
EXPOSE 4000 3000

# Start the services
CMD ["sh", "-c", "cd /app/front && npm start & cd /app/back && npm start"]
