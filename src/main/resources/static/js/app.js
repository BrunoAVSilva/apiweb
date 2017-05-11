var appCliente = angular.module("appCliente", ['ngRoute']);

appCliente.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when("/clientes", {templateUrl:'views/cliente.html', controller:'clienteController'})
		.when("/cidades", {templateUrl:'views/cidade.html', controller:'cidadeController'})
		.when("/estados", {templateUrl:'views/estado.html', controller:'estadoController'})
		.otherwise({redirectTo:'/'});
	
	$locationProvider.html5Mode(true);
});