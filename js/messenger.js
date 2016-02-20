/*! MessengerJS v2.0 跨文档通信解决方案 | https://github.com/biqing/MessengerJS/ */
window.Messenger=function(){function c(a,b){var c="";if(arguments.length<2?c="target error - target and name are both requied":"object"!=typeof a?c="target error - target itself must be window object":"string"!=typeof b&&(c="target error - target name must be string type"),c)throw new Error(c);this.target=a,this.name=b}function d(b,c){this.targets={},this.name=b,this.listenFunc=[],a=c||a,"string"!=typeof a&&(a=a.toString()),this.initListen()}var a="[PROJECT_NAME]",b="postMessage"in window;return c.prototype.send=b?function(b){this.target.postMessage(a+b,"*")}:function(b){var c=window.navigator[a+this.name];if("function"!=typeof c)throw new Error("target callback function is not defined");c(a+b,window)},d.prototype.addTarget=function(a,b){var d=new c(a,b);this.targets[b]=d},d.prototype.initListen=function(){var c=this,d=function(b){"object"==typeof b&&b.data&&(b=b.data),b=b.slice(a.length);for(var d=0;d<c.listenFunc.length;d++)c.listenFunc[d](b)};b?"addEventListener"in document?window.addEventListener("message",d,!1):"attachEvent"in document&&window.attachEvent("onmessage",d):window.navigator[a+this.name]=d},d.prototype.listen=function(a){this.listenFunc.push(a)},d.prototype.clear=function(){this.listenFunc=[]},d.prototype.send=function(a){var c,b=this.targets;for(c in b)b.hasOwnProperty(c)&&b[c].send(a)},d}();