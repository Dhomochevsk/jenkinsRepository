pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'mi_imagen_calculadora' // Nombre de la imagen Docker que deseas crear
        DOCKER_REGISTRY = 'localhost:5000'    // Si usas un registry local o Docker Hub
        DOCKERFILE_PATH = '.' // Si tu Dockerfile está en la raíz del proyecto
        CONTAINER_NAME = 'calculadora_container' // Nombre del contenedor
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
                // Clonamos el repositorio
                git 'https://github.com/Dhomochevsk/jenkinsRepository.git'
            }
        }

        stage('Construir Imagen Docker') {
            steps {
                script {
                    // Construir la imagen Docker
                    sh 'docker build -t ${DOCKER_IMAGE} ${DOCKERFILE_PATH}'
                }
            }
        }

        stage('Ejecutar Contenedor Docker') {
            steps {
                script {
                    // Detenemos el contenedor si ya existe
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                    
                    // Ejecutamos el contenedor
                    sh "docker run -d --name ${CONTAINER_NAME} -p 8080:8080 ${DOCKER_IMAGE}"
                }
            }
        }

        stage('Limpiar') {
            steps {
                // Limpiar imágenes antiguas si es necesario
                sh 'docker rmi ${DOCKER_IMAGE} || true'
            }
        }
    }

    post {
        always {
            // Detener y eliminar el contenedor si algo falla
            sh "docker stop ${CONTAINER_NAME} || true"
            sh "docker rm ${CONTAINER_NAME} || true"
        }
    }
}
