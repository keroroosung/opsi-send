# opsi-send
- Install API
1. cd opsi-send
2. npm i
3. Config .env File
4. Test / node server.js
- Install PM2
5. npm i -g pm2
6. cd opsi-send
7. pm2 start server.js --name "opsi-api" -- start
- Config .env Description<br>
PTTYPE_HI = รหัสสิทธิ์ส่งตรวจ HI ex. "'20','82'"<br>
PTTYPE_OP = รหัสสิทธิ์ส่งตรวจ OP ex. "'95','96'"<br>
PTTYPE_ALL = รหัสสิทธิ์ส่งตรวจ HI และ OP ex. "'20','82','95','96'"
