# Stage 1 - Build the React app
FROM node:14.15.4-alpine3.10 as next-build

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

# Bundle app source
COPY . .

RUN npm run build

# Stage 2 - Serve build for production with Nginx
FROM nginx:alpine

COPY --from=next-build /usr/src/app/.next /usr/share/nginx/html

COPY --from=next-build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]