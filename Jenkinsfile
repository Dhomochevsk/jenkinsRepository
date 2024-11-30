pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'mi_imagen_calculadora'
        CONTAINER_NAME = 'calculadora_container'
    }
    stages {
        stage('Verificar Docker') {
            steps {
                script {
                    sh 'docker --version'
                }
            }
        }

        stage('Clonar Repositorio') {
            steps {
                git 'https://github.com/Dhomochevsk/jenkinsRepository.git'
            }
        }

        stage('Construir Imagen Docker') {
            steps {
                script {
                    // Construir la imagen Docker desde el Dockerfile
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }

        stage('Ejecutar Contenedor Docker') {
            steps {
                script {
                    // Ejecutar el contenedor Docker con la imagen construida
                    sh """
                    docker run -d --name $CONTAINER_NAME -p 8080:80 $DOCKER_IMAGE
                    """
                }
            }
        }

        stage('Limpiar') {
            steps {
                script {
                    // Detener y eliminar el contenedor después de la ejecución
                    sh """
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                    """
                }
            }
        }
    }
    post {
        always {
            // Limpiar contenedor incluso si hay fallos
            script {
                sh """
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                """
            }
        }
    }
}
