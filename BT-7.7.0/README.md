
### 宝塔6安装命令：
`wget -O install.sh https://raw.githubusercontent.com/Se7enMuting/download/master/BT-7.7.0/install_6.0.sh && bash install.sh`

### 升级(降级)到7.7版本命令：
`curl https://raw.githubusercontent.com/Se7enMuting/download/master/BT-7.7.0/update6.sh|bash`

### 官方升级包地址：
`http://download.bt.cn/install/update/LinuxPanel-7.7.0.zip`

### 自用的宝塔面板一键优化补丁

(原文地址: http://blog.cccyun.cc/?post=431)  
这个是自用的宝塔面板一键优化补丁，主要有以下优化项目：  
1.去除宝塔面板强制绑定账号  
~~2.去除各种删除操作时的计算题与延时等待~~  
3.去除创建网站自动创建的垃圾文件（index.html、404.html、.htaccess）  
4.关闭未绑定域名提示页面，防止有人访问未绑定域名直接看出来是用的宝塔面板  
5.关闭活动推荐与在线客服  
6.去除自动校验文件与上报信息定时任务  
7.去除面板日志与网站绑定域名上报  

适用宝塔面板版本7.7:  
`wget -O optimize.sh https://raw.githubusercontent.com/Se7enMuting/download/master/BT-7.7.0/optimize.sh && bash optimize.sh`  
全部使用补丁的方式，而不是替换文件的方式，方便后续升级版本的修改。

适用宝塔面板7.9版本的命令（7.9版本不支持去除强制绑定账号，新增去除面板首页广告）：  
`wget -O optimize.sh https://raw.githubusercontent.com/Se7enMuting/download/master/BT-7.7.0/7.9/optimize_new.sh && bash optimize.sh`

### 宝塔7.7.0 跳过手机账号绑定:（上面彩虹大佬的7.7补丁已经通过其他方式实现了（优化项目1），可以无需输入下面指令）
`rm -rf /www/server/panel/data/bind.pl`

### 宝塔7.7.0 禁用套件推荐安装弹窗:（本人已在上面彩虹大佬的7.7补丁里额外集成下面指令，无需再输入下面指令）
`sed -i "s/self.CheckInstalled()/True/g" /www/server/panel/class/system.py`

### 安装关联自己证书（abc.com 改成自己域名）(先打开“面板SSL”，再绑定域名，再输入下面指令替换自己证书)：
```
rm -rf /www/server/panel/ssl/certificate.pem && \
rm -rf /www/server/panel/ssl/privateKey.pem
```
```
ln -s /etc/v2ray-agent/tls/abc.com.crt /www/server/panel/ssl/certificate.pem && \
ln -s /etc/v2ray-agent/tls/abc.com.key /www/server/panel/ssl/privateKey.pem
```

### 宝塔7.7.0解锁收费插件变无限期（先在Web上打开一次软件商店，再打开“离线模式”，再输入下面指令）：
找到：
`www/server/panel/data/plugin.json`
将
`"endtime": -1`
全部替换为
`"endtime": 999999999999`
保存，重启面板
```
sed -i 's/"endtime": -1/"endtime": 999999999999/g' /www/server/panel/data/plugin.json
```

### 问题：软件中心的列表找不到了，弹窗提示错误

 `/www/server/panel/data/plugin.json` 文件丢失，手动将备份文件导入即可
 
 ### 原版彩虹大佬的7.7补丁中这项优化：`2.去除各种删除操作时的计算题与延时等待`，在本人的补丁正已被屏蔽，要开启请自行修改`optimize.sh`文件
