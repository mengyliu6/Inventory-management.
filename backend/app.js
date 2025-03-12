const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 中间件
app.use(cors());
app.use(bodyParser.json());

// 连接 MongoDB 数据库
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true, // 使用新的 URL 解析器
    useUnifiedTopology: true, // 使用新的服务器发现和监视引擎
  })
  .then(() => console.log("MongoDB connected")) // 连接成功时输出日志
  .catch((err) => console.log(err)); // 连接失败时输出错误信息

// 基本路由
app.get("/", (req, res) => {
  res.send("Inventory Management System API");
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
