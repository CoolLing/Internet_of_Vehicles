define(function(require, exports, module) {

	mui.init();	

	var self = exports;

	self.createInnerList = function() {
		mui.plusReady(function() {						
			plus.webview.currentWebview().append(plus.webview.create('ser_addcarMethod-inner.html', 'addcarMethod-inner', {
				top: "44px", 
				bottom: "0px"
			})); 						
		}); 
	};
	self.createInnerList();

});