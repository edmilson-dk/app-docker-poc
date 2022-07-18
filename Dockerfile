FROM node:16.16.0
WORKDIR /app 
COPY package*.json ./ 
COPY yarn.lock ./ 
RUN yarn install 
COPY . .
EXPOSE 5001 

CMD ["yarn", "start"]