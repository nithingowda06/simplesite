FROM nginx:alpine

COPY index.html style.css editorial.css script.js /usr/share/nginx/html/

EXPOSE 80
