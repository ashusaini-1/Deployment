FROM node:20
WORKDIR /app
COPY package.json .
RUN npm i --force
COPY . .
EXPOSE 10079
RUN npm run build
# CMD ["npm", "run","start:dev"]
CMD ["npm", "run","start:prod"]
# CMD NODE_ENV=development node dist/main