<!--
var lpMTagConfig = {
 "lpServer" : "server.lon.liveperson.net",
 "lpNumber" : "41683706",
 "lpProtocol" : (document.location.toString().indexOf("https:")==0) ? "https" : "http"
}
function lpAddMonitorTag(src){if(typeof(src)=="undefined"||typeof(src)=="object"){src=lpMTagConfig.lpMTagSrc?lpMTagConfig.lpMTagSrc:"/hcp/html/mTag.js";}if(src.indexOf("http")!=0){src=lpMTagConfig.lpProtocol+"://"+lpMTagConfig.lpServer+src+"?site="+lpMTagConfig.lpNumber;}else{if(src.indexOf("site=")<0){if(src.indexOf("?")<0)src=src+"?";else src=src+"&";src=src+"site="+lpMTagConfig.lpNumber;}};var s=document.createElement("script");s.setAttribute("type","text/javascript");s.setAttribute("charset","iso-8859-1");s.setAttribute("src",src);document.getElementsByTagName("head").item(0).appendChild(s);}
if (window.attachEvent) window.attachEvent("onload",lpAddMonitorTag);
else window.addEventListener("load",lpAddMonitorTag,false);
lpMTagConfig.db1 = new Object();
lpMTagConfig.db1.busyAction = function (objName) {
 objRef = eval(objName);
 var chatWinURL = objRef.getActionURL("Busy");
 chatWinURL = chatWinURL.replace(/forceOffline/,"SESSIONVAR%21BusyClickOverride");
 window.open(chatWinURL,'Chat'+lpMTagConfig.lpNumber,'width=472,height=320,status=0,resizable=0,menubar=no,scrollbars=no,location=no');
};
lpMTagConfig.db1.offlineAction = function (objName) {
 objRef = eval(objName);
 var chatWinURL = objRef.getActionURL("Offline");
 window.open(chatWinURL,'chat'+lpMTagConfig.lpNumber,'width=472,height=320,status=0,resizable=0,menubar=no,scrollbars=no,location=no');
};
if (typeof(lpMTagConfig.pageVar)=="undefined") {lpMTagConfig.pageVar = new Array();}
if (typeof(lpMTagConfig.sessionVar)=="undefined") {lpMTagConfig.sessionVar = new Array();}
if (typeof(lpMTagConfig.visitorVar)=="undefined") {lpMTagConfig.visitorVar = new Array();}
if (typeof(lpMTagConfig.onLoadCode)=="undefined") {lpMTagConfig.onLoadCode = new Array();}
if(typeof(lpMTagConfig.dynButton)=="undefined") {lpMTagConfig.dynButton=new Array();}
function lpAddVars(scope,name,value) {
 if (name.indexOf('OrderTotal')!=-1 && (value=='' || value==0)) {   // pass 0 value to all but OrderTotal
 return;
 }
	
 value=lpTrimSpaces(value.toString());
 switch (scope){
  case "page": lpMTagConfig.pageVar[lpMTagConfig.pageVar.length] = escape(name)+"="+escape(value); break;
  case "session": lpMTagConfig.sessionVar[lpMTagConfig.sessionVar.length] = escape(name)+"="+escape(value); break;
  case "visitor": lpMTagConfig.visitorVar[lpMTagConfig.visitorVar.length] = escape(name)+"="+escape(value); break;
 }	
}
function onloadEMT() { 
 var LPcookieLengthTest=document.cookie;
 if (lpMTag.lpBrowser == "IE" && LPcookieLengthTest.length>1900){
  lpMTagConfig.sendCookies=false;
 }
}
function lpTrimSpaces(stringToTrim) {
 return stringToTrim.replace(/^\s+|\s+$/g,"");
}
function lpSendData(varscope,varname,varvalue){
 if(typeof(lpMTag)!="undefined" && typeof(lpMTag.lpSendData)!="undefined") {
  lpMTag.lpSendData(varscope.toUpperCase() +"VAR!"+ varname + "=" + varvalue, true);
 }
}
try {
 if (typeof(lpUnit)=="undefined") {var lpUnit="science-direct-english";}
 if(typeof(lpAddVars)!="undefined") {lpAddVars("page","unit",lpUnit);}
 lpMTagConfig.defaultInvite = "chat-"+lpUnit;
}
catch(e){}
lpMTagConfig.onLoadCode[lpMTagConfig.onLoadCode.length] = onloadEMT;
if(typeof(lpMTagConfig.dynButton)!="undefined") {
 lpMTagConfig.dynButton[lpMTagConfig.dynButton.length] = {"name":"chat-"+lpUnit,"pid":"ChatHeader", 'ovr':'lpMTagConfig.db1'};
}
if(typeof(lpMTagConfig.dynButton)!="undefined") {
 lpMTagConfig.dynButton[lpMTagConfig.dynButton.length] = {"name":"chat-"+lpUnit+"-1","pid":"ChatFooter", 'ovr':'lpMTagConfig.db1'};
}
//-->
