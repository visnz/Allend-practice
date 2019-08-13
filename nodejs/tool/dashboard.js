const log = require('log4js').getLogger('dashboard.js');
log.level ='info';

dashboardLog=new Array()
exports.dashboardRecord=async (duration=4)=>{
    //duration 监听间隔(s)
    cmd="nmon -f -s "+duration+" -c 1 -F tmp.nmon && sleep "+(duration+1)+" && cat tmp.nmon|grep -vE 'AAA|BBB'"
    csv=new Object()
    result=new Object()
    // result["time"]=new Date().toTimeString().split(" ")[0]
    result["time"]=Date.now()
    await new Promise(function (resolve, reject) {
        require("child_process").exec(cmd, (e, stdout, stderr) => {
            // log.debug('i stdout: ', stdout)
            stdout=stdout.split("\n").map((i)=>{csv[i.split(",")[0]]=i.split(",")})
            result["totalMemory"]=parseInt(csv["MEM"][2])
            result["activeMemory"]=parseInt(csv["MEM"][12])
            result["usersysCPU"]=parseFloat(csv["CPU_ALL"][2])+parseFloat(csv["CPU_ALL"][3])
            result["RXDataRate"]=0
            result["TXDataRate"]=0
            step=(csv["NET"].length-2)/2
            for (let index=2;index<csv["NET"].length-step;index++){
                if(csv["NET"][index]==csv["NET"][index+step])continue;
                result["RXDataRate"]+=parseFloat(csv["NET"][index]);
                result["TXDataRate"]+=parseFloat(csv["NET"][index+step]);
            }
            result["IOread"]=csv["DISKREAD"].reduce((s,c)=>s+parseInt(c)==NaN?0:parseInt(c),0)/2;
            result["IOwrite"]=csv["DISKWRITE"].reduce((s,c)=>s+parseInt(c)==NaN?0:parseInt(c),0)/2;
            resolve(stdout);
        })
    })
    log.info("os msg fetch: ",JSON.stringify(result))
    dashboardLog.push(result)
}

exports.dashboard=async (args,debug=false)=>{
    if(debug)log.level ='debug';
    // args: 
    //  lastTimeStamp =0获取全部 last获取单个
    //  step=10,50,100
    // 前端逻辑:
    //  1. 获取全部的最新 /dashboard?lastTimeStamp=0&step=10
    //  2. 切换尺寸,获取全部最新 /dashboard?lastTimeStamp=0&step=50
    //  3. 尝试获取某个step的最新数据 /dashboard?lastTimeStamp=xxxx&step=10
    //  
    // if(lastTimeStamp==dashboardLog[dashboardLog.length-1])return null;
    lastTimeStamp=args.lastTimeStamp=="0"?0:parseInt(args.lastTimeStamp)
    step=parseInt(args.step)
    log.debug(lastTimeStamp,step)
    if(lastTimeStamp==0){
        log.debug("pickHistory: ",pickHistory(50,step))
        return pickHistory(50,step)
    }else{
        log.debug("waitFor: ",waitFor(lastTimeStamp,step))
        return waitFor(lastTimeStamp,step)
    }
}
function waitFor(lastTimeStamp,step){
    for(i in dashboardLog){
        if(parseInt(dashboardLog[i]["time"])==lastTimeStamp){
            next=(1+parseInt(i)+parseInt(step))
            return dashboardLog.length>next?dashboardLog[next]:null
        }
    }
}
function pickHistory(count=1,skip=0,fromTimeStamp=-1){
    res=new Array();
    for(let i=dashboardLog.length+fromTimeStamp;i>0;i=i-skip-1){
        res.push(dashboardLog[i])
        if(--count==0)break;
    }
    return res.reverse()
}
