# InstagramBot
<h3>Description (Descrição)</h3>

---

A project (just for fun) to make comments on sweepstakes on instagram with a database of people that agreed being marked on sweepstakes with mongoDB.

---

Um projeto (apenas por brincadeira) para comentar em sorteios no instagram com um banco de dados de pessoas que aceitaram serem marcadas em sorteios com mongoDB.

---
<br>

![Platform](https://img.shields.io/badge/platform-NODE-lightgrey.svg?style=flat)

# Instalation (Instalação)

<h3>If using Docker:</h3>
First you have to enter the directory of db and in other terminal in the directory of the bot and run the steps below for each directory.
<br>
<br>

1. Install Docker :
    - If using Linux/Ubuntu or any other almost the same -> [Install Docker Linux](https://docs.docker.com/engine/install/ubuntu/)
    - If using Windows -> [Install Docker Desktop Windows](https://docs.docker.com/docker-for-windows/install/)
2. Build Image of the existing Dockerfile:
     - Run command 
       
       ```bash
        $ sudo docker build -t "instabot:v1.0" .
       ```
     - Then wait for the image to build and verify 
        if the image is successfully builted. You can read this message below
        ```bash 
         Successfully built e0ce835f15ff
         Successfully tagged instabot:Dockerfile
        ```
        or with the command
       ```bash
        $ sudo docker images
       ```
       The bash should print the images like this
       ```bash
        REPOSITORY          TAG                 IMAGE ID            CREATED              SIZE
        instabot            Dockerfile          e0ce835f15ff        About a minute ago   943MB
        node                latest              0192dbbb554c        2 days ago           943MB
       ```
     - Now that you have your image, you have to run this image inside a container in docker, so write this command below to do it
       ```bash
        $ sudo docker run -it -v"$(pwd):/volume" -p3000:3000 instabot:Dockerfile bash
       ```
       So now you are inside the container and can start programming. If you press **CTRL + D**, you will exit to terminal.
        
       Note that this command has some unused information like the port that is going to 3000, but still works.
       
       If you have exited the container, make sure you continue the following instructions, if not procceed to the [next section](#variables-variáveis).
     - You can see the container that contains the image that was built with the command
       ```bash
        $ sudo docker ps -a
       ```
       Note that the <-a> was used to see all the exited containers that you have. If you have containers running on background you can see without the <-a>.
       
       This is what you may see
       ```bash
        CONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS                        PORTS               NAMES
        6bdea34b6a43        instabot:Dockerfile        "docker-entrypoint.s…"   13 minutes ago      Exited (130) 17 seconds ago                       romantic_hawking
       ```
     - So to finish starting and entering the container, just pick the container ID and paste in the command below to start the container
       ```bash
        $ sudo docker start <CONTAINERID>
       ```
       You will receive the Container ID in the terminal as answer.
       
       And to enter the container again copy the follow command
       ```bash
        $ sudo docker attach <CONTAINERID>
       ```
       **NOTE:** If you are using windows you don't need the sudo command.
       <br>
       
       DONE!

<h3>If using Node locally:</h3>

1. Install Node:
    - If using Linux/Ubuntu or any other almost the same -> [Install Node Linux](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/)
    - If using Windows -> [Install Node Windows](https://nodejs.org/en/download/)
2. Running with Node:
    - Enter the directories of db and the bot and run the command for each one
        ```bash
         $ node index.js
        ```
        Then everything must be working!

# Variables (Variáveis)
