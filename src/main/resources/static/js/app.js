var appCliente = angular.module("appCliente", ['ngRoute']);

appCliente.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when("/clientes", {templateUrl:'views/cliente.html', controller:'clienteController'})
		.when("/clientes/:clienteId", {templateUrl:'views/cliente-detalhe.html', controller:'clienteDetalheController'})
		.when("/cidades", {templateUrl:'views/cidade.html', controller:'cidadeController'})
		.when("/estados", {templateUrl:'views/estado.html', controller:'estadoController'})
		.otherwise({redirectTo:'/'});
	
	$locationProvider.html5Mode(true);
});