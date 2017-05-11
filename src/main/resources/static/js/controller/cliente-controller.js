appCliente.controller("clienteController", function($scope, $http){
	
	$scope.clientes=[]
	$scope.cliente={};
	
	carregarClientes = function(){
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
				//$scope.clientes.push(response.data);
				carregarClientes();
				$scope.cancelarAlteracaoClientes();
				
			  }, function errorCallback(response) {
				 console.log(response.data);
				 console.log(response.status);
		});
	};
	
	$scope.excluirCliente = function(cliente){
		$http({
			  method: 'DELETE',
			  url: 'http://localhost:8080/clientes/'+ cliente.id
			}).then(function successCallback(response) {
				pos = 	$scope.clientes.indexOf(cliente);
				$scope.clientes.splice(pos, 1);
				
			  }, function errorCallback(response) {
				 console.log(response.data);
				 console.log(response.status);
		});
	};
	
	$scope.alterarCliente = function(cliente){
		$scope.cliente = angular.copy(cliente);
	};
	
	$scope.cancelarAlteracaoClientes = function(){
		$scope.cliente={};
	};
	
	carregarClientes();
});