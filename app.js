(function() {
	var app = angular.module("app", []);
	app.controller('helloController', function() {
		this.helloWorld = "Hello World!!";
	});
	app.controller('directives', function() {
		this.clients = [
		{name: "marcelo", price: 2,can:true, image:"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p160x160/1604493_724451890901306_1963322603_n.jpg?oh=cadfebcdd439502bf6b68554b8046186&oe=54E8C039&__gda__=1424748460_b97f07384bb7faf1b13cfb9145eb9074"}, 
		{name: "aida", price:2.5, can:false, image: "https://scontent-a-mia.xx.fbcdn.net/hprofile-xfa1/v/l/t1.0-1/c0.14.179.179/s160x160/10616263_546438025489098_2298858965150259080_n.jpg?oh=41d14af21086ca2fb3e0462a2b5461aa&oe=54AD06B8"}
		];
	});
	app.controller('ReviewController', function() {
		this.review = {};
		this.addReview = function(product) {
			product.reviews.push(this.review);
		};
	})
})();