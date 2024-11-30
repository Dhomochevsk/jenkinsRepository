# Usa la imagen oficial de Jenkins como base
FROM jenkins/jenkins:lts

# Cambia al usuario root para instalar Docker
USER root

# Actualiza los repositorios y instala Docker y Nginx
RUN apt-get update && \
    apt-get install -y docker.io nginx

# Copia tu proyecto HTML a la carpeta de Nginx
COPY ./mi-proyecto /usr/share/nginx/html

# Exponer los puertos necesarios
EXPOSE 8080 80

# Inicia el servicio de Nginx y luego Jenkins
CMD service nginx start && /usr/local/bin/jenkins
