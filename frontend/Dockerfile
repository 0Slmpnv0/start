FROM node:latest


RUN mkdir - ./app
WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install .

COPY . ./

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


