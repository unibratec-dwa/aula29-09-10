var APP = APP || {};
APP.OnlineStatus = {
	_nome: "Meu WebAPP",

	setUp: function() {
		this.bindEvents();
		this.statusHandler();
	},

	bindEvents: function() {
		var statusHandler = APP.delegate(this, this.statusHandler);
		$(window).on("online offline", statusHandler);
	},

	statusHandler: function(){

		if(navigator.onLine === true) {
			$(document.body).removeClass('offline');
		} else if(navigator.onLine === false) {
			$(document.body).addClass('offline');
		}
	}
}