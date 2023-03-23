FROM node:latest
WORKDIR /app
ADD . /app

RUN npm install

RUN apt-get update \
 && apt-get install -y chromium \
    --no-install-recommends

CMD npx wdio