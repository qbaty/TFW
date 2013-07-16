/*
** URLrouter by qbatyqi 2013-7-12
** FOR #hash to virtual url
** contain event firing
*/
var URLrouter = function(){
  var urlRule = urlRule ? urlRule : '#(w+)\/?(w+)';
	var urlMap = urlMap || {};
	var onUrlChange = onUrlChange || function(){};

	var eventHandler = function(e){
		var hash = location.hash;
		var matched = hash.match(new RegExp(urlRule));
		if(matched){
			onUrlChange(matched[1], matched[2]);
		}
	};

	window.addEventListen('hashchange', eventHandler);
};
