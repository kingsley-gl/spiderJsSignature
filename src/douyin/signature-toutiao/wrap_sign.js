// import {signature, e, b} from './acrawler.js'
// import jsdom from "jsdom";
// import Cookies from 'js-cookie'

const jsdom = require('jsdom')
const Cookies = require('js-cookie')
const {signature, e, b} = require('./acrawler.js')

const {JSDOM} = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
let window = global

// let cookie = '__ac_signature=_02B4Z6wo00f01pDvNhwAAIDD8-X2dMo6u.aQzzKAAMX010; ttcid=bd62b31030e648519f441451e082c6c016; tt_webid=7017694147431663140; csrftoken=4721d433c04beba1d2359da8b65ed712; tt_webid=7017694147431663140; s_v_web_id=verify_kzqnva3x_OSxO3pdx_56XT_4vp7_AxKz_gNOnct8Km8J8; local_city_cache=%E5%B9%BF%E5%B7%9E; _tea_utm_cache_24=undefined; _tea_utm_cache_2018=undefined; MONITOR_WEB_ID=c53fb7a7-84c1-48f6-a9b4-3291d09f3157; ttwid=1%7CC7o5MuUikPi3ZXXToKd-dzaTovLkObhy-990HzXaEvQ%7C1645501319%7Cfcf07707dc28d83a71082d24c6170d886bd2763991caffa854a128a6a30c4daa; tt_scid=MaWk71b.dZSJ0E.Wy2qhVcUseTS8uHqlps821NWdhUZSKhosJHeQ2DKWkuDx9slKb526'
// let cookie = '__ac_signature=_02B4Z6wo00f01ZynJmwAAIDAF; ttcid=64eeb4e9242148ab8659e706e103a20e11; tt_webid=7073322543784363533; csrftoken=75e8c8edb9873f2126e49d9a0e1ceb15	; tt_webid=7073322543784363533; s_v_web_id=verify_l0khjx42_KlrM0dQv_eL3f_4kiB_AIA2_nZE8htrKhalu; local_city_cache=%E5%B9%BF%E5%B7%9E; _tea_utm_cache_24=undefined; _tea_utm_cache_2018=undefined; MONITOR_WEB_ID=c53fb7a7-84c1-48f6-a9b4-3291d09f3157; ttwid=1%7C632SSqtA6QCM-Q6UDByMa96MGC0eqjO_aXBPRvll5EM%7C1646978744%7Cd6c31e69fe630e2ecede2991f9f9b99bd5eb4e356b781a0b766ff59e88541bc2; tt_scid=S7ewtPy85S1Sy9t2B2PaFiAtU0TgHca7J1TBAlhIzEqHTjJOFR8Keowkh2GBDAHwa6cd'


function getWrapSign(cookie) {
window.document = dom.window.document
cookie.split(';').map(value => {
    Cookies.set(value.trim().split('=')[0], value.trim().split('=')[1])
})



window.screen = {
    availHeight: 852,
    availLeft: -1440,
    availTop: 0,
    availWidth: 1440,
    colorDepth: 24,
    height: 900,
    orientation: {angle: 0, type: 'landscape-primary', onchange: null},
    pixelDepth: 24,
    width: 1440
}



window.navigator = {userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"}

window.location = {
    "ancestorOrigins": {},
    "href": "https://www.toutiao.com/",
    "origin": "https://www.toutiao.com",
    "protocol": "https:",
    "host": "www.toutiao.com",
    "hostname": "www.toutiao.com",
    "port": "",
    "pathname": "/",
    "search": "",
    "hash": ""
}


// jsvm初始化
window._$jsvmprt = signature

window._$jsvmprt(b, [ //0
    , // 1
    , undefined //2
    , undefined //3
    , "undefined" != typeof define ? define : void 0 //4
    , "undefined" != typeof Object ? Object : void 0 // 5
    , void 0
    , "undefined" != typeof TypeError ? TypeError : void 0
    , "undefined" != typeof document ? document : void 0
    , "undefined" != typeof InstallTrigger ? InstallTrigger : void 0
    , "undefined" != typeof safari ? safari : void 0
    , "undefined" != typeof Date ? Date : void 0
    , "undefined" != typeof Math ? Math : void 0
    , "undefined" != typeof navigator ? navigator : void 0
    , "undefined" != typeof location ? location : void 0
    , "undefined" != typeof history ? history : void 0
    , "undefined" != typeof Image ? Image : void 0
    , "undefined" != typeof console ? console : void 0
    , "undefined" != typeof PluginArray ? PluginArray : void 0
    , "undefined" != typeof indexedDB ? indexedDB : void 0
    , "undefined" != typeof DOMException ? DOMException : void 0
    , "undefined" != typeof parseInt ? parseInt : void 0
    , "undefined" != typeof String ? String : void 0
    , "undefined" != typeof Array ? Array : void 0
    , "undefined" != typeof Error ? Error : void 0
    , "undefined" != typeof JSON ? JSON : void 0
    , "undefined" != typeof Promise ? Promise : void 0
    , "undefined" != typeof WebSocket ? WebSocket : void 0
    , "undefined" != typeof eval ? eval : void 0
    , "undefined" != typeof setTimeout ? setTimeout : void 0
    , "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0
    , "undefined" != typeof encodeURI ? encodeURI : void 0
    , "undefined" != typeof Request ? Request : void 0
    , "undefined" != typeof Headers ? Headers : void 0
    , "undefined" != typeof decodeURIComponent ? decodeURIComponent : void 0
    , "undefined" != typeof RegExp ? RegExp : void 0])

window.byted_acrawler && window.byted_acrawler.init({
    aid: 24,
    dfp: !0
})


var t = {
    "url": "/api/pc/info",
    "method": "get",
    "headers": {
        "common": {
            "Accept": "application/json, text/plain, */*"
        },
        "delete": {},
        "get": {},
        "head": {},
        "post": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "put": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "patch": {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    },
    "transformRequest": [
        null
    ],
    "transformResponse": [
        null
    ],
    "timeout": 10000,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": -1
}


window.location = {
    "ancestorOrigins": {},
    "href": "https://www.toutiao.com/",
    "origin": "https://www.toutiao.com",
    "protocol": "https:",
    "host": "www.toutiao.com",
    "hostname": "www.toutiao.com",
    "port": "",
    "pathname": "/",
    "search": "",
    "hash": ""
}
var x = [
    "/api/pc/list/feed",
    "/search/suggest/hot_words",
    "/hot-event/hot-board/",
    "/stream/widget/local_weather/",
    "search/suggest/hot_words/",
    "/api/pc/list/user/feed"
]


// function I(e) {
//     return !x.some((function (t) {
//             return e.indexOf(t) > -1
//         }
//     ))
// }
let i = {
    url: "https://www.toutiao.com/toutiao/api/pc/info"
}
// function S(e, t) {
//     var n, r;
//     var a = "".concat(location.protocol, "//").concat(location.host);
//     if (I(e))
//         a += "/toutiao";
//     if (false)
//         ;
//     var i = {
//         url: a + e
//     };
//     if (t.data)
//         i.body = t.data;
//     var o = (null === (n = window.byted_acrawler) || void 0 === n ? void 0 : null === (r = n.sign) || void 0 === r ? void 0 : r.call(n, i)) || "";
//     return o
// }

// window.document.cookie = '__ac_signature=_02B4Z6wo00f01pDvNhwAAIDD8-X2dMo6u.aQzzKAAMX010; ttcid=bd62b31030e648519f441451e082c6c016; tt_webid=7017694147431663140; csrftoken=4721d433c04beba1d2359da8b65ed712; tt_webid=7017694147431663140; s_v_web_id=verify_kzqnva3x_OSxO3pdx_56XT_4vp7_AxKz_gNOnct8Km8J8; local_city_cache=%E5%B9%BF%E5%B7%9E; _tea_utm_cache_24=undefined; MONITOR_WEB_ID=c53fb7a7-84c1-48f6-a9b4-3291d09f3157; _tea_utm_cache_2018=undefined; ttwid=1%7CC7o5MuUikPi3ZXXToKd-dzaTovLkObhy-990HzXaEvQ%7C1645438928%7C084f5c4c23cc9a12152890cf3344e6aca13549b9cb92e26cb16aacb83894de2c; tt_scid=4ChN846v6641ffIBY3DzEoCY53Wtmg7MC4I7WampWAHBVOn-llsLcvQY1Ucgdq6259c8'


let _sig = window.byted_acrawler.sign(i)
return _sig;
}

// var n = S("/api/pc/info", t)
// console.log(n)
// console.log(window)
module.exports = getWrapSign;