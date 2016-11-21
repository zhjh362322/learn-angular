(function(angular){
	angular.module('app', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise('/hm');
			// Home首页，状态为home时进入该页面
			$stateProvider.state('home', {
				// 地址栏显示和访问地址
				url: '/hm',
				// 页面中的多个ui-view对应的模版
				views: {
					'header': {
						templateUrl: 'tpls2/header.html'
					},
					'body': {
						templateUrl: 'tpls2/body.html'
					}
				}
			})
			// 状态home.list为home下的子状态.list被激活
			.state('home.list', {
				url: '/list',
				templateUrl: 'tpls2/list.html',
				controller: function($scope){
					$scope.name = ['nana', 'baojian']
				}
			}).state('home.ppp', {
				url: '/ppp',
				template: '<h4>ppp</h4>'
			})
			// about状态
			.state('about', {
				url: '/ab',
				views: {
					'header': {
						templateUrl: 'tpls2/header.html'
					},
					'body': {
						templateUrl: 'tpls2/about.html'
					},
					// about状态锁对应的页面中包含的其他ui-view要展示的内容
					'one@about': {
						template: '<h1>one</h1>'
					},
					'two@about': {
						templateUrl: 'tpls2/tbDate.html',
						controller: function($scope){
							$scope.tb = [
								{'name':'nana','price':'finite'},
								{'name':'bj','price':'nana'}
							]
						}
					}
				}
			})
		})
})(window.angular)