(function(angular){
	"user strict";
	var app = angular.module('FormApp', []);
	app.controller('FormController', ['$scope', function($scope){
		$scope.user = {
			email: 'zhjh362322@163.com',
			pwd: '123456',
			login: true
		};
		$scope.getUser = function(){
			console.log($scope.user)
		};
		$scope.setUser = function(){
			$scope.user = {
				email: '252532242@qq.com',
				pwd: '123456',
				login: false
			}
		};
		$scope.resetUser = function(){
			$scope.user = {
				email: 'zhjh362322@163.com',
				pwd: '123456',
				login: true
			}
		};
		$scope.theme = "primary";
		$scope.changeTheme = function(){
			$scope.theme = "success";
		}
	}])
})(window.angular)