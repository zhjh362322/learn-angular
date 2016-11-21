(function(angular) {
	"user strict";
    var bookStoreCtrls = angular.module('bookStoreCtrls', []);

    bookStoreCtrls.controller('HelloController', function($scope) {
        $scope.love = 'love';
        $scope.pageclass = "hello";
    });

    bookStoreCtrls.controller('BookListController', function($scope) {
        $scope.bookList = [{
            title: 'HTML',
            name: 'HTML5实战'
        }, {
            title: 'JS',
            name: 'javascript权威指南'
        }, {
            title: 'angularJS',
            name: 'AngularJS从做项目开始'
        }];
        $scope.pageclass = "list";
    });
})(window.angular)
