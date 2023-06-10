#!/bin/bash
set -e
mysql --user=root --password=$MYSQL_ROOT_PASSWORD < /app/database_v1.sql

