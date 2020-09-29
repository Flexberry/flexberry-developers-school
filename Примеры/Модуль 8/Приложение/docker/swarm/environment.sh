#!/bin/sh

# Deployment
export TAG=latest
export AUTHOR=nicholasnoise

# Resource limits
export GATEWAY_LIMIT_MEMORY=1G
export APP_EMBER_LIMIT_MEMORY=1G
export APP_ODATA_LIMIT_MEMORY=2G

# Replicas
export APP_ODATA_REPLICAS=2

# Startup options for all mono apps
export MONO_OPTIONS="--gc=sgen --profile=log:heapshot=300000ms"

# Parametes for dbapp
## CONNECTIONS AND AUTHENTICATION
export APP_POSTGRES_max_connections=500
## RESOURCE USAGE (except WAL)
export APP_POSTGRES_shared_buffers=4GB
export APP_POSTGRES_temp_buffers=16MB
export APP_POSTGRES_work_mem=2097kB
export APP_POSTGRES_maintenance_work_mem=1GB
export APP_POSTGRES_shared_preload_libraries="'pg_stat_statements'"
### Asynchronous Behavior
export APP_POSTGRES_effective_io_concurrency=200
export APP_POSTGRES_max_worker_processes=8
export APP_POSTGRES_max_parallel_workers_per_gather=4
## WRITE AHEAD LOG
export APP_POSTGRES_wal_sync_method="fdatasync"
### Checkpoints
export APP_POSTGRES_wal_buffers=16MB
export APP_POSTGRES_min_wal_size=1GB
export APP_POSTGRES_max_wal_size=4GB
export APP_POSTGRES_checkpoint_completion_target=0.7
## QUERY TUNING
### Planner Cost Constants
export APP_POSTGRES_random_page_cost=1.1
export APP_POSTGRES_effective_cache_size=12GB
### Other Planner Options
export APP_POSTGRES_default_statistics_target=1000
export APP_POSTGRES_constraint_exclusion="off"
## ERROR REPORTING AND LOGGING
### Where to Log
export APP_POSTGRES_log_destination="'csvlog'"
export APP_POSTGRES_logging_collector="on"
export APP_POSTGRES_log_truncate_on_rotation="on"
export APP_POSTGRES_log_rotation_age="1d"
### What to Log
export APP_POSTGRES_log_checkpoints="on"
export APP_POSTGRES_log_lock_waits="on"
export APP_POSTGRES_log_temp_files=1024kB
## RUNTIME STATISTICS
export APP_POSTGRES_track_activities="on"
export APP_POSTGRES_track_counts="on"
export APP_POSTGRES_track_io_timing="on"
export APP_POSTGRES_track_functions="all"
export APP_POSTGRES_track_activity_query_size=8192

# Parameters for dbapp*
export DBAPP_PORT=25432

# parameters for gateway
export GATEWAY_CONF_VARIABLES='${SERVER_NAME}'
export GATEWAY_SERVER_NAME=eais.ics.perm.ru

# parameters for app
export APP_BACKENDROOT=http://eais.ics.perm.ru
export APP_CONNECTIONSTRING="Server=dbapp;Port=25432;User Id=postgres;Password=p@ssw0rd;Database=shop;Keepalive=30;CommandTimeout=180;"