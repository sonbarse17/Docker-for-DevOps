FROM php:8.2-apache

WORKDIR /var/www

COPY . .

RUN sed -i 's|/var/www/html|/var/www/public|g' /etc/apache2/sites-available/000-default.conf
RUN chown -R www-data:www-data /var/www
RUN chmod -R 755 /var/www

EXPOSE 80

CMD ["apache2-foreground"]