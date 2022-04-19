# opsi-send
opsi-send
install 
1. cd directory / npm i
2. config .env file
3. install pm2 / npm i -g pm2
4. run pm2 / pm2 start server.js --name "opsi-api" -- start

.env description
//PTTYPE
PTTYPE_HI = รหัสสิทธิ์ส่งตรวจ HI
PTTYPE_OP = รหัสสิทธิ์ส่งตรวจ OP
PTTYPE_ALL = รหัสสิทธิ์ส่งตรวจ HI และ OP
