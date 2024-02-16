#/bin/sh

# Pull repository
cd /home/logistics && git pull

# deploy back-end
pm2 stop be-logistic
cd /home/logistics/back-end && npm install
pm2 start be-logistic

# deploy front-end
cd /home/logistics/front-end && npm install && npm run build
cp -R dist/* /var/www/html/

# restart web server
systemctl restart nginx

# save pm2 process
pm2 save
echo "Berhasil menyimpan pm2 process state logistics"

# display pm2 status
pm2 status