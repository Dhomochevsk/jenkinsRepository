pipeline {
    agent any
    stages {
        // Etapa para instalar Docker dentro del contenedor de Jenkins
        stage('Instalar Docker') {
            steps {
                script {
                    sh 'apt-get update && apt-get install -y docker.io'
                }
            }
        }

        // Etapa para verificar la instalación de Docker
        stage('Verificar Docker') {
            steps {
                script {
                    sh 'docker --version'
                }
            }
        }

        // Etapa para clonar el repositorio de Git
        stage('Clonar Repositorio') {
            steps {
                script {
                    git 'https://github.com/Dhomochevsk/jenkinsRepository.git'
                }
            }
        }

        // Etapa para construir la imagen Docker
        stage('Construir Imagen Docker') {
            steps {
                script {
                    // Construir la imagen Docker
                    sh 'docker build -t mi-imagen3 .'
                }
            }
        }
    }
}
