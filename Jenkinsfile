pipeline {
    agent any
    stages {
        // Etapa para preparar el entorno Docker
        stage('Preparar Entorno Docker') {
            steps {
                script {
                    // Detiene y elimina el contenedor si ya existe
                    sh 'docker stop mi-contenedor2 || true'
                    sh 'docker rm mi-contenedor2 || true'
                }
            }
        }

        // Etapa para clonar el repositorio de GitHub
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
                    sh 'docker build -t mi-imagen5 .'
                }
            }
        }

        // Etapa para desplegar el contenedor Docker
        stage('Desplegar en Docker') {
            steps {
                script {
                    // Ejecuta un nuevo contenedor basado en la imagen creada
                    sh 'docker run -d -p 8100:80 --name mi-contenedor2 mi-imagen5'
                }
            }
        }
    }
}
