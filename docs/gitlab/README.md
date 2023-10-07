```sh
docker run \
 -d \
 -u root \
 --publish 9090:80 \
 --name gitlab \
 --volume /usr/local/gitlab/config:/etc/gitlab \
 --volume /usr/local/gitlab/logs:/var/log/gitlab \
 --volume /usr/local/gitlab/data:/var/opt/gitlab \
 gitlab/gitlab-ee:latest
```

管理员账号：root
管理员密码：vi /usr/local/gitlab/config/initial_root_password

root/pwd.mzx.com

默认 clone 链接是 hash，gitlab 修改 IP 地址及仓库地址
vi /usr/local/gitlab/config/gitlab.rb
external_url 'http://{ip}'
