#!/usr/bin/env sh
set -x

envsubst $NGINX_CONF_VARIABLES < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

nginx -g 'daemon off;'