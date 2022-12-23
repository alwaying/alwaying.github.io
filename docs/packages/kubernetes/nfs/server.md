# 配置nfs服务端

1. 安装工具包，rpcbind属于nfs-utils的依赖，不需要单独安装

```bash
yum install -y nfs-utils
```

2. 配置共享目录

```bash
mkdir /data
chmod 755 /data
```

3. 编辑共享配置文件/etc/exports，添加如下内容<br/>
其中/data表示共享目录，*表示IP网段限制，可以使用192.168.0.0/24这种，rw表示权限设置，可读可写，sync表示同步共享目录，no_root_squash表示可以使用root授权，no_all_squash表示可以使用普通用户授权

```bash
/data *(rw,sync,insecure,no_subtree_check,no_root_squash)
```

4. 配置服务开机启动，并启动服务

```bash
systemctl enable rpcbind
systemctl enable nfs
systemctl start rpcbind
systemctl start nfs
```

5. 检测服务是否安装成功

```bash
showmount -e localhost
```
