FROM node:8.9.4
ENV APP_DIR /app
WORKDIR $APP_DIR
COPY . $APP_DIR
RUN npm install
CMD "node"