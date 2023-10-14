FROM webdevops/php-apache-dev:8.1
WORKDIR /app
COPY . .
EXPOSE 80
RUN service apache status
CMD ["service","apache", "status"]

