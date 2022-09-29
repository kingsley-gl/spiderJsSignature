/**
 * 抖音爬虫js相关接口
 * @module douyin_apis
 */

const express = require('express');
const moment = require('moment');
const getWrapSign = require('./signature-toutiao/wrap_sign');
const jsonResult = require(global.__base + 'utils/jsonFormat');

var router = express.Router();


router.use(function timeLog(req, res, next) {
    console.log(`TIME:${moment().format('YYYY-MM-DD HH:mm:ss')} URL: ${req.originalUrl}`);
    next();
});

router.get('/getWrapSign', (req, res) => {
    if (!req.query.cookie) { // 检查参数
        res.json(jsonResult({ msg: 'cookie参数不能为空' }, false))
        return;
    }
    let cookie = decodeURIComponent(req.query.cookie); // uri解码
    signature = getWrapSign(cookie); // 获取cookie对应的签名
    res.json(jsonResult({ signature: signature }, true))
})



module.exports = router;