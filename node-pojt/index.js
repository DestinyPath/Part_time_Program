const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./model/db');
const cors = require('cors')
//配置跨域
app.use(cors());
app.use(express.json({ limit: '10mb' }));

//拦截器，解决跨域和token问题
app.use((req, res, next) => {
    const token = req.headers.authorization;//post请求头的token
    if (token) {
        req.headers.authorization = token.split(' ')[1];//去除token前面的Bearer\
    }
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, authorization, Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
        res.header('Access-Control-Max-Age', '3600'); 
    if(req.method === 'OPTIONS') {
        res.status(204);
    } 
    next();
});

// 使用body-parser中间件解析请求体
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false }))
app.use(bodyParser.text({ type: '*/xml' }));

// 使用body-parser中间件解析请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 定义主页路由
app.get('/', (req, res) => {
  res.send('node项目成功运行！');
});

// -前端接口
app.use('/GetData', async (req, res) => {
  try {
    let ress = await db.find("Recruitment", "658ddade617811225c2535ac");
    if (ress) {
      console.log('获取数据成功');
      res.status(200).send({ code: 0, msg: "成功", data: ress.RecruitmentData });
      console.log(ress.RecruitmentData);
    }else{
      console.log('获取数据失败');
      res.status(400).send({ code: 1, msg: "失败", data: null });
    }
  } catch (error) {
    console.error('/GetData查询出错:', error);
    res.status(500).send({ code: -1, msg: "服务器内部错误", data: null })
  }
});

// 连接数据库
(async () => {
  await db.connectToDatabase();
})();

// 启动服务器，监听7901端口
app.listen(7901, () => {
  console.log('@管理员： Node服务器开启成功 http://localhost:7901/');
});