# webpack-project
> The project will learn about webpack version 5 by myself.

## 專案建置步驟 :
``` bash
# 1. 下載及安裝 node.js 套件
> Download url: https://nodejs.org/zh-tw/download/ 
> 確定 node.js 安裝成功： node -v, npm -v 
``` 
``` bash
# 2. 建立專案開發環境
> 啟動 window 10 command 視窗
> d:\ mkdir webpack-project  
> cd webpack-project
``` 

``` bash
# 3. 建立版本控管 in github
> git init
> 
``` 

``` bash
# 4. 建立專案開發環境
> npm init -y
> 編輯 package.json
``` 

``` bash
### Webpack 基本配置
# 5. 安裝專案管理套件 (也稱腳手架) webpack 5
> npm install --save-dev webpack webpack-cli webpack-dev-server
> 新增 webpack.config.js 設定檔
``` 

``` bash
# 6. 初始專案結構：
webpack-project/
│
├─── dist/                # Webpack output
│
├─── node_modules/        # 專案相依套件
│
├─── src/                 # 專案源碼 
│   │
│   └─── main.js          # entry 入口檔案
│
├─── webpack.config.js    # Webpack 配置檔案
├─── package-lock.json
└─── package.json         # 已安裝 webpack、webpack-cli
``` 

``` bash
# 7. 安裝及設定與 webpack5 其他相關套件
> npm install --save-dev cross-env
> npm install --save-dev css-loader mini-css-extract-plugin
> 編輯 webpack.config.js 設定檔 
  for 
  a. cross-env
  b. css-loader
  c. mini-css-extract-plugin
``` 

``` bash
# 8. 安裝 JavaScript 的編譯器 Babel
### Babel 是一款 JavaScript 的編譯器，事實上 JavaScript 從發行到現在，經過了許多版本的更新，常見的 ES6、ES7 都屬於較新的版本，最為穩定的版本為 ES5，兼容性也是最高的， Babel 的用意就是將較新版本的  JavaScript 編譯成穩定版本，以提高兼容性。
> npm install --save-dev babel-loader @babel/core @babel/preset-env
``` 

``` bash

# . 安裝及設定 CSS framework Bootstrap 5
> npm install --save bootstrap

# 6. 安裝及設定 Font Icon 
> npm install --save @fortawesome/fontawesome-free



