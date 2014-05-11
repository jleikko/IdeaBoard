'use strict';

angular
  .module('ideaBoardApp', [
    'ngRoute',
    'ngResource'
  ]);
/*
ideaBoardApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/ideas/:ideaId', {
                templateUrl: 'views/main.html',
                controller: 'IdeaBoardCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
*/