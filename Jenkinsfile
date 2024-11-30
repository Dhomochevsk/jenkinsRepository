pipeline {
    agent any
    
    environment {
        // Puedes definir variables de entorno aquí si es necesario
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm: [
                    $class: 'GitSCM',
                    branches: [[name: '*/master']],  // Cambia el nombre de la rama si es necesario
                    userRemoteConfigs: [[
                        url: 'https://github.com/Dhomochevsk/jenkinsRepository.git',  // URL del repositorio
                        credentialsId: '2682522b-fe49-480f-b295-04624770b45d'  // ID de las credenciales
                    ]]
                ]
            }
        }

        // Puedes agregar más etapas aquí, como la construcción, pruebas, despliegue, etc.
        stage('Build') {
            steps {
                // Aquí iría tu proceso de construcción
                echo 'Building the project...'
            }
        }
        
        stage('Test') {
            steps {
                // Aquí iría el proceso de pruebas
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                // Aquí iría tu proceso de despliegue
                echo 'Deploying the project...'
            }
        }
    }

    post {
        success {
            echo 'The pipeline ran successfully!'
        }
        failure {
            echo 'The pipeline failed!'
        }
    }
}
