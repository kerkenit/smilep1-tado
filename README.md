# Plugwise Smile P1 to Tadoº Energy IQ
The node job will import the data of the Plugwise Smile P1 meter into the Tadoº energy IQ system

## Requirements
- Plugwise Smile P1
- Tadoº Bridge
- Node 14+

## Install
```
cd ~/
git clone https://github.com/kerkenit/smilep1-tado.git
sudo touch /var/log/milep1-tado.log
sudo chown $(id -u -n):$(id -g -n) /var/log/milep1-tado.log
sudo chmod 755 /var/log/milep1-tado.log
chmod 755 ~/milep1-tado/run.sh
```

## Run from CLI
```/usr/bin/node ~/smilep1-tado/app.js id="abcdefgh" host="192.168.1.50" username="email@domain.com" password="P@a$$wørd"```

## Run From Crom
Change variables in ```run.sh``` and add to cron.
You can now run multiple times a day. It will remove the old data of today.

### Example
Run every hour on the 59th minute

```59      *       *       *       *       ~/smilep1-tado/run.sh >> /var/log/milep1-tado.log 2>&1```

## Variables
| Option   	| Description                                                                                                  	|
|----------	|--------------------------------------------------------------------------------------------------------------	|
| id       	| id of the Plugwise Smile P1<br>fill in the id of the device, e.g. 'hcfrasde'                                 	|
| host     	| IP address or hostname of the Plugwise Smile P1<br>fill in the ip address of the device, e.g. '192.168.1.50' 	|
| username 	| E-mailadres or login of Tadoº bridge/account                                                                 	|
| password 	| Password of the Tadoº bridge/account                                                                         	|

## Changes

### v1.0.0
Initial release

### v1.0.1
Improved documentation