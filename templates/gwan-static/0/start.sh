#!/bin/bash

git clone $CLONE_GIT /opt/git_repo

ln -s  /opt/git_repo/$CLONE_PUBLIC_HTML "/opt/gwan/0.0.0.0:80/#0.0.0.0/www"

chown -R 33:33  "/opt/gwan/0.0.0.0:80/#0.0.0.0/www"
chown -R 33:33  "/opt/git_repo"


( exec "/opt/gwan/gwan" )
