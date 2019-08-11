// 网络模块导入
const http = require("http")
const url = require('url');
const querystring = require('querystring');

// 其他模块导入
const fs = require('fs')
const formidable = require('formidable')

// 工具模块导入
const colorex = require('./tool/color.js').colorex;
const record = require('./tool/history.js').record;
const listRecord = require('./tool/history.js').listRecord;
const listRecordAppend = require('./tool/history.js').listRecordAppend;
const diff = require('./tool/diff.js').diff;

// 日志模块导入
var logger = require('log4js').getLogger('main');
const debug = process.argv.splice(2).indexOf('debug') != -1 ? true : false //侦测 test
logger.level = debug ? 'debug' : 'info';
logger.debug('Debug Mode started')

/**
 * 实现一个简单的Http服务器，通过调用query调用方法，如：
 * /colorex?from=rgb&color=132,0,61
 */
function main() {
    logger.info('Main func started')
    port = 3000
    recordIndex = 0
    http.createServer((req, res) => {
        logger.info('new request comming method: [' + req.method + '] req.url: [' + req.url + ']')
        URL = url.parse(req.url)
        func = URL.pathname.replace('/', '')     // 获取要执行的函数
        try {
            if (!canExec(func)) throw new Error("function: " + func + " couldn't be executed");
        } catch (e) {
            res.end(e.toString())
            return;
        }
        // 设置头部信息 解决跨域调用的问题：
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
        res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.setHeader("X-Powered-By", ' 3.2.1')
        res.setHeader("Content-Type", "application/json;charset=utf-8");
        // 分流处理
        if (/GET/i.test(req.method)) {
            urlargs = querystring.parse(URL.query)  // 获取函数参数
            logger.info('URL function: [', func, '] URL arguments: ', urlargs)
            try {
                resu = eval(func + '(urlargs,' + debug + ')')//使用veal获取执行函数
                resu = JSON.stringify(resu)           //编码结果
                if (needRecord(func)) {
                    record(recordIndex++, {
                        'time': Date.now(),
                        'exec': func + '(' + JSON.stringify(urlargs) + ',' + debug + ')',
                        'result': resu
                    })// 记录调用
                }
                logger.info('Http Service Response: ', resu)
                res.end(resu)
            } catch (e) {
                logger.error(e.toString())
                res.end("Error ", e.toString())
            }
        } else if (/POST|PUT/i.test(req.method)) {

            try {
                (async function () {
                    logger.debug("OUTER async eval start")
                    // 解析表单/存储文件 ref: https://zhuanlan.zhihu.com/p/36911419
                    var filesList = await new Promise(function (resolve, reject) {
                        logger.debug("await new Promise filesList")
                        const form = new formidable.IncomingForm()
                        form.encoding = 'utf-8'
                        form.uploadDir = "tmp"      // 设置放置文件上传的目录
                        form.parse(req, (e, fields, files) => {
                            var filesList = new Object();
                            for (let key in files) {
                                let file = files[key]
                                if (file.size == 0 && file.name == '') continue // 过滤空文件
                                filesList[key] = file.path;
                            }
                            logger.info("filesList: ", filesList)// 到此文件获取完毕
                            resolve(filesList);  
                        })
                    })
                    logger.debug(func + '(' + JSON.stringify(filesList) + ',' + debug + ')')
                    var resu = "";
                    (async function () {
                        logger.debug("INNER async eval start")
                        resu = await eval(func + '(' + JSON.stringify(filesList) + ',' + debug + ')')
                        //使用veal获取执行函数 等待同步
                        if (needRecord(func)) {
                            record(recordIndex++, {
                                'time': Date.now(),
                                'exec': func + '(' + JSON.stringify(filesList) + ',' + debug + ')',
                                'result': resu
                            })// 记录调用
                        }
                        resu=JSON.stringify(resu)
                        logger.info('Http Service Response: ', resu)
                        res.end(resu)
                        logger.debug("INNER async eval end")
                    })()
                    logger.debug("OUTER async eval end")
                })();
            } catch (e) {
                logger.error(e.toString());
                res.end("Bad Return");
            } 
        }
    }).listen(port)
    logger.info('Http Service start, listen in port ', port)
}
main()
function canExec(funcName){
    //来检测函数是否可以被调用
    switch (funcName) {
        case 'record':
            return false
    }
    return true
}
function needRecord(funcName) {
//来检测函数是否需要记录
    switch (funcName) {
    case 'listRecord':
    case 'listRecordAppend':
        return false
    }
    return true
}

logger.info('Index.js tail, GoodBye')