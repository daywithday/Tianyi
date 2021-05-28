<p align="center">
  <img width="320" src="./static/logo.png">
</p>


简体中文 | [English](./README.md) 

## 简介

[Tianyi](https://github.com/daywithday/Tianyi) 是七日杀web端管理工具，基于[vue-element-admin](https://panjiachen.github.io/vue-element-admin)后端管理工具实现。它使用了最新的前端技术栈，内置了 i18n 国际化解决方案，提供了丰富的功能组件，它可以帮助你更便捷的帮助你管理服务端。

## 开发

```bash
# 克隆项目
git clone https://github.com/daywithday/Tianyi.git

# 进入项目目录
cd Tianyi

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 http://localhost:9527

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

