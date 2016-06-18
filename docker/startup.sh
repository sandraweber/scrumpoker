mkdir /var/mongodb/data -p
mkdir /var/scrumpoker/docker/log
mongod --fork --logpath /var/scrumpoker/docker/log/mongodb.log --dbpath=/var/mongodb/data --smallfiles --noprealloc
rm /var/scrumpoker/webapp/dist -R -f
npm install
export PATH="$(npm bin):$PATH"
cd client
npm install
gulp build
cd server
npm install
node app.js
