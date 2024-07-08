### 
- init 初始化项目
- dev 启动开发服务器
- npm link 链接:package.json文件中有
  "bin": {
    "zmp":"./bin/zmp.js"
  },
  链接到./bin/zmp.js文件

  
- 命令行可能输入参数需要安装commander
- 先安装一些依赖吧
```npm install @babel/core @babel/preset-env @babel/preset-react babel-loader commander fs-extra git-promise html-webpack-plugin inquirer nanospinner webpack webpack-chain webpack-cli webpack-dev-server axios --save
```
# zmp
- zmp init -t https://static.zhufengpeixun.com/template_1680930323773.json
