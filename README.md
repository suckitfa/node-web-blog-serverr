### Nodejs的用途
- Nodejs为js的一个运行环境
- 运行在服务端，作为web server
- 运行在本地，作为打包,构建工具

### 主要困惑
- 前端和服务端开发思路的转型问题
- API开发，数据存储，登入，日志，安全
- http stream session mysql redis, nginx, pm2

### 知识点介绍

![2022-08-29 231222](./public/2022-08-29 231222.png)

###  系统架构

![2022-08-29 231344](./public/2022-08-29 231344.png)

### 区分ES和JS和Nodejs

#### ES

- es6.ruanyifeng.com

- 定义了语法，写JS和nodejs必须遵守
- 定了变量，循环，判断，函数
- 原型和原型链，作用域和闭包，异步
- 不能够操作DOM，不能够监听click，不能够发送ajax，不能文件处理，不能处理http 几乎做不了实际的项目

#### JS

- 使用ES语法规范，外加web API （w3c）
- DOM操作，BOM操作，时间绑定，ajax
- 两者结合完成浏览器的操作

#### nodejs

- 使用es规范，外加nodejs API
- 处理http请求，文件处理
- 两者将结合，完成server端的操作