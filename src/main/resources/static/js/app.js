var appCliente = angular.module("appCliente", []); 

appCliente.controller("indexController", function($scope, $http){
	
	$scope.clientes=[]
	$scope.cliente={};
	
	$scope.carregarClientes = function(){
		$http({
			  method: 'GET',
			  url: 'http://localhost:8080/clientes'
			}).then(function successCallback(response) {
				$scope.clientes = response.data;
				
			  }, function errorCallback(response) {
				 console.log(response.data);
				 console.log(response.status);
		});
	};
	
	$scope.salvarClientes = function(){
		$http({
			  method: 'POST',
			  url: 'http://localhost:8080/clientes',
			  data: $scope.cliente
			}).then(function successCallback(response) {
				$scope.clientes.push(response.data);
				
			  }, function errorCallback(response) {
				 console.log(response.data);
				 console.log(response.status);
		});
	};
	
	$scope.carregarClientes();
});