# DevOps Challenge


## Introduction

This test case is designed to provide a DevOps candidate the opportunity to show his skills in a real world challenge. The goal is not to see which tools you use, but more so that you can demonstrate that you’ve learned to use them, and how you work with them. Your solution is welcome to be as simple or complex as you want, but you please write us an email explaining anything you did that you feel was pushing the scope of the challenge.  We expect that you spend about 2 hours on this challenge.  Please let us know about any other things you would have liked to implement, but did not due to a lack of time.

**Docker**, **git** and **AWS** are is used as a core component of this case. If you don’t have basic experience with these technologies please contact us.  The app to be installed is written in react with a node API backend.  Please do not hesitate to contact us if you need help with anything Node related.

This challenge is about packaging a simple microservice based application in docker and deploying it to AWS.  You can show more advanced DevOps skills by using Infrastructure as Code to provision everything on AWS, or making by making our app somehow scalable and highly available using one of Amazon’s many options (Beanstalk, ECS, EKS, manually provisioned autoscaling groups, etc). You get more extra points when it’s secure and you can tell us why, or when you simply tell us why it’s not secure in order to save yourself some time from securing it. DevOps practices should be used. More automation is better, code should read like documentation or be documented itself, parameters of interest should be somehow apparent.  Feel free to implement/demonstrate anything else you think is an important part of a production environment.


## The Square Machine
#### Bringing v1 live to production
The Square Machine application is a 12-factor node/react application.  It's function is to take numbers, square them, and keep these pairs in a database.  It also prints out all the results it has computed each time it is accessed

The src directory contains the source code for 3 microservices:
### client
 *A react based user interface.  It lists on* **PORT 3000**
The most relavant application code is located in src/Square.js

### server
*A simple api to compute, store and retrieve inputs and their squares.  It listens on* **PORT 5000**
Parameters to be passed in as environment variables:

| Parameter  | Description |                                      
| :---  | :--- |
| PGHOST     | Hostname of a postgres server |                          
| PGPORT     | The port to connect on |                                   
| PGDATABASE | Name of database to be used by app |                       
| PGUSER     | Username of a postgres username with access to PGDATABASE |
| PGPASSWORD | the password for PGUSER |                                  

### nginx
*A simple proxy providing routing for the app.  It listens on* **PORT 80**

###Postgres
is also specified and installed by the docker-compose file and.  It does not have a directory src, as all configuration is provided through environment variables defined in the Docker configurations.

The current source tree was setup by a junior developer who has just started with Docker.  All of the Dockerfiles are named Dockerfile.dev.  The Developer is unsure about what changes should be made before moving his code into production.  The following commands can be used to start up the application on a system with Docker installed.

  git clone https://github.com/AboutLocal/DevOpsCodeChallenge
  cd DevOpsCodeChallenge
  docker-compose up

If the api microservice throws an error about connecting to MySQL, just do a docker-compose down and docker-compose up in order to restart it.

Once everything is up and running, you should be able to access the app by pointing your web browser at **PORT 3050** on the docker host.

## How to get started ##
Please fork or copy the github/AboutLocal/DevOpsCodeChallenge repository to your own git repository (github or anything else) and work from there.  Commit all changes you make to this repository.

Please bring the application up on a personal AWS account using the free tier.  If for some reason you don't have a have a AWS account or remaining "free tier", please contact us and we will find a solution.

## When you are finished

Please restart.  When you're done, check your finished results into a public (or password protected) git repository and share it with us along with the URL to access the up and running square machine.  Please leave the application up and running, as we will have you show us more about your work and how you did it in your tech deep dive.  If you have time, knowledge and desire, please also implement a CI/CD system that we can use to deploy new code, which you can show us in your interview.  Tell us what else you think we need, and if you have time and desire build it for us.

Please include any code you used to setup AWS in the git repository.  If you used the AWS, please provide a high-level summery of the things you did in the AWS console to get this up and running in a file called AWS.md in the root of your git reposiotry..
