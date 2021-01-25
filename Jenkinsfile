def dockerhub = "dzulfikarindzar/jenkins-backend"
def image_name = "${dockerhub}:${BRANCH_NAME}"
def builder

pipeline {

    agent any

    parameters {
        string(name: "Isi URL", defaultValue: "isikan url", description: 'URL gtihub')
        booleanParam(name: 'RUNTEST', defaultValue: 'true', description: 'Checklist for RUNTEST')
        choice(name: 'DEPLOY', choices: ['Yes', 'No'], description: 'Select for DEPLOY')
    }

    stages {

        stage('Instal Dependencies') {
            steps {
                nodejs("nodever14") {
                    sh 'npm install'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    builder = docker.build("${dockerhub}:${BRANCH_NAME}")
                }
            }
        }

        stage('Run Testing') {
            when {
                expression {
                    params.RUNTEST
                }
            }
            steps {
                script {
                    builder.inside {
                        sh 'echo passed'
                    }
                }
            }
        }

        stage('Push Image') {
            when {
                expression {
                    params.RUNTEST
                }
            }
            steps {
                
                script {
                    builder.push()
                }
            }
        }

        stage('Deploy on develop') {
            when {
                expression {
                    params.DEPLOY == 'Yes' 
                }
            }
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'develop',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        sourceFiles: 'docker-compose.yml',
                                        remoteDirectory: 'app',
                                        execCommand: 'cd app && cd app && docker-compose stop && docker-compose up -d',
                                        execTimeout: 120000,
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
    }
}