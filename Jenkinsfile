pipeline {
    agent any
    stages {
        stage('Clonar Repositorio') {
            steps {
                git 'https://github.com/tuusuario/tu-repositorio.git'
            }
        }
        stage('Construir Imagen Docker') {
            steps {
                script {
                    // Construir la imagen Docker
                    sh 'docker build -t mi-imagen .'
                }
            }
        }
        stage('Ejecutar Contenedor Docker') {
            steps {
                script {
                    // Ejecutar el contenedor Docker con el proyecto
                    sh 'docker run -d -p 8100:8080 --name mi-contenedor mi-imagen'
                }
            }
        }
    }
}
