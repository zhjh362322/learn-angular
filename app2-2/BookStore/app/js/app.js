(function(angular) {
	"user strict"
    var bookStoreApp = angular.module('bookStoreApp', ['ngRoute', 'ngAnimate', 'bookStoreCtrls']);

    bookStoreApp.config(function($routeProvider) {
        $routeProvider.when('/hello', {
            templateUrl: 'templs/hello.html',
            controller: 'HelloController'
        }).when('/bookList', {
            templateUrl: 'templs/bookList.html',
            controller: 'BookListController'
        }).otherwise({
            redirectTo: '/hello'
        })
    })
})(window.angular)
