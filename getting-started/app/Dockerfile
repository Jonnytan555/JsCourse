FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install react-scripts -g --silent
RUN yarn install --production 
CMD ["node", "src/index.js"]
EXPOSE 3000