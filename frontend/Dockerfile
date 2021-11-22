FROM node:alpine as builder
COPY package*.json ./
RUN npm install --only=prod --quiet && mkdir /frontend && mv ./node_modules ./frontend
WORKDIR /frontend
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /frontend/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY conf/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
