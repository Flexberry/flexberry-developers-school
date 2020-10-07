#!/bin/sh

if [ $# -lt 2 ]
then
    echo "Format: $0 <environmentFile> <stackName>"
    exit 1;
fi
if [ ! -f $1 ]
then
  echo "Environment file $1 doesn't exist"
  exit 2
fi
if [ ! -f cloud.yml ]
then
  echo "cloud.yml file doesn't exist in caller directory"
  exit 2
fi

. $1
Stack=$2
Net=${Stack}_default
while docker network inspect $Net >/dev/null 2>&1; do sleep 1; done

docker stack deploy -c cloud.yml $Stack
