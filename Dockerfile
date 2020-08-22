# Build stage
FROM node:lts-alpine as build-stage

# Install app
WORKDIR /app
COPY package*.json ./
COPY package-lock.json .
RUN npm ci

# Test and build app
COPY . .
RUN npm run test
RUN npm run build

# Production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]