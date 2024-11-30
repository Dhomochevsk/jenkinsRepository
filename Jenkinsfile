pipeline {
    agent any
    stages {
        // Etapa para instalar Docker en el contenedor de Jenkins (si no está instalado)
        stage('Instalar Docker') {
            steps {
                script {
                    // Instalación de Docker (esto solo se ejecuta si Docker no está instalado)
                    sh 'apt-get update && apt-get install -y docker.io || true'
                }
            }
        }

        // Etapa para verificar la instalación de Docker
        stage('Verificar Docker') {
            steps {
                script {
                    // Verificación de la instalación de Docker
                    sh 'docker --version'
                }
            }
        }

        // Etapa para clonar el repositorio de Git
        stage('Clonar Repositorio') {
            steps {
                script {
                    // Clona el repositorio desde GitHub
                    git 'https://github.com/Dhomochevsk/jenkinsRepository.git'
                }
            }
        }

        // Etapa para construir la imagen Docker
        stage('Construir Imagen Docker') {
            steps {
                script {
                    // Construcción de la imagen Docker usando el Dockerfile del repositorio
                    sh 'docker build -t mi-imagen3 .'
                }
            }
        }

        // Etapa para ejecutar el contenedor Docker y desplegar el código
        stage('Ejecutar Contenedor') {
            steps {
                script {
                    // Detener y eliminar cualquier contenedor previo con el mismo nombre
                    sh 'docker stop mi-contenedor || true && docker rm mi-contenedor || true'

                    // Ejecutar el contenedor y mapear el puerto 8080 al puerto 80 del contenedor
                    sh 'docker run -d -p 8080:80 --name mi-contenedor mi-imagen3'
                }
            }
        }

        // Etapa para limpiar contenedores Docker existentes
        stage('Limpiar') {
            steps {
                script {
                    // Detener y eliminar el contenedor después de su ejecución
                    sh 'docker stop mi-contenedor || true'
                    sh 'docker rm mi-contenedor || true'
                }
            }
        }
    }
}
