# NGINX

## 安装 NGINX

### 解压

```bash
tar -xf nginx-1.24.0.tar.gz
cd nginx-1.24.0
```

### 安装依赖

```bash
yum install -y gcc-c++ make zlib-devel pcre-devel openssl-devel
```

### 安装

./configure --user=root --prefix=/usr/local/nginx-1.24.0 --with-http_ssl_module --with-http_v2_module

make

make install

### 创建 logs 目录

mkdir logs

### 启动

./sbin/nginx

### 配置系统服务

vi /etc/systemd/system/nginx.service

```bash
[Unit]
Description=Nginx HTTP Server
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/nginx-1.24.0/sbin/nginx
ExecReload=/usr/local/nginx-1.24.0/sbin/nginx -s reload
ExecStop=/usr/local/nginx-1.24.0/sbin/nginx -s stop
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

### 重载 systemd 配置文件

systemctl daemon-reload

### 开机自启

systemctl enable nginx

安装完成~~

### nginx service 命令

systemctl start nginx

systemctl status nginx

systemctl restart nginx

## 在既有 nginx 上增加编译 http2 模块

参考自：[既有 Nginx 不停服重新动态编译增加 http2.0 模块](https://www.cnblogs.com/surging-dandelion/p/14378073.html)

```sh
nginx -V
```

复制 `configure arguments`，增加 `--with-http_v2_module`

```sh
./configure --prefix=/usr/local/nginx-1.24.0 --user=root --with-http_ssl_module --with-http_stub_status_module --with-http_v2_module
```

只 make 不 install

```sh
make
```

make 过后在编译目录 下 objs 中生成新的 nginx 执行文件

备份 ./sbin 下的 nginx

```sh
mv sbin/nginx sbin/nginx-without-h2.bak
```

将新编译的 nginx 执行文件拷贝到原执行文件的位置

```sh
cp objs/nginx sbin/nginx
```

查看现有 nginx 快捷运行命令

```sh
whereis nginx
```

备份现有 nginx 快捷运行命令

```sh
mv /usr/local/bin/nginx /usr/local/bin/nginx-without-h2.bak
```

拷贝 nginx 运行命令，快捷运行

```sh
cp sbin/nginx /usr/local/bin/
```

编辑 nginx.conf

```sh
listen 443 ssl http2;
```

重启 nginx

```sh
nginx -t
# 必须 stop、不能 reload
nginx -s stop
nginx
```

## 强制协商缓存 index.html

```nginx.conf
location / {
    root D:/Softs/nginx-1.23.4/html/dist;
    try_files $uri $uri/ /index.html;
    index  index.html;

    # ++++++++
    if ($request_filename ~* .*index\.(html)$){
        add_header Cache-Control "no-cache";
    }
}
```

## root 与 alias 的区别

相关模块：`ngx_http_core_module`

### alias 定义请求替换项

```nginx.conf
location /i/ {
    alias /data/images/;
}
```

当请求 /i/top.gif 时，返回 /data/images/top.gif

即：用 alias 后面的内容替换 location 后面的内容

### root 定义请求根目录

```nginx.conf
location /i/ {
    root /data/images;
}
```

当请求 /i/top.gif 时，返回 /data/images/i/top.gif

即：用 root 后面的内容拼接上 location 后面的内容

## proxy_pass 后有无 `/` 的区别

相关模块：`ngx_http_proxy_module`

### 结尾有斜杠

```nginx.conf
location /name/ {
    proxy_pass http://127.0.0.1/;
}
```

/name/ 被认为是根路径，直接访问 /name/ 后面的路径即可，则 nginx 不会保留 /name/

即：使用 proxy_pass 后面的内容 替换 请求路径中开头及 location 的内容

例：请求 http://localhost/name/abc，将被代理到 http://127.0.0.1/abc

### 结尾无斜杠

```nginx.conf
location /name/ {
    proxy_pass http://127.0.0.1;
}
```

/name/ 被认为是某个相对路径，nginx 需要保留完整路径才能正确访问

即：使用 proxy_pass 的内容 拼接 请求中 location 及之后的内容

例：请求 http://localhost/name/abc，将被代理到 http://127.0.0.1/name/abc

## 开启同源策略

常规、标准的 `CORS` 控制是通过预检请求时请求头中 `Origin` 与响应头中的 [`Access-Control-Allow-xx`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) 配合实现的，即通过 nginx 判断 `Origin` 然后给响应设置对应的响应头即可。

但通过设置响应头来控制，需要配置的行数过多，有一种简单的办法：**给非法源的请求返回 http 错误**，比如 500 等，同样能达到限制同源的效果。

### 1. 确定好允许的源

首先能确定的是自己服务所在的源能访问自己的服务

服务部署在公网的 `https://host/path` 上，`https://host/path` 就作为一个合法的源，应当允许该源访问

如果有通过内网访问这个服务的需求，而这个服务部署在了 `10.20.30.40` 这台服务器的 `8080` 端口上，那么 `http://10.20.30.40:8080` 或者 `https://10.20.30.40:8080` 也作为一个合法的源

当请求头中 `Origin` 为上述两个 URL 时应当正常返回，否则应当返回 http 500

### 2. 构建合法源的列表

```nginx.conf
# 在 server 上方添加 map
map $http_origin $origin_status {
    "~^https://host/path" 1;
    "~^https(?)://10.20.30.40:8080" 1;
    # 假如还有第三方合法源也可以放在后面
    "~*" 0;
}
```

当 `$http_origin` 的值是 `https://host/path` 时，`$origin_status` 的值是 `1`

当 `$http_origin` 的值是 `http://10.20.30.40:8080` 或者 `https://10.20.30.40:8080` 时，`$origin_status` 的值是 `1`

当 `$http_origin` 的值是其他值时，`$origin_status` 的值是 `0`

### 3. 非法源返回 500

```nginx.conf
map $http_origin $origin_status {
    "~^https://host/path" 1;
    "~^https(?)://10.20.30.40:8080" 1;
    "~*" 0;
}

server {
    location /api {
        if ($origin_status = 0){
            return 500;
        }
        proxy_pass http://localhost:48080/some-api;
    }
}
```

当请求的源不是 map 中的值时，会返回 http 500 给请求方
