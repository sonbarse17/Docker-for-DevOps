FROM php:8.2-apache

WORKDIR /var/www/html

COPY . .

RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html

EXPOSE 80

CMD ["apache2-foreground"]