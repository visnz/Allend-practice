// 网络模块导入
const http = require("http")
const url = require('url');
const querystring = require('querystring');

// 工具模块导入
const colorex = require('./tool/color.js').colorex;

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
    http.createServer((req,res)=>{
        URL = url.parse(req.url)
        urlargs = querystring.parse(URL.query)
        func = URL.pathname.replace('/','')
        logger.debug('URL arguments: ',urlargs)
        try{
            resu=eval(func+'(urlargs,'+debug+')')
            //使用veal获取执行函数
            resu=JSON.stringify(resu)
            logger.info('Http Service Response: ',resu)
            res.end(resu)
        }catch(e){
            logger.warn(e.toString())
            res.end("null")
        }
    }).listen(port)
    logger.info('Http Service start, listen in port ',port)
}

main()

logger.info('Index.js tail, GoodBye')