# vue-shop-cli

这是一款基于vue实现的，适用于电商平台的架手架，移动、轻便、可扩展性强。

## 技术栈

vue2 + vue-rotuer2 + vuex2 + webpack + ES6/7 + fetch + sass + svg

## 项目布局

```
|-- build                            // webpack配置文件
|-- config                           // 项目打包路径
|-- waimai                                // 上线项目文件，放在服务器即可正常访问
|
|-- src                              // 源码目录
|   |-- components                   // 组件
|       |-- common                   // 公共组件
|            |-- loading.js           // 页面初始化加载数据的动画组件
|            |-- mixin.js             // 组件混合(包括：指令-下拉加载更多，处理图片地址)
|       |-- footer                   // 底部公共组件
|       |-- header                      // 头部公共组件
|
|   |-- config                       // 基本配置
|       |-- env.js                   // 环境切换配置
|       |-- fetch.js                 // 获取数据
|       |-- mUtils.js                // 常用的js方法
|       |-- rem.js                   // px转换rem
|
|   |-- images                       // 公共图片
|
|   |-- pages                        // 页面组件
|       |-- forget                   // 忘记密码，修改密码页
|       |-- home                     // 首页
|       |-- login                    // 登陆注册页
|       |-- search                   // 搜索页
|       |-- shop                     // 商铺筛选页
|       |-- my                       // 我的
|
|   |-- plugins                      // 引用的插件
|
|   |-- router                       // 路由配置
|
|   |-- service                      // 数据交互统一调配
|        |-- template                 // 开发阶段的临时数据
|        |-- getData.js               // 获取数据的统一调配文件，对接口进行统一管理
|
|   |-- store                        // vuex的状态管理
|       |-- modules                  // store模块
|       |-- action.js                // 配置actions
|       |-- getters.js               // 配置getters
|       |-- index.js                 // 引用vuex，创建store
|       |-- mutation-types.js        // 定义常量muations名
|       |-- mutations.js             // 配置mutations
|
|   |-- style                        // 各种样式文件
|       |-- common.scss              // 公共样式文件
|       |-- mixin.scss               // 样式配置文件
|
|   |-- App.vue                      // 页面入口文件
|
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 代码编写规格
|-- .gitignore                       // 忽略的文件
|-- favicon.ico                      // 页面左上角小图标
|-- index.html                       // 入口html文件
|-- package.json                     // 项目及工具的依赖配置文件
|-- README.md                        // 说明
```

## 项目运行

```
克隆，或者直接下载
git clone https://github.com/ppya0812/vue-goshop  

进入文件夹
cd vue-goshop

安装依赖
npm install
```

## 编译环境

```
开启本地服务器
npm run dev

访问 http://localhost:8088
```

## 线上版本

```
npm run build

生成的waimai文件夹放在服务器即可正常访问
```
