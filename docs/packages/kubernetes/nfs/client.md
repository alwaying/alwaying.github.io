# 配置nfs客户端

1. 安装工具包，rpcbind属于nfs-utils的依赖，不需要单独安装

```bash
yum install -y nfs-utils
```

2. 检测服务端的共享目录,此服务器IP为上传配置NFS SERVER的IP地址

```bash
showmount -e 192.168.0.101
```

3. 挂载目录，k8s环境通过pod的volumes参数挂载即可