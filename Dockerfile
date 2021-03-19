FROM node:14

# Create app directory
WORKDIR /usr/src/app

RUN npm install pm2 -g

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Bundle app source
COPY . .

CMD ["pm2-runtime", "ecosystem.config.js"]