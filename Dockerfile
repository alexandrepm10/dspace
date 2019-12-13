FROM node:latest

# set working directory
RUN mkdir /frontend
WORKDIR /frontend

RUN npm install -g @angular/cli 

COPY . /frontend

# start app
CMD ng serve --host 0.0.0.0

EXPOSE 4200 49153