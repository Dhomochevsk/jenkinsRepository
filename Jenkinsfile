pipeline {
    agent any

    stages {
        stage('Clonar') {
            steps {
                // Clonamos el repositorio Git
                git 'https://github.com/tuusuario/calculadora.git'
            }
        }
        stage('Construir') {
            steps {
                // Aquí puedes agregar pasos para construir el proyecto
                echo 'Construyendo el proyecto...'
            }
        }
        stage('Pruebas') {
            steps {
                // Aquí puedes agregar pasos para ejecutar pruebas
                echo 'Ejecutando pruebas...'
            }
        }
        stage('Desplegar') {
            steps {
                // Aquí puedes agregar pasos para desplegar el proyecto
                echo 'Desplegando el proyecto...'
            }
        }
    }
}
