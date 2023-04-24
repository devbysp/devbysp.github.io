FROM nginx
ADD css/ /usr/share/nginx/html
ADD favicon/ /usr/share/nginx/html
ADD fonts/ /usr/share/nginx/html
ADD images/ /usr/share/nginx/html
ADD src/ /usr/share/nginx/html
ADD index.html /usr/share/nginx/html
ADD index.js /usr/share/nginx/html
