/**
 * 图书管理系统-learn-入口文件
 */

const express = require("express");
const template = require("art-template");
const router = require("./router.js");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
//启动静态资源服务
app.use("/www", express.static("public")); //设置虚拟路径
//设置模板引擎
app.set("views", path.join(__dirname, "views")); //设置模板路径
app.set("view engine", "art");
app.engine("art", require("express-art-template"));

//处理请求参数
//挂载参数处理中间件
app.use(bodyParser.urlencoded({ extended: false }));
//处理json格式的参数
app.use(bodyParser.json());
//启动服务器功能
//配置路由
app.use(router);
//监听端口
app.listen(3000, () => {
  console.log("PORT 3000 is running");
});
