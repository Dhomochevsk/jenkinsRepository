pipeline {
    agent any

    stages {
        stage('Clonar Repositorio') {
            steps {
                // Clona el repositorio
                git 'https://github.com/tuusuario/calculadora.git'
            }
        }
        stage('Construir') {
            steps {
                echo 'Construyendo el proyecto...'
            }
        }
        stage('Pruebas') {
            steps {
                echo 'Ejecutando pruebas...'
            }
        }
        stage('Desplegar') {
            steps {
                echo 'Desplegando el proyecto...'
            }
        }
    }
}

