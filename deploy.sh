#!/bin/bash
cd build
tar czf myApp.tar.gz  static/ asset-manifest.json favicon.ico index.html
scp -P 1982 myApp.tar.gz root@142.44.214.146:/home/admin/web/alexdemo.go4itest.com
rm myApp.tar.gz
ssh -T  -p 1982 root@142.44.214.146 << 'ENDSSH'
cd ../
cd /home/admin/web/alexdemo.go4itest.com
rm -rf public_html
mkdir public_html
tar -xf myApp.tar.gz -C public_html
rm -rf myApp.tar.gz
#rm myApp.tar.gz
#cd myApp
#sudo npm install
#pm2 start myApp
ENDSSH
