FROM nginx

# Bundle app source
COPY ./build /usr/share/nginx/html
