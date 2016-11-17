angular.module('app', [])
	.controller('GreetController', ['$rootScope', '$scope', function($rootScope, $scope){
		$rootScope.department = 'nana';
		$scope.name = 'baojian';
	}])
	.controller('ListController', ['$scope', function($scope){
		$scope.names = ['bn', 'ln', 'an'];
	}])