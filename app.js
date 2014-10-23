(function() {
	var app = angular.module("app", []);
	app.controller('helloController', function() {
		this.helloWorld = "Hello World!!";
	});
	app.controller('directives', function() {
		this.client = {name: "marcelo", can:true};
		this.customer = {name: "aida", can:false};
	})
})();