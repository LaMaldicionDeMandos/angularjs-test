(function() {
	var app = angular.module("hello", []);
	app.controller('helloController', function() {
		this.helloWorld = "Hello World!!";
	});
})();