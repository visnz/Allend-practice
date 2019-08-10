const log = require('log4js').getLogger('diff.js');
const fs = require('fs');
log.level = 'info';

exports.diff = async (args, debug = false) => {
    /**
     * 传入两个文件并调用diff进行对比
     * 返回 diff -y --left-column 结果
     */
    if (debug) log.level = 'debug';
    var q = new Promise(function (resolve, reject) {
        cmd = 'diff ' + args.file1 + " " + args.file2 + " -y --left-column"
        log.info('child_process: ', cmd)
        require("child_process").exec(cmd, (e, stdout, stderr) => {
            log.debug('stdout: ', stdout)
            resolve(stdout);
        })
    });
    let result = (await q).split('\n');
    array = new Array();
    for (let i = 0; i < result.length - 1; i++) {
        left = result[i].split("      ")
        array[i] = [left[0], left[1].substring(0, 1), left[1].substring(1)]
        log.debug("result[" + i + "]", array[i])
    }
    return array;
} 