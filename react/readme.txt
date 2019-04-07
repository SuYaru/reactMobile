1.全局安装 cnpm i webpack webpack-cli -g
2.局部安装 cnpm i webpack webpack-cli -D
3.webpack，默认的入口目录是src，而默认的入口文件是index.js
4.webpack，默认的出口目录是dist，而默认的出口文件是main.js
5.npm init -y，然后可以修改scripts，加上build项
6.在package.json里可以设置build以及dev
    webpack - -mode production   产品模式(所有代码被压缩、混淆)
    webpack - -mode development  开发模式(所有代码未被处理)
7.手动设置入口及出口文件的路径
    webpack - -mode mode(production/development) 入口文件路径 - -output 出口文件路径
8.ES6要转成ES5
    1)cnpm i babel-core babel-loader babel-preset-env -D
    2).babelrc的配置操作，设置 presets 为 env
    3)有两种方式可以进行语法转换
        a)package.json中可以设置 - -module-bind js=babel-loader
        2)设置webpack.config.js配置文件，对.js文件进行正则匹配，应用babel-loader进行语法转换
9.react的语法解析
    1)cnpm i react react-dom -S，react模块的安装
    2)cnpm i babel-preset-react -D
    3).babelrc的配置操作，设置 react 项
    4)react程序的编写
10.需要html的支持
    1)cnpm i html-webpack-plugin -D
    2)设置plugins，只要ctrl+c,ctrl+v复制粘贴官方文档，实现了html文件自动引入js的操作
    3)cnpm i html-loader -D
    4)可以实现对html文件进行压缩处理
11.需要css支持，并且实现css文件的单独抽离
    1)cnpm i mini-css-extract-plugin css-loader -D
    2)添加plugins插件以及rules加载器的配置
    3)会自动将css进行单独抽离，并且在html中自动引入css
12.需要服务支持
    1)cnpm i webpack-dev-server -D
    2)package.json中将webpack修改成webpack-dev-server - -open就可以了
13.static静态变量的设置在webpack编译时失败，需要安装 cnpm i babel-preset-stage-0 -D，再修改.babelrc配置文件，加入stage-0的语法解析

Es6- ->ES5差异
1.getDefaultProps- ->static defaultProps
2.getInitialState- ->contructor(){ this.state = {}} 或者是 state = {}
3.组件创建方式
    React.createClass- ->无状态组件 const Comp = ()=>{ reutrn (jsx) }
    React.createClass- ->有状态组件 class Comp extends React.Component{}
4.this指向问题
    1)在按钮等地方 this.xx.bind(this)
    2)在construct this.xx = this.xx.bind(this)
    3)使用箭头函数(推荐方式)
5.钩子函数之间不需要用,进行连接


react-router v2.x react 15.x
react-router v3.x （过渡版本）
react-router v4.x react 最新版本 16.x



React-Redux
1.flux(起源)层次结构太多，太复杂5-6个节点
2.redxu（4个左右节点）
3.react-redxu（专门为react提供状态管理的redux框架）
4.mobx

状态管理器：仓库、状态、获取、修改、同步，异步，拆分

显示数据：先有仓库 Store(有一个仓库，并且只有一棵状态树)--》通过reducer进行数据的初始化-->State无法进行传递-->state转属性(mapStateToProps)--->既然有属性了，就可以显示在组件中(Container Component容器组件)---》Component（视图组件）

操作数据： 仓库里有很多的方法 Action--> 方法离组件很远，到不了组件，并且方法没办法直接传递到组件中--> mapDispatchToProps，将方法全部转成属性--> connect进行连接-->组件当中(组件中就有属性类型的方法)

// 1.创建仓库
// 2.仓库里面有个啥？是不是要进行数据的初始化操作?
// 3.现在有一个仓库，并且仓库里已经有了一个初始值，但是这个初始值是一个state状态，和下面的Counter组件有没有半毛钱关系?
// 将状态先转成属性
// 4.现在状态已经转成了属性，但是和下面的组件有没有半毛钱关系?
// 5.没有关系，我就想它建立起连接的关系
// Counter组件 mapStateToProps
// 6.通过connect连接将视图组件变成了容器组件，这意味着组件中就有了属性数据
// 7.有了容器组件，但好像和仓库没有关系

createStore
reducer
state
mapStateToProps
connect
Provider
store
mapDispatchToProps



拆分，拆分层次：
1.仓库层，是单数 store (仓库层的代码，其实是很少的，并且也不会经常改变)
    仓库层有什么？当然是创建仓库 createStore(reducers)
2.reducers层，reducers我们称为数据操作中心，负责的是数据的初始化以及数据的修改操作，但是reducers都是放在仓库当中
    reducer有两个核心，reudcer是函数，两个核心就是两个参数：
    1）初始数据 state   = {counter:0}
    2）带参动作 action  => action.type（做什么事） action.payload（操作什么内容）
    reducer一定是纯函数操作模式，所以建议用对象拷贝
3.actions，动作层，派发的动作单独的全部在动作层
    动作其实就是方法，方法就是函数，所以actions层全部都是函数
4.reducer只支持同步数据修改，不支持异步数据修改，要实现异步数据修改，就一定要先使用中间件
5.cnpm i redux-thunk -S，所有中间件操作，全部都在仓库中先进行预处理
6.异步处理由谁提起？异步一定是动作，动作就函数，所以异步操作一定从actions层提起，但是actions层中需要进行一个内容的传递，叫 dispatch。 dispatch是一个函数，而这个函数其实是从 store 中就已经包含的，所以，我们其实是想要把 store 中的 dispatch 进行传递，传递到当前函数，那就意味着我们可以使用 dispatch 这一个函数，而这一个函数需要带参数，并且这个参数是一个 action ，也就是动作，也就是函数。
7.要将组件进行拆分，就多一层叫 components
8.既然有多个组件，就意味着一定会使用路由
9.在入口文件中，只有 store，还有 Provider，通过 Provider 将整个路由进行包含，并将store贯穿给所有的路由组件对象，那么，所有的组件中就都可以使用 store里面的所有数据以及方法
