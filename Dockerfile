FROM node:latest

# set working directory
RUN mkdir /frontend
WORKDIR /frontend

RUN npm install -g @angular/cli 

COPY . /frontend

# start app
CMD npm start

EXPOSE 4200 49153