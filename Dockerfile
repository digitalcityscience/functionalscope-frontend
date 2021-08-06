FROM node:15.14.0

LABEL maintainer="Vinh Ngu"

# Build assets
WORKDIR /build
ADD . .

RUN npm install
RUN npm run build
# RUN echo "npm run build" >> scripts/tokenize.sh
# RUN bash scripts/tokenize.sh

# Serve assets
FROM nginx:latest

COPY --from=0 /build/dist /usr/share/nginx/html
COPY --from=0 /build/nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=0 /build/scripts .
#COPY --from=0 /build/src/config.js .

EXPOSE 80
CMD nginx -g 'daemon off;'
