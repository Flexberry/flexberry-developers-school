FROM nginx:stable

# Remove default configuration files.
RUN rm /etc/nginx/conf.d/default.conf /etc/nginx/nginx.conf 

# Copy configuration file template.
COPY nginx.conf.template /etc/nginx/nginx.conf.template

COPY startNginx.sh /
CMD /startNginx.sh