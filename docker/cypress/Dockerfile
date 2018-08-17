FROM cypress/browsers:chrome67    

RUN mkdir /app

WORKDIR /app

RUN npm i cypress
RUN npx cypress verify
# RUN npx cypress run --browser chrome
