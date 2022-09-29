/**
 * 淘系爬虫js相关接口
 * @module taobao_apis
 */

const express = require('express');
const moment = require('moment');
const getSessionId = require('./subway-zhitongche/getSessionId')
const getDynamicToken = require('./dynamic-token/getDynamicToken');
const jsonResult = require(global.__base + 'utils/jsonFormat');

var router = express.Router();


router.use(function timeLog(req, res, next) {
    console.log(`TIME:${moment().format('YYYY-MM-DD HH:mm:ss')} URL: ${req.originalUrl}`);
    next();
});

router.get('/getDynamicToken', (req, res) => {
    var csrfID = req.query.csrfID;
    var dynamicType = req.query.dynamicType;
    var timeStr = req.query.timeStr;
    if (dynamicType !== undefined){
        dynamicType = parseInt(dynamicType)
    }
    if (timeStr === undefined) {
        timestamp = Date.parse(new Date())
    } else {
        timestamp = timeStr;
    }
    dynamicToken = getDynamicToken(csrfID, dynamicType, parseInt(timestamp));
    res.json(jsonResult({ dynamicToken: dynamicToken }, true))
})

router.get('/getSessionId', (req, res)=>{
    sessionId = getSessionId(8, 16)
    res.json(jsonResult({ sessionId: sessionId }, true))
})


router.get('/getJqueryPrefix', (req, res)=>{
    jqueryPrefix = "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, "")
    res.json(jsonResult({jqueryPrefix: jqueryPrefix}, true))
})

module.exports = router;