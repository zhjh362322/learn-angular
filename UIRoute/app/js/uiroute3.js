(function(angular){
	var rt = angular.module('app', ['ui.router']);
	rt.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/index');
		$stateProvider.state('index', {
			url: '/index',
			views: {
				'': {
					templateUrl: 'tpls3/index.html'
				},
				'topbar@index': {
					templateUrl: 'tpls3/topbar.html'
				},
				'main@index': {
					templateUrl: 'tpls3/home.html'
				}
			}
		}).state('index.manage', {
			url: '/mg',
			views: {
				'main@index': {
					templateUrl: 'tpls3/mg.html',
					controller: function($scope, $state){
						$scope.addUser = function(){
							$state.go('index.manage.add');
						}
					}
				}
			}
		}).state('index.manage.add', {
			url: '/add',
			templateUrl: 'tpls3/add.html'
		})
		.state('index.manage.highusers', {
			url: '/high',
			templateUrl: 'tpls3/high.html',
			controller: function($scope){
				$scope.highList = [
					{name: 'baojian', age: 29, show: 'aaaaa'},
					{name: 'baojian', age: 29, show: 'bbbbb'},
					{name: 'baojian', age: 29, show: 'ccccc'}
				]
			}
		}).state('index.manage.normalusers', {
			url: '/normal',
			template: 'normal'
		}).state('index.manage.lowerusers', {
			url: '/lower',
			template: 'lower'
		})

		.state('index.rights', {
			url: '/rts',
			views: {
				'main@index': {
					template: '<h1>rights</h1>'
				}
			}
		}).state('index.report', {
			url: '/rts',
			views: {
				'main@index': {
					template: '<h1>report</h1>'
				}
			}
		}).state('index.syssetting', {
			url: '/rts',
			views: {
				'main@index': {
					template: '<h1>syssetting</h1>'
				}
			}
		})
	})


})(window.angular)