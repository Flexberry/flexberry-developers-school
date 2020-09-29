#!/bin/sh

if [ $# -lt 1 ]
then
    echo "Format: $0 <stackName>"
    exit 1;
fi

Stack=$1
Net=${Stack}_default

echo "*** Disconnect all containers from network ***"
eval $(docker network inspect ${Net} --format '{{range .Containers}}docker network disconnect --force ${Net} {{.Name}};{{end}}')
docker stack rm $Stack
