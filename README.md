# react-router-demo

这是一个入门React-Router的小巧Demo。这个demo里尽量不会为你带来新的所需知识。

## 安装

### 克隆
```bash
$ git clone https://github.com/yuthelloworld/react-router-demo.git <my-project-name>
$ cd <my-project-name>
```
### 安装依赖

```bash
$ npm install
```
## 运行
```bash
npm start
```
## 浏览器查看
浏览器输入 http://localhost:8080/

## 切换示例

以切换 redirectAuth示例为例  
- 编辑`webpack.config.js`

```JS
module.exports = {
  entry: './index.js',
//修改为
module.exports = {
  entry: './redirectAuth.js',
```
- 运行`npm start`

## 可以学到什么？


- React pure function(stateless component)
- webpack的简单配置和使用webpack-dev-server启动一个热更新的http-server
- React-Router的几个概念和简单应用
