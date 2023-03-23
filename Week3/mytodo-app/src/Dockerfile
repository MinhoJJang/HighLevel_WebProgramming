FROM node:12-alpine
WORKDIR /mytodo-app
COPY . .
RUN yarn install --production
CMD ["node", "/mytodo-app/src/index.js"]