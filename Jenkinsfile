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
        
          /*stage('Docker Compose Execution'){
            steps{
                
             sh "docker build DockerUC1/ -t ijaz21/simpleexpressnodejs"
             sh "docker-compose down"
              sh "docker-compose up -d"
              
            }
        }*/
        stage('Docker run ReactNginx'){
            steps{
                withCredentials([string(credentialsId: 'dockerpassword', variable: 'Dockerpassword')]) {
                  sh "docker stop reactnginxc"
                     sh "docker rm reactnginxc"
                sh "docker run -d -p 2000:80 --name reactnginxc akshayamurali/reactnginx"
                }
            }
        }
           }
}
