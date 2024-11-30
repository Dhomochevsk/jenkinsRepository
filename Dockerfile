FROM jenkins/jenkins:lts

# Instalar Docker dentro del contenedor
USER root
RUN apt-get update && apt-get install -y docker.io git

# Clonar el repositorio de GitHub
RUN git clone https://github.com/Dhomochevsk/jenkinsRepository.git /var/jenkins_home/workspace/jenkinsRepository

USER jenkins
