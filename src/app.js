global.__base = __dirname + '/'
const express = require('express')
const taobao_apis = require('./taobao/taobao_apis')
const douyin_apis = require('./douyin/douyin_apis')//抖音测试
const jsonResult = require(global.__base + 'utils/jsonFormat');

app = express()

app.use('/taobao', taobao_apis);
app.use('/douyin', douyin_apis);//抖音测试

port = 3000


app.get('/ping', (req, res)=>{
    res.json(jsonResult({}, true))
})

app.listen(port, ()=>{
    console.log(`spider js app listening at http://localhost:${port}`)
})