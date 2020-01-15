/**
 * 路由模块
 *
 */
const express = require("express");
const router = express.Router();
const service = require("./service.js");
//路由处理
//跳转至主页
router.get("/", service.showIndex);
//跳转至添加图书
router.get("/toAddBook", service.toAddBook);
//添加图书（提交表单）
router.post("/addBook", service.addBook);
//跳转至修改图书
router.get("/toEditBook", service.toEditBook);
//修改图书，提交表单
router.post("/editBook", service.editBook);
module.exports = router;
