#=====================================================
# Build Stage
#=====================================================

#
# Define OS
#
FROM alpine:3.18 AS app

#
# Basic OS management
#

# Install packages
RUN apk add --no-cache nodejs npm

# Setup variables
ARG SW_KILL=false
ENV SW_KILL="${SW_KILL}"
ARG APP_GITHUB_TOKEN=__NO_TOKEN__
ENV APP_GITHUB_TOKEN="${APP_GITHUB_TOKEN}"

#
# Require app
#

# Create app directory
WORKDIR /usr/src/app

# Bundle package.json and package-lock.json
COPY ./package.json ./package-lock.json ./

# Install dependencies
RUN npm ci && npm cache clean --force

# Bundle application source
COPY . .

# Copy build config
COPY ./_scripts/config/general.json ./frontend/config/parts/general.json

# Create a production build
RUN npm run build

#=====================================================
# Image Stage
#=====================================================

#
# Define OS
#
FROM alpine:3.18

#
# Basic OS management
#

# Install packages
RUN apk add --no-cache nginx

#
# Require app
#

# Create app directory
WORKDIR /usr/src/app

#
# Setup app
#

# Copy nginx config
COPY ./_scripts/docker/nginx.conf /etc/nginx/nginx.conf
COPY ./_scripts/docker/default.conf /etc/nginx/conf.d/default.conf

# Forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log

# Expose the app port
EXPOSE 80

# Setup healthcheck
HEALTHCHECK --interval=10s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Check for nginx stopcode
STOPSIGNAL SIGTERM

# Run app on container start
CMD ["nginx", "-g", "daemon off;"]

#
# Bundle app
#

# Bundle from build image
COPY --from=app /usr/src/app/build ./build
