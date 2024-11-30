pipeline {
    agent any
    stages {
        // Etapa para instalar Docker dentro del contenedor de Jenkins
        stage('Instalar Docker') {
            steps {
                script {
                    // Instalar Docker dentro del contenedor de Jenkins
                    sh 'apt-get update && apt-get install -y docker.io'
                }
            }
        }

        // Etapa para verificar la instalación de Docker
        stage('Verificar Docker') {
            steps {
                script {
                    // Verificar la versión de Docker instalada
                    sh 'docker --version'
                }
            }
        }

        // Etapa para clonar el repositorio de Git
        stage('Clonar Repositorio') {
            steps {
                script {
                    // Clonar el repositorio desde GitHub
                    git 'https://github.com/Dhomochevsk/jenkinsRepository.git'
                }
            }
        }

        // Etapa para construir la imagen Docker
        stage('Construir Imagen Docker') {
            steps {
                script {
                    // Construir la imagen Docker (ajustar según lo que necesites)
                    sh 'docker build -t mi-imagen .'
                }
            }
        }

        // Etapa para ejecutar el contenedor Docker
        stage('Ejecutar Contenedor Docker') {
            steps {
                script {
                    // Ejecutar el contenedor Docker
                    sh 'docker run -d --name mi-contenedor mi-imagen'
                }
            }
        }

        // Etapa para limpiar contenedores Docker existentes (opcional)
        stage('Limpiar') {
            steps {
                script {
                    // Detener y eliminar el contenedor existente si ya existe
                    sh 'docker stop mi-contenedor || true'
                    sh 'docker rm mi-contenedor || true'
                }
            }
        }
    }
}
