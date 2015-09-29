var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngAnimate']);

portfolioApp.directive('myScroll', function($rootScope, $anchorScroll) {
    return function(scope, element) {
        $rootScope.$on('$routeChangeStart', function() {
           $anchorScroll(); 
        });
    };
});

portfolioApp.controller('MainCtrl', function($scope, $location, $routeParams) {
    $scope.isMain = function(route) {
        if ($location.path()=='/') {
            return true;
        }
        return false;
    }
    $scope.isActive = function(route) {
        return $location.path().indexOf(route) > -1;
    }
});

portfolioApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl : 'views/main.html'
    })

    .when('/resume', {
        templateUrl : 'views/resume.html',
    })
    
    .when('/spoonrocket', {
        templateUrl: 'views/spoonrocket.html',
    })
    .when('/sb2', {
        templateUrl: 'views/sb2.html',
    })
    .when('/kingscup', {
        templateUrl: 'views/kingscup.html',
    })
});
