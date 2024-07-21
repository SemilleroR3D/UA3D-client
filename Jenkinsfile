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
                bat 'npm install'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }

    post {
        always {
            cleanWs() 
        }
    }
}
