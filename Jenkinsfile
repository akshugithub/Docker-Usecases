pipeline {
    agent any
    tools { 
        maven 'maven'  
           }
           stages {
      stage('GIT checkout') {
           steps {
             
                  git branch: 'docker-mulstage-react-nginx-app', url: 'https://github.com/akshugithub/Docker-Usecases.git'
             
          }
        }
        
         stage('Docker Build'){
            steps{
                
              sh "docker build . -t akshayamurali/reactnginx"
              
            }
        }
        
        stage('Docker run ReactNginx'){
            steps{
                withCredentials([string(credentialsId: 'reactnginx', variable: 'reactnginx')]) {
                  sh "docker stop reactnginxc"
                  sh "docker rm reactnginxc"
                sh "docker run -d -p 2000:80 --name reactnginxc akshayamurali/reactnginx"
                }
            }
        }
           }
}
