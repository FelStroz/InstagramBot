FROM node:latest

MAINTAINER Felipe Strozberg

WORKDIR /volume

RUN npm i

COPY . .

