const log = require('log4js').getLogger('FUNC_NAME.js');
log.level ='info';

exports.FUNC_NAME=(args,debug=false)=>{
    if(debug)log.level ='debug';
    // args.ARG1...
    return RESULT
}