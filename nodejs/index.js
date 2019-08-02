// 网络模块导入
const http = require("http")
const url = require('url');
const querystring = require('querystring');

// 工具模块导入
const colorex = require('./tool/color.js').colorex;
const record = require('./tool/history.js').record;
const listRecord = require('./tool/history.js').listRecord;
const listRecordAppend = require('./tool/history.js').listRecordAppend;

// 日志模块导入
var logger = require('log4js').getLogger('main');
const debug=process.argv.splice(2).indexOf('debug')!=-1?true:false //侦测 test
logger.level =debug?'debug':'info';
logger.debug('Debug Mode started')

/**
 * 实现一个简单的Http服务器，通过调用query调用方法，如：
 * /colorex?from=rgb&color=132,0,61
 */
function main(){
    logger.info('Main func started')
    port=3000
    recordIndex=0
    http.createServer((req,res)=>{
        // 解决跨域调用的问题：
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
        res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.setHeader("X-Powered-By",' 3.2.1')
        res.setHeader("Content-Type", "application/json;charset=utf-8");
    
        URL = url.parse(req.url)
        urlargs = querystring.parse(URL.query)  // 获取函数参数
        func = URL.pathname.replace('/','')     // 获取要执行的函数
        logger.info('URL function: [',func,'] URL arguments: ',urlargs) 
        try{
            if(!canExec(func))throw new Error("function: "+func+" couldn't be executed");
            resu=eval(func+'(urlargs,'+debug+')')//使用veal获取执行函数
            resu=JSON.stringify(resu)           //编码结果
            if(needRecord(func)){
                record(recordIndex++,{
                    'time':Date.now(),
                    'exec':func+'('+JSON.stringify(urlargs) +','+debug+')',
                    'result':resu}
                    )// 记录调用
            }
            logger.info('Http Service Response: ',resu)
            res.end(resu)
        }catch(e){
            logger.error(e.toString())
            res.end("null")
        }
    }).listen(port)
    logger.info('Http Service start, listen in port ',port)
}

main()
function canExec(funcName){
    /**
     * 来检测函数是否可以被调用
     */
    switch(funcName){
        case 'record':
            return false
    }
    return true
}
function needRecord(funcName){
    /**
     * 来检测函数是否需要记录
     */
    switch(funcName){
        case 'listRecord':
        case 'listRecordAppend':
            return false
    }
    return true
}

logger.info('Index.js tail, GoodBye')