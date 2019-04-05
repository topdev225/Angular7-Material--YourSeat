FROM node:8
RUN apt-get update
RUN apt-get install -y postgresql postgresql-contrib
EXPOSE 3000

WORKDIR /usr/app
VOLUME /usr/app
RUN npm install -g yarn
RUN npm install -g typeorm
RUN npm install -g tsconfig-paths
RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install -g nodemon
RUN npm install -g postgraphile

RUN chmod +x /usr/local/bin/yarn

copy . .


CMD ["/bin/bash","-c","chmod +x /usr/app/start.sh && /usr/app/start.sh"]