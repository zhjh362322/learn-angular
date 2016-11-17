(function(angular){
	"user strict";
	angular.module('myApp', [])
        .controller('ParentController', function($scope) {
        	$scope.count = 0;
        	$scope.$on('p-count', function(d, data){
        		$scope.count ++;
        	})
        })
        .controller('CurentController', function($scope) {
        	$scope.count = 0;
        	$scope.emit = function(){
        		$scope.count ++;
        		$scope.$emit('p-count', $scope.count);
        	}
        	$scope.broadcast = function(){
        		$scope.count = $scope.count + 1;
        		$scope.$broadcast('count');
        	}
        })
        .controller('ChildController', function($scope){
        	$scope.count = 0;
        	$scope.$on('count', function(d,data){
        		$scope.count ++
        	})
        })
        .controller('BorController', function($scope) {
        	$scope.count = 0;
        	$scope.$on('p-count', function(data){
        		console.log(data);
        	})
        	$scope.$on('c-count', function(data){
        		console.log(d);
        	})
        })
})(window.angular)
