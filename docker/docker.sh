docker stop scrumpoker-app
docker rm scrumpoker-app
docker run -d -v ~/scrumpoker/:/var/scrum-poker -p 80 --name=scrumpoker scrumpoker /bin/bash -c /var/scrumpoker/docker/startup.sh

