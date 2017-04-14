# 我的音乐

## 项目初始化

- 新建一个 music  目录
- 使用 `npm init` 命令，初始化一个 `package.json` 文件

## 路由设计

当用户访问什么路径的时候做什么操作

GET  / 渲染首页
GET  /add 渲染添加音乐页面
POST /add 处理添加音乐请求
GET  /edit 渲染编辑音乐页面
POST /edit 处理编辑音乐页面
GET  /remove 处理删除音乐请求

后台拿到当前的请求方法和当前的请求路径

### 文件上传

在 node 中可以使用 formidable 这个包来处理。

在前端想做一些上传特效的话，例如上传进度，上传的图片即时展示：
jQuery-file-upload（使用非常广泛）
Web Uploader（百度出了一个插件）

- 模块化
  + CMD
  + AMD
  + UMD
  + ECMAScript 6 Module
- node 基础
  + global 
  + __dirname __filename
  + Node 是一个轻内核，高度模块化的一个平台
- 文件操作
- 网络编程
- Web 开发（http）
