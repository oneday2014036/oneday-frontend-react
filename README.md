author: ziyou
这是oneday的前端仓库。
# 前言
oneday-frontend-react是一个用React构建的前端应用，推荐搭配oneday-backend项目使用。
本项目基于前后端分离结构，在部署之前，需要确保拥有一个后端服务器。
API endpoint: /api

# 部署
目前有自行构建（npm run bulid）和docker两种部署方式
## 自行构建
### 获取项目源码
```shell
git clone https://github.com/oneday2014036/oneday-frontend-react.git
cd oneday-frontend-react
npm run build
```
### 安装nginx
```shell
# Ubuntu & Debian
sudo apt -y install nginx
sudo systemctl enbale nginx
# 检查nginx是否启动
sudo systemctl status nginx
```

### 配置项目
假设你的域名是`DOMAIN`
```shell
vi bulid/nginx.conf
```
将`DOMAIN`替换为你自己的域名
```yaml
server {
    listen       80;
    server_name  DOMAIN;

    access_log  /var/log/nginx/oneday.access.log  main;

    location / {
        root   /var/www/oneday/html;
        index  index.html index.htm;
    }
    
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```
然后启用虚拟主机，重启nginx使配置生效
```shell
sudo cp bulid/nginx.conf /etc/nginx/site-available/oneday
sudo ln -s /etc/nginx/site-available/oneday /etc/nginx/site-enable/
sudo mkdir -p /var/www/oneday/html
sudo cp bulid/* /var/www/oneday/html/*
sudo nginx -s reload
```

## docker部署
本项目也可以采用docker部署。
