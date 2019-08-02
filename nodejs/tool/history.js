const log = require('log4js').getLogger('history.js');
log.level ='info';

book=new Object();lastIndex=-1;pointer=-1;
// 提供记录的方法
exports.record=(index,msg,debug=false)=>{
    if(debug)log.level ='debug';
    log.debug('index=',index)
    log.debug('msg=',msg)
    book[index]=msg
    lastIndex=index
    log.debug('touch=record  lastIndex=',lastIndex,' pointer=',pointer)
    return true
}
// 列出所有的记录
exports.listRecord=(debug=false)=>{
    if(debug)log.level ='debug';
    // pointer=lastIndex
    log.debug('touch: listRecord  lastIndex=',lastIndex,' pointer=',pointer)
    return book
}
// 列出新增的记录
exports.listRecordAppend=(debug=false)=>{
    if(debug)log.level ='debug';
    log.debug('touch: listRecordAppend  lastIndex=',lastIndex,' pointer=',pointer)
    
    tmp=new Object();
    for(var i=pointer+1;i<=lastIndex;i++){
        log.debug('for:',book[i])
        tmp[i]=book[i]
    }
    pointer=lastIndex//移动到最后指针

    log.debug('touch: listRecordAppend  lastIndex=',lastIndex,' pointer=',pointer)
    return tmp

}