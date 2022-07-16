# Plugwise Smile P1 to Tadoº Energy IQ
The node job will import the data of the Plugwise Smile P1 meter into the Tadoº energy IQ system

## Run from CLI
/usr/bin/node /home/pi/smilep1-tado/app.js id="abcdefgh" host="192.168.1.2" username="email@domain.com" password="**************"

## Run From Crom
Change variables in ```run.sh``` and add to cron.
You can now run multiple times a day. It will remove the old data of today.

### Example
```59      *       *       *       *       ~/smilep1-tado/run.sh >> /var/log/milep1-tado.log 2>&1```

## Variables
| Option   	| Description                                   	|
|----------	|-----------------------------------------------	|
| id       	| id of the Plugwise Smile P1                   	|
| host     	| ip aders or hostname of the Plugwise Smile P1 	|
| username 	| E-mailadres or login of Tadoº bridge/account   	|
| password 	| Password of the Tadoº bridge/account           	|

## Changes

### v1.0.0
Initial release