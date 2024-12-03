pipeline {
    agent any
    environment {
        CONTENEDOR = 'mi-contenedor' // Nombre del contenedor Docker
        IMAGEN = 'mi-imagen'        // Nombre de la imagen Docker
    }
    stages {
        stage('Preparar Entorno Docker') {
            steps {
                script {
                    // Detiene y elimina el contenedor si ya existe
                    sh "docker stop ${env.CONTENEDOR} || true"
                    sh "docker rm ${env.CONTENEDOR} || true"
                }
            }
        }

        stage('Clonar Repositorio') {
            steps {
                script {
                    // Clona el repositorio desde GitHub
                    git 'https://github.com/Dhomochevsk/jenkinsRepository.git'
                }
            }
        }

        stage('Construir Imagen Docker') {
            steps {
                script {
                    // Construye la imagen Docker usando la variable definida
                    sh "docker build -t ${env.IMAGEN} ."
                }
            }
        }

        stage('Desplegar en Docker') {
            steps {
                script {
                    // Ejecuta el contenedor Docker usando la imagen creada
                    sh "docker run -d -p 8100:80 --name ${env.CONTENEDOR} ${env.IMAGEN}"
                }
            }
        }

        stage('Ejecutar Pruebas en el Navegador') {
            steps {
                script {
                    // Espera un poco para que el contenedor se inicie correctamente
                    sleep 5

                    // Simula que el navegador cargue la página y ejecute las pruebas
                    // Aquí usamos curl para capturar la salida
                    sh '''
                    curl http://localhost:8100 > salida.log
                    grep "Error" salida.log || true
                    '''
                }
            }
        }
    }
}
