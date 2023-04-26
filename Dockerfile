FROM nginx
ADD css         /usr/share/nginx/html/css/
ADD favicon     /usr/share/nginx/html/favicon/
ADD fonts       /usr/share/nginx/html/fonts/
ADD images      /usr/share/nginx/html/images/
ADD src         /usr/share/nginx/html/src/
ADD index.html  /usr/share/nginx/html
ADD index.js    /usr/share/nginx/html
