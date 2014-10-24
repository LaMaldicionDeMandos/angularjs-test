(function() {
	var app = angular.module("app", []);
	app.controller('helloController', function() {
		this.helloWorld = "Hello World!!";
	});
	app.controller('directives', function() {
		this.clients = [{name: "marcelo", price: 2,can:true}, {name: "aida", price:2.5, can:false}];
	})
})();