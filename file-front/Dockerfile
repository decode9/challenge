FROM node:16-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY . ./
RUN yarn
RUN yarn build

# production environment
FROM node:16-alpine
WORKDIR /app
COPY --from=build /app/dist /app/
RUN yarn global add serve
EXPOSE 3000
CMD ["serve", "-s"]
