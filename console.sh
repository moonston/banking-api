#!/usr/bin/env bash

baseDir=$(dirname "$0")

#define some color
GREEN="\\033[0;32m"
RED="\\033[1;31m"
WHITE="\\033[0;02m"
YELLOW="\\033[1;33m"
CYAN="\\033[1;36m"
NORMAL="\033[0m"
SHORT=$0
SCRIPT_PATH=`dirname $0`

#handle cmd
case "$1" in
docker)

    cd "$SCRIPT_PATH";
    case "$2" in
    start)
        docker-compose -f docker-compose.yml start
    ;;
    stop)
        docker-compose -f docker-compose.yml stop
    ;;
    ssh-app)
        docker exec -it spendesk_app bash
    ;;
    ssh-db)
        docker exec -it spendesk_db  bash
    ;;
    create)
        docker-compose -f docker-compose.yml down
        docker-compose -f docker-compose.yml build
        docker-compose -f docker-compose.yml up -d --force-recreate
    ;;

    applog)
        docker logs -f spendesk_app
     ;;

    dblog)
       docker logs -f spendesk_db
    ;;

     esac
    cd -
    exit 0
;;

install)
    docker-compose -f docker-compose.yml down
    docker-compose -f docker-compose.yml build
    docker-compose -f docker-compose.yml up -d --force-recreate

#   dummy solution for now
    echo "Waiting for DB Container ..."
    sleep 65
    docker exec -i spendesk_app npm run migrate
;;

install-local)
  npm install && npm run migrate
;;

migrate)
  docker exec -i spendesk_app npm run migrate
;;

run)
  npm run dev
;;


#Pass info to console
*)
echo -e "$CYAN "
echo -e "$CYAN ############# Spendesk Console Tools ############# "
echo -e "$CYAN"
echo -e "$CYAN ##################### Env"
echo -e "$NORMAL$SHORT $YELLOW docker (create | start | stop | create | ssh-app | ssh-db | dblog | applog ) $NORMAL"
echo -e "$NORMAL$SHORT $YELLOW install $NORMAL"
echo -e "$NORMAL$SHORT $YELLOW migrate $NORMAL"
echo -e "$NORMAL$SHORT $YELLOW run 'locally' $NORMAL"

esac