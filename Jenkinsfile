pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Nombre de la instalación de NodeJS en Jenkins
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/SemilleroR3D/UA3D-client.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                // Añade los pasos necesarios para desplegar tu aplicación
                echo 'Deploying...'
            }
        }
    }

    post {
        always {
            cleanWs() // Limpia el workspace después de la ejecución
        }
    }
}
