pipeline {
    agent any
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
        
        stage('Run Proyect') {
            steps {
               bat 'npm run start'
            }
        }
    }

    post {
        always {
            cleanWs() 
        }
    }
}
