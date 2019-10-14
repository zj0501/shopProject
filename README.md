单页面应用：SPA

项目结构：
    React-Demo
        my-app
            node_modules
            public
            src
                components: // 公共组件
                app.test.js // 删除掉
                增加一个文件夹：pages
                    app.js // 修改成app.jsx
                serice // 删除掉
                app.css // 删掉
                index.js // 
                    对service的引用，删掉
                    修改引用app.js的地址
                index.css// 删掉
            package.json
            .git...

React 路由：
    参考文档：http://react-guide.github.io/react-router-cn/docs/guides/basics/RouteConfiguration.html
    项目：三个页面：主页面，学习页面，个人中心
    1.安装依赖：
        npm install --save react-router@3.x
    2.引入
        import { Router,Route,hashHistory } from "react-router"
        /#/:路由的表现
    3.路由的引入
        <Router history={ hashHistory }>
            <Route path="/" component={ Home }></Route>
            <Route path="/learn" component={ Learn }></Route>
            <Route path="/ucenter" component={ UCenter }></Route>
        </Router>
    4.路由跳转
        Link
        <Link to="/">首页</Link>
    5.高亮效果
        activeClassName
    6.路由传递参数
        1.在跳转路劲部分添加参数
            <Route path="/category/:ids" component={ Category }></Route>
        2.在跳转位置添加具体内容
            <li><Link to="/category/1001">前端</Link></li>
        3.接受参数
            { this.props.params.ids }
    7.路由嵌套功能
        

    
    
    