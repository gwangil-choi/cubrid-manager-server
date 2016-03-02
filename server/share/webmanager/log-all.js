/*
 * Copyright (C) 2008-2015 Search Solution Corporation. All rights reserved by Search Solution.
 *
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation; either version 3 of the License, or 
 *   (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
*/
Ext.define("cwm.common.CookieUtil",{extend:"Ext.Base",singleton:true,setToken:function(a){Ext.util.Cookies.set("token",a)},setTokenAndExpireMinutes:function(c,a){var b=a*60*1000;var d=new Date();d.setTime(d.getTime()+b);Ext.util.Cookies.set("token",c,d)},getToken:function(){return Ext.util.Cookies.get("token")},clearToken:function(){Ext.util.Cookies.clear("token")},setDbmtUserName:function(a){Ext.util.Cookies.set("dbmtUserName",a)},getDbmtUserName:function(){return Ext.util.Cookies.get("dbmtUserName")},clearDbmtUserName:function(){Ext.util.Cookies.clear("dbmtUserName")},setLastDbmtUserName:function(a){var b=new Date();b.setTime(b.getTime()+20*365*24*60*60*1000);Ext.util.Cookies.set("lastDbmtUserName",a,b)},getLastDbmtUserName:function(){return Ext.util.Cookies.get("lastDbmtUserName")},clearLastDbmtUserName:function(){Ext.util.Cookies.clear("lastDbmtUserName")},setDbName:function(a){Ext.util.Cookies.set("dbName",a)},getDbName:function(){return Ext.util.Cookies.get("dbName")},clearDbName:function(){Ext.util.Cookies.clear("dbName")},setDbInfo:function(d){var b=this.getDbInfo();var a=this.getDbInfoByDbName(d.dbname);var c=false;if(!b){b=[];b.push(d)}else{if(a){if(typeof d.username==="string"){this.setDbUserName(d.dbname,d.username)}if(typeof d.password==="string"){this.setDbUserPwd(d.dbname,d.password)}if(typeof d.bip==="string"){this.setDbBrokerIp(d.dbname,d.bip)}if(typeof d.bport==="number"){this.setDbBrokerPort(d.dbname,d.bport)}if(typeof d.remember!=="undefined"){this.setDbUserRemember(d.dbname,d.remember)}if(typeof d.logstatus!=="undefined"){this.setDbLoginStatus(d.dbname,d.logstatus)}if(typeof d.isdba==="boolean"){this.setDbUserIsDba(d.dbname,d.isdba)}c=true}else{b.push(d)}}if(!c){b=Ext.encode(b);Ext.util.Cookies.set("dbinfo",b)}},getDbInfo:function(){try{var a=Ext.util.Cookies.get("dbinfo");return Ext.decode(a)}catch(b){}},getDbInfoByDbName:function(d){if(!d){return}var b=this.getDbInfo();if(!b){return}var a=null;for(var c=0;c<b.length;c++){if(d==b[c].dbname){a=b[c];break}}return a},setDbinfoParamByName:function(d,f,h){if(!d){return}var b=this.getDbInfo();var g=false;if(b){var a=null;for(var c=0;c<b.length;c++){if(d==b[c]["dbname"]){a=b[c];a[f]=h;g=true;break}}}else{b=[]}if(!g){var e=new Object();e.dbname=d;e[f]=h;b.push(e)}b=Ext.encode(b);Ext.util.Cookies.set("dbinfo",b)},getDbinfoParamByName:function(b,c){if(!b){return}if(!c){return}var a=this.getDbInfoByDbName(b);if(!a){return}return a[c]},setDbLoginStatus:function(b,a){this.setDbinfoParamByName(b,"logstatus",a)},getDbLoginStatus:function(a){return this.getDbinfoParamByName(a,"logstatus")},setDbUserIsDba:function(b,a){this.setDbinfoParamByName(b,"isdba",a)},getDbUserIsDba:function(a){return this.getDbinfoParamByName(a,"isdba")},setDbUserName:function(a,b){this.setDbinfoParamByName(a,"username",b)},getDbUserName:function(a){return this.getDbinfoParamByName(a,"username")},setDbUserPwd:function(b,a){this.setDbinfoParamByName(b,"password",a)},getDbUserPwd:function(a){var b=this.getDbinfoParamByName(a,"password");if(b&&b.length==0){b=""}return b},setDbBrokerIp:function(b,a){this.setDbinfoParamByName(b,"bip",a)},getDbBrokerIp:function(a){return this.getDbinfoParamByName(a,"bip")},setDbBrokerPort:function(a,b){this.setDbinfoParamByName(a,"bport",b)},getDbBrokerPort:function(a){var b=this.getDbinfoParamByName(a,"bport");try{if(typeof b!=="number"){b=parseInt(b)}}catch(c){Ext.Trace(c)}return b},setDbUserRemember:function(a,b){this.setDbinfoParamByName(a,"remember",b)},getDbUserRemember:function(a){return this.getDbinfoParamByName(a,"remember")},clearDbInfo:function(){Ext.util.Cookies.clear("dbinfo")},clearDbInfoByDbName:function(d){if(!d){return}var b=this.getDbInfo();if(b){var a=null;for(var c=0;c<b.length;c++){if(d==b[c].dbname){a=b.splice(c,1);break}}}b=Ext.encode(b);Ext.util.Cookies.set("dbinfo",b)},setAllBrokers:function(b){var a=Ext.encode(b);Ext.util.Cookies.set("allbrokers",a)},getAllBrokers:function(){var a=Ext.util.Cookies.get("allbrokers");return Ext.decode(a)},clearAllBrokers:function(){Ext.util.Cookies.clear("allbrokers")},setValidBrokers:function(b){var a=Ext.encode(b);Ext.util.Cookies.set("validbrokers",a)},getValidBrokers:function(){var a=Ext.util.Cookies.get("validbrokers");return Ext.decode(a)},clearValidBrokers:function(){Ext.util.Cookies.clear("validbrokers")},setEnvInfo:function(b){var a=Ext.encode(b);Ext.util.Cookies.set("envinfo",a)},getEnvInfo:function(){var a=Ext.util.Cookies.get("envinfo");return Ext.decode(a)},clearEnvInfo:function(){Ext.util.Cookies.clear("envinfo")},setBrokerHistory:function(a){var b=new Date();b.setTime(b.getTime()+20*365*24*60*60*1000);Ext.util.Cookies.set("brokerHistory",Ext.encode(a),b)},getBrokerHistory:function(){var a=Ext.util.Cookies.get("brokerHistory");if(a==null||a==""){return{}}return Ext.decode(a)},clearBrokerHistory:function(){Ext.util.Cookies.clear("brokerHistory")},setLang:function(b){var a=new Date();a.setTime(a.getTime()+20*365*24*60*60*1000);Ext.util.Cookies.set("lang",b,a)},getLang:function(){return Ext.util.Cookies.get("lang")},clearLang:function(){Ext.util.Cookies.clear("lang")},clearSessionCookies:function(){this.clearDbInfo();this.clearDbmtUserName();this.clearDbName();this.clearToken();this.clearAllBrokers();this.clearValidBrokers();this.clearEnvInfo()}});Ext.cookieUtil=cwm.common.CookieUtil;Ext.getAutoAddVolLog=function(f,i,h,b){if(typeof f!=="string"){Ext.Trace("Err: Fail to getautoaddvollog cased by miss param!");return}var c=Ext.cookieUtil.getToken();var a={task:"getautoaddvollog",token:c};if(typeof h==="string"&&typeof b==="string"){try{h=Ext.Date.parse(h,"YmdHis");b=Ext.Date.parse(b,"YmdHis");if(Ext.isDate(h)&&Ext.isDate(b)){a.start_time=Ext.Date.format(h,"Y-m-d,H:i:s");a.end_time=Ext.Date.format(b,"Y-m-d,H:i:s")}else{Ext.Trace("Request break cased by invalid time param!");return}}catch(d){Ext.Trace(d);return}}var g=Ext.createWaitWin();Ext.Ajax.request({url:Ext.cmApi,method:"post",jsonData:a,success:function(e,m){g.close();var l=Ext.decode(e.responseText);if(!l){return}if(l.status==="success"){var k=new Array(),n;if(Ext.isArray(l.log)){for(var j=0;j<l.log.length;j++){n=new Object();if(f===l.log[j]["dbname"]){n=l.log[j];k.push(n)}}}l=null;if(Ext.isFunction(i)){i(k)}}else{if(Ext.checkTokenStatus(l.note)){Ext.showFailureWin(l.note)}}},failure:function(e,j){g.close();Ext.showErrorWin(I18N_Util.getMsg("msgErrInServer")+"<br>"+e.responseText)}})};Ext.getAutoBackupDbErrLog=function(g,f,b){var c=Ext.cookieUtil.getToken();var a={task:"getautobackupdberrlog",token:c};if(typeof f==="string"&&typeof b==="string"){try{f=Ext.Date.parse(f,"YmdHis");b=Ext.Date.parse(b,"YmdHis");if(Ext.isDate(f)&&Ext.isDate(b)){a.start_time=Ext.Date.format(f,"Y/m/d H:i:s");a.end_time=Ext.Date.format(b,"Y/m/d H:i:s")}else{Ext.Trace("Request break cased by invalid time param!");return}}catch(d){Ext.Trace(d);return}}Ext.Ajax.request({url:Ext.cmApi,method:"post",jsonData:a,success:function(e,i){if(g&&typeof g.success==="function"){g.success(e,i)}else{var h=Ext.decode(e.responseText);if(h&&h.status!=="success"){if(Ext.checkTokenStatus(h.note)){Ext.showFailureWin(h.note)}}}},failure:function(e,h){if(g&&typeof g.failure==="function"){g.failure(e,h)}else{Ext.showErrorWin(I18N_Util.getMsg("msgErrInServer")+"<br>"+e.responseText)}}})};Ext.getDbErrLog=function(d,h,a,g){var b=Ext.cookieUtil.getToken();try{h=Ext.Date.parse(h,"YmdHis");a=Ext.Date.parse(a,"YmdHis");if(Ext.isDate(h)&&Ext.isDate(a)){h=Ext.Date.format(h,"Y/m/d H:i:s");a=Ext.Date.format(a,"Y/m/d H:i:s")}else{Ext.Trace("Request break cased by invalid time param!");return}}catch(c){Ext.Trace(c);return}var f=Ext.createWaitWin();Ext.Ajax.request({url:Ext.cmApi,method:"post",jsonData:{task:"getdberrorlog",token:b,start_time:h,end_time:a,dbname:d},success:function(k,m){f.close();var r=Ext.decode(k.responseText);if(!r){return}var e,s,o,q;var p=new Array();if(r.status==="success"){if(Ext.isArray(r.result)){for(var n=0;n<r.result.length;n++){if(Ext.isArray(r.result[n]["logs"])){e=r.result[n]["logs"];for(var l=0;l<e.length;l++){s=e[l];if(Ext.String.trim(s).length>0&&"***"!==(s.substring(0,3))){if(s.toLowerCase().indexOf("time:")===0){o=new Object();o.time=s.substring(6,s.indexOf(" - "));o.type=s.substring(s.indexOf(" - ")+3,s.indexOf(" *** "));if(s.indexOf("*** ERROR CODE = ")>=0){o.code=s.substring(s.indexOf("*** ERROR CODE = ")+17,s.indexOf(", Tran = "));if(s.indexOf(", EID = ")===-1){o.tranid=s.substring(s.indexOf(", Tran = ")+9);o.errid=""}else{o.tranid=s.substring(s.indexOf(", Tran = ")+9,s.indexOf(", ",s.indexOf(", Tran = ")+9));o.errid=s.substring(s.indexOf(", EID = ")+8)}if(l+1<e.length&&e[l+1].toLowerCase().indexOf("time:")!==0){o.msg=e[l+1]}}else{if(l+1<e.length&&e[l+1].toLowerCase().indexOf("time:")!==0){q=e[l+1];l++}else{q=""}o.msg=s.substring(s.indexOf("*** file ")+4)+" : "+q}p.push(o)}else{o=new Object();o.msg=s;p.push(o)}}}}}}if(r.overflow===1){Ext.showWarningWin(I18N_Util.getMsg("msgRecOverflow"),function(){if(g&&Ext.isFunction(g)){g(p)}})}else{if(g&&Ext.isFunction(g)){g(p)}}}else{Ext.showFailureWin(r.note)}},failure:function(e,i){f.close();Ext.showErrorWin(I18N_Util.getMsg("msgErrInServer")+"<br>"+e.responseText)}})};Ext.getBrokerLog=function(g,a,f){var b=Ext.cookieUtil.getToken();try{g=Ext.Date.parse(g,"YmdHis");a=Ext.Date.parse(a,"YmdHis");if(Ext.isDate(g)&&Ext.isDate(a)){g=Ext.Date.format(g,"Y/m/d H:i:s");a=Ext.Date.format(a,"Y/m/d H:i:s")}else{Ext.Trace("Request break cased by invalid time param!");return}}catch(c){Ext.Trace(c);return}var d=Ext.createWaitWin();Ext.Ajax.request({url:Ext.cmApi,method:"post",jsonData:{task:"getbrokerlog",token:b,start_time:g,end_time:a},success:function(e,i){d.close();var h=Ext.decode(e.responseText);if(!h){return}if(h.status==="success"){if(f&&Ext.isFunction(f.success)){f.success(e,i)}}else{Ext.showFailureWin(h.note)}},failure:function(e,h){d.close();Ext.showErrorWin(I18N_Util.getMsg("msgErrInServer")+"<br>"+e.responseText)}})};Ext.storeSharedLog=function(d,b,c){var a=Ext.cookieUtil.getToken();Ext.Ajax.request({url:Ext.cmApi,method:"post",jsonData:{task:"writeprivatedata",token:a,confname:d+".tmp",confdata:b},success:function(e,g){var f=Ext.decode(e.responseText);if(!f){return}if(f.status==="success"){if(Ext.isFunction(c)){c()}}else{if(Ext.checkTokenStatus(f.note)){Ext.showFailureWin(f.note)}}},failure:function(e,f){Ext.showErrorWin(I18N_Util.getMsg("msgErrInServer")+"<br>"+e.responseText)}})};Ext.getTempLog=function(c,b){if(typeof c!=="string"){Ext.Trace("Err: unaccept param!");return}var a=Ext.cookieUtil.getToken();Ext.Ajax.request({url:Ext.cmApi,method:"post",jsonData:{task:"readprivatedata",token:a,confname:c+".tmp"},success:function(d,f){var e=Ext.decode(d.responseText);if(!e){return}if(e.status==="success"){if(b&&Ext.isFunction(b.success)){b.success(d,f)}}else{if(e.note==="open "+c+".tmp failed!"){Ext.showFailureWin(I18N_Util.getMsg("msgFail2GetLog"))}else{Ext.showFailureWin(e.note)}}},failure:function(d,e){Ext.showErrorWin(I18N_Util.getMsg("msgErrInServer")+"<br>"+d.responseText)}})};Ext.isAcceptLogType=function(c,b){var a=false;if(c==="db"){if(b==="addvol"||b==="backup"||b==="err"){a=true}}else{if(c==="broker"){if(b==="start-stop"){a=true}}}return a};Ext.define("cwm.model.AutoAddVolLog",{extend:"Ext.data.Model",fields:[{name:"dbname",type:"string"},{name:"purpose",type:"string"},{name:"page",type:"string"},{name:"volname",type:"string"},{name:"time",type:"string"},{name:"outcome",type:"string"}]});Ext.define("cwm.model.AutoBackupLog",{extend:"Ext.data.Model",fields:[{name:"backupid",type:"string"},{name:"dbname",type:"string"},{name:"error_desc",type:"string"},{name:"error_time",type:"string"}]});Ext.define("cwm.model.AutoStartupLog",{extend:"Ext.data.Model",fields:[{name:"name",type:"string"},{name:"time",type:"string"},{name:"desc",type:"string"}]});Ext.define("cwm.model.BrokerLog",{extend:"Ext.data.Model",fields:[{name:"name",type:"string"},{name:"time",type:"string"},{name:"desc",type:"string"}]});Ext.define("cwm.model.DbErrLog",{extend:"Ext.data.Model",fields:["time","type","code","tranid","errid","msg"]});Ext.define("cwm.widget.LogReportGrid",{extend:"Ext.grid.Panel",alias:"widget.logreportgrid",uses:["Ext.ux.exporter.Exporter"],requires:["Ext.ux.exporter.Button"],enableColumnMove:false,sortableColumns:false,enableColumnHide:false,cls:"infoPanel",width:700,height:350,type:"",logType:"",name:"",start:"",end:"",addDbAddVolCol:function(){var a=this;a.store=Ext.create("Ext.data.Store",{model:"cwm.model.AutoAddVolLog",autoDestroy:true});a.columns=[{text:I18N_Util.getMsg("lblDb"),dataIndex:"dbname"},{text:I18N_Util.getMsg("lblPurpose"),sortable:true,width:60,dataIndex:"purpose"},{text:I18N_Util.getMsg("lblPage"),width:60,dataIndex:"page"},{text:I18N_Util.getMsg("lblVolName"),sortable:true,width:120,dataIndex:"volname"},{text:I18N_Util.getMsg("lblTime"),sortable:true,width:150,dataIndex:"time"},{text:I18N_Util.getMsg("lblDescription"),dataIndex:"outcome",width:200,renderer:function(b){if(!b){return""}else{return b.replace(/<end>/g," ")}}}]},addDbBackupCol:function(){var a=this;a.store=Ext.create("Ext.data.Store",{model:"cwm.model.AutoBackupLog",autoDestroy:true});a.columns=[{text:I18N_Util.getMsg("lblDb"),dataIndex:"dbname"},{text:I18N_Util.getMsg("lblBackupId"),sortable:a.backupId===""?true:false,dataIndex:"backupid"},{text:I18N_Util.getMsg("lblAutoBackupTime"),sortable:true,width:150,dataIndex:"error_time"},{text:I18N_Util.getMsg("lblDescription"),dataIndex:"error_desc",width:200,renderer:function(b){if(!b){return""}else{return b.replace(/<end>/g," ")}}}]},addDbErrCol:function(){var a=this;a.store=Ext.create("Ext.data.Store",{model:"cwm.model.DbErrLog",autoDestroy:true});a.columns=[{text:I18N_Util.getMsg("lblTime"),width:120,dataIndex:"time"},{text:I18N_Util.getMsg("lblErrType"),sortable:true,width:80,dataIndex:"type"},{text:I18N_Util.getMsg("lblErrCode"),width:80,dataIndex:"code"},{text:I18N_Util.getMsg("lblTranId"),sortable:true,width:80,dataIndex:"tranid"},{text:I18N_Util.getMsg("lblErrId"),sortable:true,width:80,dataIndex:"errid"},{text:I18N_Util.getMsg("lblErrMsg"),dataIndex:"msg",width:200,renderer:function(b){if(!b){return""}else{return b.replace(/<end>/g," ")}}}]},addBrokerStartStopCol:function(){var a=this;a.store=Ext.create("Ext.data.Store",{model:"cwm.model.BrokerLog",autoDestroy:true});a.columns=[{text:I18N_Util.getMsg("lblBroker"),sortable:true,dataIndex:"name"},{text:I18N_Util.getMsg("lblTime"),sortable:true,width:150,dataIndex:"time"},{text:I18N_Util.getMsg("lblDescription"),dataIndex:"desc",width:300}]},addDockedItems:function(){var d=this;var b=Ext.cookieUtil.getLastDbmtUserName();var a=true;if(b==="admin"){a=false}var c='<div style="text-align:center; margin: 3px 0;"><a target="_blank" href="http://www.adobe.com/products/flashplayer/" title="'+I18N_Util.getMsg("msgTipInstallFlash")+'">'+I18N_Util.getMsg("btnExport")+"</a></div>";d.addDocked({xtype:"toolbar",style:"background: #F1F1F1; border: 0;",items:[{xtype:"exporterbutton",html:'<p data-qtip="'+I18N_Util.getMsg("msgExport2Excel")+'">'+c+"<p>"},{text:I18N_Util.getMsg("btnShartWithUrl"),tooltip:I18N_Util.getMsg("msgShartWithUrl"),handler:function(){var e=new Array();var f;if(Ext.isArray(d.data)){for(var g=0;g<d.data.length;g++){f=Ext.encode(d.data[g]);e.push(f)}}Ext.storeSharedLog(d.tempId,e);d.shareUrlWin(d.tempId)}},{text:I18N_Util.getMsg("btnSend2Mail"),hidden:a,handler:function(){d.addSendLogMailWin()}}]})},getDataFromFile:function(a){var b=this;Ext.getTempLog(a,{success:function(c,f){var j=Ext.decode(c.responseText);try{var k=j.confdata;var h=new Array();for(var d=0;d<k.length;d++){h.push(Ext.decode(k[d]))}b.getStore().loadData(h)}catch(g){Ext.Trace(g)}}})},getDataFromSys:function(b,d,a){if(typeof b!=="string"||typeof d!=="string"||typeof a!=="string"){Ext.Trace("Err: invalid params!");return}var c=this;if(c.type==="db"){c.tempId=c.type+"_"+c.logType+"_"+d+"_"+a+"_"+b;if(c.logType==="err"){c.getDbErrLog(b,d,a)}else{if(c.logType==="backup"){c.getDbBackupLog(b,d,a)}else{if(c.logType==="addvol"){c.getDbAddVolLog(b,d,a)}}}}else{if(c.type==="broker"){c.tempId=c.type+"_"+c.logType+"_"+d+"_"+a;if(c.logType==="start-stop"){c.getBrokerStartStopLog(b,d,a)}}}},getDbAddVolLog:function(b,d,a){var c=this;Ext.getAutoAddVolLog(b,function(e){c.getStore().loadData(e);c.data=e;c.refreshDockedItem()},d,a)},getDbBackupLog:function(b,d,a){var c=this;Ext.getAutoBackupDbErrLog({success:function(e,j){var g=Ext.decode(e.responseText);if(g&&g.status==="success"){var h=Ext.isArray(g.error);var k=new Array();for(var f=0;h&&f<g.error.length;f++){if(g.error[f]["dbname"]===b){k.push(g.error[f])}}c.getStore().loadData(k);c.data=k;c.refreshDockedItem()}}},d,a)},getDbErrLog:function(b,d,a){var c=this;Ext.getDbErrLog(b,d,a,function(e){c.getStore().loadData(e);c.data=e;c.refreshDockedItem()})},getBrokerStartStopLog:function(b,d,a){var c=this;Ext.getBrokerLog(d,a,{success:function(f,h){var l=Ext.decode(f.responseText);var k=new Array();var e,j;if(Ext.isArray(l.log)){for(var g=0;g<l.log.length;g++){e=new Object();j=l.log[g].split(" ");if(j.length===3){e.name=I18N_Util.getMsg("lblAllBroker");e.time=j[0]+" "+j[1];e.desc=j[2];k.push(e)}else{if(j.length===4){e.name=j[2];e.time=j[0]+" "+j[1];e.desc=j[3];k.push(e)}}}if(l.overflow===1){Ext.showWarningWin(I18N_Util.getMsg("msgRecOverflow"),function(){c.getStore().loadData(k);c.data=k;c.refreshDockedItem()})}else{c.getStore().loadData(k);c.data=k;c.refreshDockedItem()}}}})},shareUrlWin:function(){var b=this;var a=Ext.getAbsoluteUrl("logs.html?id="+b.tempId);if(typeof Ext.cwm.lang==="string"&&Ext.cwm.lang!==""&&Ext.cwm.lang!=="en"){a+="&lang="+Ext.cwm.lang}var c=Ext.create("Ext.window.Window",{autoShow:true,bodyStyle:"border:0;background:transparent;",style:"border:0;background:#F3F3F3;",title:I18N_Util.getMsg("titleShareUrl"),bodyPadding:10,modal:true,resizable:false,items:[{xtype:"displayfield",labelWidth:250,fieldLabel:I18N_Util.getMsg("lblSharedUrlPath")},{xtype:"textarea",name:"url",itemId:"URL",labelWidth:60,width:250,value:a,readOnly:true}],buttons:[{text:I18N_Util.getMsg("btnOK"),handler:function(d){c.close()}},{text:I18N_Util.getMsg("btnCancel"),handler:function(d){c.close()}}]})},addSendLogMailWin:function(){var a=this;var b=Ext.create("cwm.widget.SendLogToMailWin",{title:I18N_Util.getMsg("titleSendLogToMail")});b.callback={sendMail:function(c){if(typeof c!=="object"||c===null){return}c.msg_body=Ext.getMailBody(a.type,a.logType,a.name,a.start,a.end,a.data);c.msg_header="CUBRID Log Report";Ext.sendMail(c,{success:function(d,f){var e=Ext.decode(d.responseText);if(Ext.isArray(e.response)&&e.response[0]){if(e.response[0].message.indexOf("2")===0){Ext.showSuccessWin(I18N_Util.getMsg("msgSucSendMail"),function(){b.close()})}else{Ext.showErrorWin(I18N_Util.getMsg("msgErrSendMail")+"<br><br>"+I18N_Util.getMsg("lblErrMsg")+":<br>"+e.response[0].message)}}}})}}},refreshDockedItem:function(){var b=this;if(b.data.length<1){var a=b.down("exporterbutton");if(a){a.hide()}}},initComponent:function(){var a=this;if(a.type==="db"){if(a.logType==="addvol"){a.addDbAddVolCol()}else{if(a.logType==="backup"){a.addDbBackupCol()}else{if(a.logType==="err"){a.addDbErrCol()}}}}else{if(a.type==="broker"){if(a.logType==="start-stop"){a.addBrokerStartStopCol()}}}a.callParent(arguments);if(a.needDocked!==false){a.addDockedItems()}a.data=new Array();a.tempId=""}});Ext.define("cwm.controller.Log",{extend:"Ext.app.Controller",models:["AutoBackupLog","AutoStartupLog","AutoAddVolLog","BrokerLog","DbErrLog"],init:function(){this.control({})}});Ext.application({name:"cwm",appFolder:"app",controllers:["Log"],requires:["cwm.widget.LogReportGrid","cwm.common.CookieUtil"],launch:function(){var c=Ext.cwm.curUrl.params["id"];var h=Ext.cwm.curUrl.params["query"];h="false";var a;var i,j,b,d,e;if(typeof c==="string"){i=c.substring(0,c.indexOf("_"));a=c.substring(c.indexOf("_")+1,c.length);if(i==="broker"){b="";j=a.substring(0,a.indexOf("_"));a=a.substring(a.indexOf("_")+1,a.length);d=a.substring(0,a.indexOf("_"));e=a.substring(a.indexOf("_")+1,a.length)}else{j=a.substring(0,a.indexOf("_"));a=a.substring(a.indexOf("_")+1,a.length);d=a.substring(0,a.indexOf("_"));a=a.substring(a.indexOf("_")+1,a.length);e=a.substring(0,a.indexOf("_"));b=a.substring(a.indexOf("_")+1,a.length)}}else{i=Ext.cwm.curUrl.params["type"];j=Ext.cwm.curUrl.params["logtype"];if(typeof j==="undefined"){j="start-stop"}b=Ext.cwm.curUrl.params["name"];d=Ext.cwm.curUrl.params["start"];e=Ext.cwm.curUrl.params["end"]}var f={xtype:"logreportgrid",needDocked:false,title:I18N_Util.getMsg("titleCWMLogReport"),type:i,logType:j,name:b,start:d,end:e,listeners:{afterrender:function(l){if(typeof c==="string"){l.getDataFromFile(c)}else{if(h==="true"){var k=typeof Ext.cwm.curUrl.params["name"]==="string"?Ext.cwm.curUrl.params["name"]:"";l.getDataFromSys(k,Ext.cwm.curUrl.params["start"],Ext.cwm.curUrl.params["end"])}}}}};if((typeof c!=="string"&&h!=="true")||Ext.isAcceptLogType(i,j)!==true){f={xtype:"panel",width:700,cls:"infoPanel",title:I18N_Util.getMsg("titleCWMLogReport"),items:[{html:I18N_Util.getMsg("msgFail2GetLog"),cls:"dbauth_info",bodyCls:"body"}]}}this.viewport=Ext.create("Ext.container.Viewport",{style:"margin: 20px 0 0 50px; background: none repeat scroll 0 0 #FFFFFF;",items:[f]});var g=function(){Ext.get("loading").remove()};Ext.defer(g,0)}});