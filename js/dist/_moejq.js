var defaultDelay=6E4,fastDelay=15E3,slowDelay=3E5,verySlowDelay=36E5,veryFastDelay=1E3,AllClassName="moescript",SourcePositionMap={"\u6728\u6750":1,"\u6728\u6881":3,"\u77f3\u677f":4,"\u91d1\u5c5e\u677f":5,"\u94a2":6,"\u9f7f\u8f6e":8,"\u811a\u624b\u67b6":11,"\u8239":12,"\u7f8a\u76ae\u7eb8":15,"\u624b\u7a3f":16,"\u6982\u8981":17,"\u84dd\u56fe":18,"\u5de8\u77f3":20},Jobs={"\u4f10\u6728\u5de5":0,"\u519c\u6c11":1,"\u5b66\u8005":2,"\u730e\u4eba":3,"\u77ff\u5de5":4,"\u7267\u5e08":5,"\u5730\u8d28\u5b66\u5bb6":6,
"\u5de5\u7a0b\u5e08":7};function GenerateResourceAll(b,a){a=void 0===a?4:a;i="string"===typeof b?SourcePositionMap[b]:b;$("div.craft:nth-child("+i+") > div:nth-child("+((1>a?1:4<a?4:a)+2)+") > div:nth-child(1)").click()}function jobIncrease(b,a,c){a=void 0===a?1:a;i="string"===typeof b?Jobs[b]:b;index=8*i+(void 0===c||c?4:0)+(((1>a?1:4<a?4:a)+2)%4+1)-1;$("div.panelContainer .modern a")[index].click()}\u81ea\u52a8\u6253\u730e=function(){$("#fastHuntContainerCount").click()};
\u62ac\u5934\u770b\u5929\u7a7a=function(){$("#observeBtn").click()};\u8d5e\u7f8e\u592a\u9633=function(){$("#fastPraiseContainer > a:nth-child(1)")[0].click()};_\u8fdb\u5165\u7bdd\u706b\u9762\u677f=function(){$("a.tab:nth-child(1)")[0].click()};_\u8fdb\u5165\u7ba1\u7406\u9762\u677f=function(){$("a.tab:nth-child(3)")[0].click()};_\u7ba1\u7406Jobs=function(){$("div.panelContainer:nth-child(3) > div:nth-child(3) > table:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > div:nth-child(3) > div:nth-child(1) > span:nth-child(1)").click()};
_\u63d0\u62d4\u5c0f\u732b=function(){$("div.panelContainer:nth-child(3) > div:nth-child(3) > table:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > div:nth-child(4) > div:nth-child(1)").click()};var preIndex=0;_\u8bb0\u5f55\u5f53\u524d\u9762\u677fIndex=function(){preIndex=$(".activeTab").parent().children(".activeTab").index()};_\u8fd4\u56de\u8bb0\u5f55\u9762\u677fIndex=function(){$("a.tab:nth-child("+(preIndex+1)+")")[0].click()};
_\u68c0\u67e5\u7cae\u98df\u589e\u91cf\u662f\u5426\u4e3a\u6b63=function(){return 2==$("#leftColumnViewport > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4)").text().split("+").length};_\u4fdd\u5b58\u6e38\u620f=function(){$("div.links-block:nth-child(6) > a:nth-child(1)").click()};\u7ba1\u7406Jobs=function(){_\u8bb0\u5f55\u5f53\u524d\u9762\u677fIndex();_\u8fdb\u5165\u7ba1\u7406\u9762\u677f();_\u7ba1\u7406Jobs();_\u8fd4\u56de\u8bb0\u5f55\u9762\u677fIndex()};
\u5c0f\u732b\u5347\u804c\u5668=function(){_\u8bb0\u5f55\u5f53\u524d\u9762\u677fIndex();_\u8fdb\u5165\u7ba1\u7406\u9762\u677f();_\u63d0\u62d4\u5c0f\u732b();_\u8fd4\u56de\u8bb0\u5f55\u9762\u677fIndex()};var pao=0;
\u9ad8\u901f\u5361\u673a\u5228\u6728\u6cd5=function(){_\u8bb0\u5f55\u5f53\u524d\u9762\u677fIndex();_\u8fdb\u5165\u7bdd\u706b\u9762\u677f();6<=pao&&(_\u4fdd\u5b58\u6e38\u620f(),logThis("\u6e38\u620f\u5df2\u4fdd\u5b58"),pao=0);pao++;for(i=0;36E3>i;i++)$(".bldGroupContainer .modern")[0].click();_\u8fd4\u56de\u8bb0\u5f55\u9762\u677fIndex()};
\u4e2d\u901f\u5361\u673a\u5228\u6728\u6cd5=function(){_\u8bb0\u5f55\u5f53\u524d\u9762\u677fIndex();_\u8fdb\u5165\u7bdd\u706b\u9762\u677f();30<=pao&&(_\u4fdd\u5b58\u6e38\u620f(),logThis("\u6e38\u620f\u5df2\u4fdd\u5b58"),pao=0);pao++;for(i=0;12E3>i;i++)$(".bldGroupContainer .modern")[0].click();_\u8fd4\u56de\u8bb0\u5f55\u9762\u677fIndex()};
\u4f4e\u901f\u5361\u673a\u5228\u6728\u6cd5=function(){_\u8bb0\u5f55\u5f53\u524d\u9762\u677fIndex();_\u8fdb\u5165\u7bdd\u706b\u9762\u677f();60<=pao&&(_\u4fdd\u5b58\u6e38\u620f(),logThis("\u6e38\u620f\u5df2\u4fdd\u5b58"),pao=0);pao++;for(i=0;6E3>i;i++)$(".bldGroupContainer .modern")[0].click();_\u8fd4\u56de\u8bb0\u5f55\u9762\u677fIndex()};\u5408\u6210\u6728\u6750=function(){GenerateResourceAll("\u6728\u6750")};\u5408\u6210\u94a2=function(){GenerateResourceAll("\u94a2")};\u5408\u6210\u6728\u6881=function(){GenerateResourceAll("\u6728\u6881")};
\u5408\u6210\u77f3\u677f=function(){GenerateResourceAll("\u77f3\u677f")};\u5408\u6210\u91d1\u5c5e\u677f=function(){GenerateResourceAll("\u91d1\u5c5e\u677f")};\u5408\u6210\u9f7f\u8f6e=function(){GenerateResourceAll("\u9f7f\u8f6e")};\u5408\u6210\u811a\u624b\u67b6=function(){GenerateResourceAll("\u811a\u624b\u67b6")};\u5408\u6210\u8239=function(){GenerateResourceAll("\u8239")};\u5408\u6210\u7f8a\u76ae\u7eb8=function(){GenerateResourceAll("\u7f8a\u76ae\u7eb8")};\u5408\u6210\u624b\u7a3f=function(){GenerateResourceAll("\u624b\u7a3f")};
\u5408\u6210\u6982\u8981=function(){GenerateResourceAll("\u6982\u8981")};\u5408\u6210\u84dd\u56fe=function(){GenerateResourceAll("\u84dd\u56fe")};\u5408\u6210\u5de8\u77f3=function(){GenerateResourceAll("\u5de8\u77f3")};
AllOperators=[{panel:"\u57fa\u672c",list:[{DisplayName:"\u62ac\u5934\u770b\u5929\u7a7a",timer:fastDelay},{DisplayName:"\u81ea\u52a8\u6253\u730e"},{DisplayName:"\u8d5e\u7f8e\u592a\u9633"},{DisplayName:"\u7ba1\u7406Jobs",timer:verySlowDelay},{DisplayName:"\u5c0f\u732b\u5347\u804c\u5668",timer:verySlowDelay}]},{panel:"\u5408\u6210",list:[{DisplayName:"\u5408\u6210\u6728\u6750"},{DisplayName:"\u5408\u6210\u94a2"},{DisplayName:"\u5408\u6210\u6728\u6881"},{DisplayName:"\u5408\u6210\u77f3\u677f"},{DisplayName:"\u5408\u6210\u91d1\u5c5e\u677f"},
{DisplayName:"\u5408\u6210\u9f7f\u8f6e"},{DisplayName:"\u5408\u6210\u811a\u624b\u67b6"},{DisplayName:"\u5408\u6210\u8239"},{DisplayName:"\u5408\u6210\u7f8a\u76ae\u7eb8"},{DisplayName:"\u5408\u6210\u624b\u7a3f"},{DisplayName:"\u5408\u6210\u6982\u8981"},{DisplayName:"\u5408\u6210\u84dd\u56fe"},{DisplayName:"\u5408\u6210\u5de8\u77f3"}]},{panel:"\u98de\u5929",list:[{DisplayName:"\u4f4e\u901f\u5361\u673a\u5228\u6728\u6cd5",timer:veryFastDelay},{DisplayName:"\u4e2d\u901f\u5361\u673a\u5228\u6728\u6cd5",
timer:veryFastDelay},{DisplayName:"\u9ad8\u901f\u5361\u673a\u5228\u6728\u6cd5",timer:veryFastDelay}]}];
$("#rightColumn").prepend('<div><div style="display:flex;flex-wrap:wrap">'+AllOperators.map(function(b){return'<input id="'+b.panel+'\u6309\u94ae" type="button" style="display:inline" value="'+b.panel+'">'}).reduce(function(b,a){return b+a})+'<input id="\u5168\u81ea\u52a8\u5173" type="button"  style="display:inline" value="\u5168\u90e8\u5173\u95ed"><span><input id="\u7acb\u9a6c\u6267\u884c" type="checkbox"  style="display:inline" checked><span>\u7acb\u9a6c\u6267\u884c</span></span></div>'+AllOperators.map(function(b){return'<div id="'+
b.panel+'" style="display:none";><div style="display:flex;flex-wrap:wrap">'+b.list.map(function(a){return'<span style="white-space:nowrap;"><input class="'+AllClassName+'" id="'+a.DisplayName+'" type="checkbox" style="display:inline"><span>'+a.DisplayName+"</span></span>"}).reduce(function(a,b){return a+b})+"</div></div>"}).reduce(function(b,a){return b+a})+'<div><div id="'+AllClassName+'log"style="min-height:300px;max-height:300px;overflow:auto;"></div></div></div>');
AllOperators.map(function(b){b.list.map(function(a){null==a.timer&&(a.timer=defaultDelay);null==a.scriptFunc&&(a.scriptFunc=function(){return eval(a.DisplayName+"()")});$("#"+a.DisplayName).click(function(b){b.currentTarget.checked?(logThis("[\u811a\u672c\u5efa\u7acb] "+a.DisplayName+" \u95f4\u9694:"+(a.timer/1E3).toFixed(2)+"\u79d2"),a.AutoID=setInterval(function(){a.scriptFunc();logThis("[__\u81ea\u52a8__] "+a.DisplayName)},a.timer),$("#\u7acb\u9a6c\u6267\u884c")[0].checked&&(a.scriptFunc(),logThis("[____\u7acb\u9a6c] "+
a.DisplayName+"(\u0e07 \u2022\u0300_\u2022\u0301)\u0e07"))):(clearInterval(a.AutoID),logThis("[\u811a\u672c\u6e05\u9664] "+a.DisplayName))})})});AllOperators.map(function(b){$("#"+b.panel+"\u6309\u94ae").click(function(a){$("#"+b.panel).attr("style","display:"+("display:block"==$("#"+b.panel).attr("style")?"none":"block"))})});
$("#\u5168\u81ea\u52a8\u5173").click(function(b){AllOperators.map(function(a){return a.list.map(function(a){return clearInterval(a.AutoID)})});$("."+AllClassName).each(function(a,b){$("#"+b.id)[0].checked=!1});logThis("\u6e05\u9664\u4e86\u6240\u6709\u811a\u672c")});function stop(b){AllOperators.map(function(a){return a.list.map(function(a){a.DisplayName==b&&(clearInterval(a.AutoID),$("#"+a.DisplayName)[0].checked=!1)})})}
logThis=function(b){$("#"+AllClassName+"log").prepend('<span class="msg"> [ '+Date().split(" ")[4]+" ] "+b+"</span>")};