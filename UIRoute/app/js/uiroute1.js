(function(angular){
	angular.module('app', ['ui.router'])
	.config(['$stateProvider','$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
		$urlRouterProvider.otherwise('/s1');
		// state1与ui-sref='stateName'中的值对应
		$stateProvider.state('state1', {
			// url地址栏中显示和被访问的值
			url: '/s1',
			templateUrl: 'tpls/state1.html'
		}).state('state1.list', {
			url: '/list',
			templateUrl: 'tpls/state1.list.html'
		}).state('state2', {
			url: '/s2',
			templateUrl: 'tpls/state2.html'
		}).state('state2.list', {
			url: '/list',
			templateUrl: 'tpls/state2.list.html'
		})
		// 可以在url中不显示 '#'
		// $locationProvider.html5Mode(true)
	}])
})(window.angular)