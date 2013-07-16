/*
** listener by qbatyqi 2013-7-12
** contain event speak
** contain event listen
*/
var Listener = {
  eventMap : {},

	speak : function(target, event, data){
		var L = Listener;
		var callbacks;

		if(!L.eventMap[target]) return;
		if(!L.eventMap[target][event]) return;

		callbacks = L.eventMap[target][event];
		for(var i = 0; i < callbacks.length; i++){
			callbacks[i](data);
		}
	},

	listen : function(target, event, callback){
		var L = Listener;

		if(!L.eventMap[target]) 
			L.eventMap[target] = {};
			
		if(!L.eventMap[target][event]) 
			L.eventMap[target][event] = [];

		L.eventMap[target][event].push(callback);
	},

	detele : function(target, event, callback){
		var L = Listener;
		var callbacks, index;

		if(!L.eventMap[target]) return;
		if(!L.eventMap[target][event]) return;

		callbacks = L.eventMap[target][event];
		index = callbacks.indexOf(callback);

		if(index != -1){
			callbacks = callbacks.splice(index, 1);
		}
	}
};
