FROM node:alpine
# Create app directory
WORKDIR /usr/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install --quiet
# Bundle app source
COPY . .
EXPOSE 5000
CMD [ "node", "src/index.js" ]