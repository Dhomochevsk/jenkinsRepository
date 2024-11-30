pipeline {
    agent any
    
    stages {
        stage('Clonar Repositorio') {
            steps {
                script {
                    try {
                        echo 'Clonando el repositorio...'
                        git 'https://github.com/Dhomochevsk/jenkinsRepository.git'
                    } catch (Exception e) {
                        echo 'Error al clonar el repositorio: ' + e.toString()
                        currentBuild.result = 'FAILURE'
                        error('Fallo en la clonación del repositorio')
                    }
                }
            }
        }

        stage('Construir Proyecto') {
            steps {
                script {
                    try {
                        echo 'Construyendo el proyecto...'
                        // Puedes agregar comandos de construcción específicos de tu proyecto aquí
                        // Ejemplo: sh 'npm install' para un proyecto Node.js
                    } catch (Exception e) {
                        echo 'Error al construir el proyecto: ' + e.toString()
                        currentBuild.result = 'FAILURE'
                        error('Fallo en la construcción del proyecto')
                    }
                }
            }
        }

        stage('Construir Imagen Docker') {
            steps {
                script {
                    try {
                        echo 'Construyendo la imagen Docker...'
                        sh 'docker build -t mi-imagen-calculadora .'  // Asegúrate de tener un Dockerfile en el repositorio
                    } catch (Exception e) {
                        echo 'Error al construir la imagen Docker: ' + e.toString()
                        currentBuild.result = 'FAILURE'
                        error('Fallo en la construcción de la imagen Docker')
                    }
                }
            }
        }

        stage('Desplegar Proyecto') {
            steps {
                script {
                    try {
                        echo 'Desplegando el proyecto...'
                        sh 'docker run -d -p 8080:80 mi-imagen-calculadora'  // Aquí se despliega la imagen Docker
                    } catch (Exception e) {
                        echo 'Error al desplegar el proyecto: ' + e.toString()
                        currentBuild.result = 'FAILURE'
                        error('Fallo en el despliegue del proyecto')
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completado.'
        }
        success {
            echo 'Pipeline exitoso.'
        }
        failure {
            echo 'Hubo un error en el pipeline.'
        }
    }
}
