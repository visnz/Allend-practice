const log = require('log4js').getLogger('color.js');
log.level ='info';

exports.FUNC_NAME=(args,debug=false)=>{
    if(debug)log.level ='debug';
    // args.ARG1...
    return RESULT
}