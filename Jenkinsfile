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
                    // Construir la imagen Docker, ajusta según sea necesario
                    sh 'docker build -t mi-imagen2 .'
                }
            }
        }

        // Etapa para ejecutar el contenedor Docker y desplegar el código
        stage('Desplegar en Docker') {
            steps {
                script {
                    // Ejecuta el contenedor y despliega el código clonado
                    sh 'docker run -d --name mi-contenedor mi-imagen2'

                    // Si necesitas copiar el código clonado al contenedor, puedes hacerlo así
                    // Usando un volumen compartido o copiando archivos directamente.
                    // Ejemplo usando volumen compartido:
                    // sh 'docker run -d -v $(pwd):/app --name mi-contenedor mi-imagen2'

                    // O copiando archivos manualmente:
                    // sh 'docker cp $(pwd)/ruta-del-repositorio mi-contenedor:/ruta-del-contenedor'
                }
            }
        }

        // Etapa para limpiar contenedores Docker existentes
        stage('Limpiar') {
            steps {
                script {
                    sh 'docker stop mi-contenedor || true'
                    sh 'docker rm mi-contenedor || true'
                }
            }
        }
    }
}
