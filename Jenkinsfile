pipeline {
    agent any

    environment {
        // Definir aquí las variables de entorno, si es necesario
    }

    stages {
        stage('Checkout del Repositorio') {
            steps {
                script {
                    // Checkout desde el repositorio utilizando las credenciales configuradas
                    checkout scm: [
                        $class: 'GitSCM',
                        branches: [[name: '*/master']],  // Puedes cambiar 'master' por la rama que necesites
                        userRemoteConfigs: [[
                            url: 'https://github.com/Dhomochevsk/jenkinsRepository.git',
                            credentialsId: '2682522b-fe49-480f-b295-04624770b45d'  // Asegúrate de que esta credencial esté configurada en Jenkins
                        ]]
                    ]
                }
            }
        }

        stage('Construir Imagen Docker') {
            steps {
                script {
                    // Aquí va el código para construir la imagen Docker
                    echo 'Construyendo la imagen Docker...'
                    // Añadir aquí los comandos para construir la imagen Docker
                }
            }
        }

        stage('Ejecutar Contenedor Docker') {
            steps {
                script {
                    // Aquí va el código para ejecutar el contenedor Docker
                    echo 'Ejecutando el contenedor Docker...'
                    // Añadir aquí los comandos para ejecutar el contenedor Docker
                }
            }
        }
    }

    post {
        always {
            // Acciones que deben ejecutarse siempre después de la ejecución del pipeline
            echo 'Pipeline ejecutado, realizando tareas de limpieza...'
        }
        success {
            // Acciones cuando el pipeline se ejecute correctamente
            echo 'Pipeline ejecutado correctamente.'
        }
        failure {
            // Acciones en caso de que el pipeline falle
            echo 'El pipeline ha fallado.'
        }
    }
}
