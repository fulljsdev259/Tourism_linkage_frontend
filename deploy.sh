#!/bin/bash

zip build.zip  build/* 
scp -i ~/Desktop/Tourism_Linkages_front_end.pem  build.zip  ubuntu@ec2-3-17-143-130.us-east-2.compute.amazonaws.com:~/
rm -rf build.zip
ssh -i Tourism_Linkages_front_end.pem ubuntu@ec2-3-17-143-130.us-east-2.compute.amazonaws.com << 'ENDSSH'
unzip build.zip
cp -R build/*  /var/www/html/app/
rm -rf build.zip
rm -rf build
ENDSSH
