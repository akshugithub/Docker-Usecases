pipeline {
    agent any
    tools { 
        maven 'maven' 
           }
           stages {
      stage('GIT checkout') {
           steps {
             
                  git branch: 'docker-compose-multicontainers', url: 'https://github.com/akshugithub/Docker-Usecases.git'
             
          }
        }
       /* stage('Compile') {
           steps {
               sh 'mvn clean test package'
            }
        }
        
        stage('Build') {
           steps {
               sh 'mvn clean install'
            }
        }*/
        
         stage('Docker Build'){
            steps{
                
              sh "docker build . -t akshayamurali/noderedis"
              
            }
        }
        
    //    stage('Push to dockerHub'){
      //       steps{
        //         withCredentials([string(credentialsId: 'dockerpassword', variable: 'Dockerpassword')]) {
          //        sh "docker login -u akshayamurali -p ${Dockerpassword}"
                 
            //     }
                 
              //   sh "docker push akshayamurali/noderedis"
            // }
       //  }
         
          stage('Docker Compose Execution'){
            steps{
                
             /*sh "docker build DockerUC1/ -t akshayamurali/simpleexpressnodejs"*/
             sh "docker-compose down"
              sh "docker-compose up -d"
              
            }
        }
           }
}
