FROM node:10 AS build

# Install Bower and Ember
RUN yarn global add bower \
 && yarn global add ember-cli@3.1.4
ENV bower=/usr/local/bin/bower

# copy source code
WORKDIR /src
COPY . .

# restore dependencies
RUN yarn
RUN bower install -V --allow-root

# build app
RUN ember build

FROM nginx:stable AS final

# Remove default configuration files.
RUN rm /etc/nginx/conf.d/default.conf /etc/nginx/nginx.conf

# Copy configuration file.
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /src/dist /app