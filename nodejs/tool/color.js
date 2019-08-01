// - [ ] 待整理成博客
const log = require('log4js').getLogger('color.js');
log.level ='info';

exports.colorex=function colorex(args,debug=false){
    /**
     *  一个转换不同色彩类型的计算器（简单实现，无过多精度优化）
     *     supported: RGB HSL HEX
     *          todo: CMYK HSV
     * 
     *  使用：
     *     导入：const colorex = require('./tool/color.js').colorex;
     *     调用：colorex({ from:'rgb',color:'132,0,61' },debug=true)
     *     调用：colorex({ from:'HEX',color:'C0FFEE' },debug=true)
     * 
     *     返回: { hex: '84003d', hsl: [ 332, 100, 26 ] }
     * 
     * @param args {
     *      @param from  colorType
     *      @param color string join with ',' or hex by 6 time
     * }  
     */
    if(debug)log.level ='debug';
    log.info("func colorex started, args: ",args)
    var result= new Object();
    v=0
    switch(args.from){
        case 'RGB':
        case 'rgb':{
            log.debug('touch RGB')
            color=args.color.split(',')
            color.map(()=>{color[v]=RGBcheck(parseInt(color[v++]))})//convert string[] to int[]
            result['hex']=RGBtoHEX(color)
            result['hsl']=RGBtoHSL(color)
            break;
        }
        case 'HEX':
        case 'hex':{
            log.debug('touch HEX')
            result['rgb']=HEXtoRGB(args.color)
            result['hsl']=RGBtoHSL(HEXtoRGB(args.color))
            break;
        }
        case 'HSL':
        case 'hsl':{
            log.debug('touch HSL')
            color=args.color.split(',')
            color.map(()=>{color[v]=parseInt(color[v++])})//convert string[] to int[]
            //hsl2rgb
            result['rgb']=HSLtoRGB(color)
            result['hex']=RGBtoHEX(HSLtoRGB(color))
            break;
        }
    }
    log.info("finally return: ",result)
    return result
}
function RGBcheck(value){
    if(!value||value<0)return 0
    if(value>255)return 255
    return value;
}
function RGBtoHEX(RGB){
    /**
     * ref https://www.cnblogs.com/daiguagua/p/3311756.html
     * @param {*} RGB int[3]
     * @return string 
     */
    rgb2hex=''
    for(i in RGB){
        if(i>2)break;
        pi=RGB[i].toString(16)
        rgb2hex+=pi.length<2?'0'+pi:pi
    }
    for(i=rgb2hex.length;i<6;i++)rgb2hex=rgb2hex+'0'
    return rgb2hex
}
function RGBtoHSL(RGB){
    /**
     * ref https://www.cnblogs.com/daiguagua/p/3311756.html
     * @param {*} RGB int[3]
     * @return int[3]
     */
    rgb2hsl=''
    min=RGB.reduce((a,b)=> a>b?b:a)
    max=RGB.reduce((a,b)=> a<b?b:a)
    var L=(min+max)*10/51
    var S=min==max?0:L>=50?(max-min)*100/(2*255-max-min):(max-min)*100/(max+min)
    var i=max==RGB[0]?0:max==RGB[1]?1:2
    var H=(360+i*2*255+(RGB[(i+1)%3]-RGB[(i+2)%3])*60/(max-min))%360
    return [Math.round(H),Math.round(S),Math.round(L)]
}
function HEXtoRGB(HEX){
    /**
     * @param {*} HEX string
     * @return int[3]
     */
    return [parseInt(HEX.substr(0,2),16),parseInt(HEX.substr(2,2),16),parseInt(HEX.substr(4,2),16)]
}
function HSLtoRGB(HSL){
    /**
     * ref https://www.rapidtables.com/convert/color/hsl-to-rgb.html
     * @param {*} HSL int[3]
     * @return int[3]
     */
    var C=(1-Math.abs(HSL[2]/50-1))*HSL[1]/100
    var X=C*(1-Math.abs((HSL[0]/60)%2-1))
    var m=(HSL[2]-C*50)/100
    switch(Math.floor(HSL[0]/60)){
        case 0:
            hsl2rgb=[C+m,X+m,m];break;
        case 1:
            hsl2rgb=[X+m,C+m,m];break;
        case 2:
            hsl2rgb=[m,C+m,X+m];break;
        case 3:
            hsl2rgb=[m,X+m,C+m];break;
        case 4:
            hsl2rgb=[X+m,m,C+m];break;
        case 5:
            hsl2rgb=[C+m,m,X+m];break;
    }
    hsl2rgb=hsl2rgb.map((i)=>Math.round(i*255))
    return hsl2rgb
}