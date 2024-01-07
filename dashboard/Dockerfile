FROM node:21-alpine 

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object

RUN npm install @mui/icons-material @mui/material @emotion/styled @emotion/react 

RUN npm install --save google-map-react

RUN npm install firebase

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
