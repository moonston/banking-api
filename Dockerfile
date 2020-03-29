FROM node:12.5
WORKDIR /app
COPY package.json .

RUN npm install --no-optional && npm cache clean --force
#RUN npm migrate
ENV PATH /app/node_modules/.bin:$PATH

#COPY ./package-lock.json .
#RUN npm install
COPY . .
EXPOSE 3000
CMD npm run dev