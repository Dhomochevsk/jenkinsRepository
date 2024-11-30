FROM jenkins/jenkins:lts

# Instalar Docker dentro del contenedor
USER root
RUN apt-get update && apt-get install -y docker.io
USER jenkins
