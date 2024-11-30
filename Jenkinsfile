pipeline {
    agent any
    
    environment {
        // Variables de entorno opcionales, por ejemplo:
        // NPM_HOME = '/usr/local/npm'
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
                script {
                    // Clona el repositorio de GitHub
                    git 'https://github.com/Dhomochevsk/jenkinsRepository.git'
                }
            }
        }

        stage('Construir Proyecto') {
            steps {
                script {
                    echo 'Construyendo el proyecto...'
                    // Ejemplo de comando de construcción, si usas Node.js, podrías agregar npm install
                    // sh 'npm install' // Descomenta si usas npm
                }
            }
        }

        stage('Ejecutar Pruebas') {
            steps {
                script {
                    echo 'Ejecutando pruebas...'
                    // Agrega aquí los comandos para ejecutar pruebas, si usas algo como Jest o Mocha, por ejemplo:
                    // sh 'npm test' // Descomenta si usas pruebas con npm
                }
            }
        }

        stage('Construir Imagen Docker') {
            steps {
                script {
                    echo 'Construyendo la imagen Docker...'
                    // Construir la imagen Docker (si usas Docker)
                    sh 'docker build -t mi-imagen-calculadora .'  // Asegúrate de tener un Dockerfile en tu repositorio
                }
            }
        }

        stage('Desplegar Proyecto') {
            steps {
                script {
                    echo 'Desplegando el proyecto...'
                    // Aquí puedes agregar pasos de despliegue
                    // Si lo haces con Docker, por ejemplo:
                    // sh 'docker run -d -p 8080:80 mi-imagen-calculadora'  // Desplegar la imagen Docker
                }
            }
        }
    }

    post {
        always {
            // Opcional: Lo que quieres hacer siempre, incluso si la construcción falla
            echo 'Pipeline completado.'
        }
        success {
            // Opcional: Pasos que se ejecutan si el pipeline es exitoso
            echo 'Construcción exitosa.'
        }
        failure {
            // Opcional: Pasos que se ejecutan si el pipeline falla
            echo 'Hubo un error en la construcción.'
        }
    }
}
