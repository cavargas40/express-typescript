#
# Production stage.
# This state compile get back the JavaScript code from builder stage
# It will also install the production package only
#
FROM node:13.10.1-stretch as intermediate

COPY package.json ./
RUN npm i
FROM node:13.10.1-stretch

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
COPY --from=intermediate ./node_modules /usr/src/app/node_modules

RUN npm run build
EXPOSE 3000
CMD ["node", "dist/src/"]