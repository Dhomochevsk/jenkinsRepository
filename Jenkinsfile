pipeline {
    agent any

    environment {
        // Define la URL del repositorio y el ID de las credenciales
        GIT_REPO_URL = 'https://github.com/tuusuario/tu-repositorio.git'
        CREDENTIALS_ID = 'id-de-credenciales'
    }

    stages {
        stage('Checkout del Repositorio') {
            steps {
                script {
                    // Clona el repositorio utilizando las credenciales almacenadas en Jenkins
                    checkout([
                        $class: 'GitSCM', 
                        branches: [[name: '*/master']], 
                        userRemoteConfigs: [[url: GIT_REPO_URL, credentialsId: CREDENTIALS_ID]]
                    ])
                }
            }
        }

        stage('Construir Imagen Docker') {
            steps {
                script {
                    // Construye la imagen Docker
                    sh 'docker build -t mi-imagen .'
                }
            }
        }

        stage('Ejecutar Contenedor Docker') {
            steps {
                script {
                    // Ejecuta el contenedor Docker
                    sh 'docker run -d -p 8100:8080 --name mi-contenedor mi-imagen'
                }
            }
        }
    }
    
    post {
        success {
            echo 'El pipeline se ejecutó correctamente.'
        }
        failure {
            echo 'Hubo un error en el pipeline.'
        }
    }
}
