(function() {
	var app = angular.module("app", []);
	app.controller('helloController', function() {
		this.helloWorld = "Hello World!!";
	});
	app.controller('directives', function() {
		this.clients = [{name: "marcelo", can:true}, {name: "aida", can:false}];
	})
})();