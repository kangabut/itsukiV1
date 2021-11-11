#!/usr/bin/bash

clear
apt install tty-clock -y
apt install sox -y
apt install jq -y
apt install figlet -y
apt install wget -y
apt install ffmpeg libwebp -y
apt install nodejs -y
apt install tesseract -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
#npm install     
#npm audit fix //gw merahin karena ga guna

#!/usr/bin/bash

tty-clock -s -S -x -c -C 2 -b -B
clear
npm start