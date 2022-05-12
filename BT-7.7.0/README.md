
宝塔6安装命令：
wget -O install.sh https://raw.githubusercontent.com/Se7enMuting/download/master/BT-7.7.0/install_6.0.sh && bash install.sh

升级(降级)到7.7版本命令：
curl https://raw.githubusercontent.com/Se7enMuting/download/master/BT-7.7.0/update6.sh|bash

官方升级包地址：
http://download.bt.cn/install/update/LinuxPanel-7.7.0.zip

宝塔面板一键优化补丁
适用宝塔面板版本7.7:
wget -O optimize.sh https://raw.githubusercontent.com/Se7enMuting/download/master/BT-7.7.0/optimize.sh && bash optimize.sh

适用宝塔面板7.9版本的命令（7.9版本不支持去除强制绑定账号，新增去除面板首页广告）：
wget -O optimize.sh https://raw.githubusercontent.com/Se7enMuting/download/master/BT-7.7.0/7.9/optimize_new.sh && bash optimize.sh

宝塔7.7.0 跳过手机绑定:
rm -rf /www/server/panel/data/bind.pl

宝塔7.7.0 禁用套件推荐安装弹窗:
sed -i "s/self.CheckInstalled()/True/g" /www/server/panel/class/system.py

安装关联自己证书：
rm -rf /www/server/panel/ssl/certificate.pem && \
rm -rf /www/server/panel/ssl/privateKey.pem

ln -s /etc/v2ray-agent/tls/or-jp-m1.zi5.win.crt /www/server/panel/ssl/certificate.pem && \
ln -s /etc/v2ray-agent/tls/or-jp-m1.zi5.win.key /www/server/panel/ssl/privateKey.pem

宝塔7.7.0解锁收费插件变无限期：
找到：
www/server/panel/data/plugin.json
将
"endtime": -1
全部替换为
"endtime": 999999999999
保存，重启面板
