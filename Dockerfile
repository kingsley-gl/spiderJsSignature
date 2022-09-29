FROM node:17-alpine3.14

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/
COPY . /usr/src/app/
# RUN npm install -g yarn --registry=https://registry.npm.taobao.orgdock
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN apk add --update --no-cache curl jq py3-configobj py3-pip py3-setuptools python3 python3-dev
RUN npm config set registry http://registry.npm.taobao.org/
RUN yarn config set registry http://registry.npm.taobao.org/

RUN yarn install

EXPOSE 3000
# CMD ["node", "/usr/src/app/src/app.js"]
CMD ["yarn", "start"]