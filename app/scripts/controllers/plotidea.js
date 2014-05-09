'use strict';

angular.module('ideaBoardApp')
    .controller('PlotIdeaCtrl', function ($scope, $http, $filter) {

        $scope.topIdeaLimit = 7;
        $scope.ideasearch = '';
        $scope.ideas = [];



        $http.get('static_json/suggestions.json').success(function (data) {
            $scope.ideas = data;
            $scope.sidea = $scope.ideas[0];

        });



        $scope.showIdea = function (sidea) {
            $scope.sidea = sidea;
        };


        $scope.searchChange = function () {
            $scope.sidea = $filter('filter')($scope.ideas, $scope.ideasearch)[0];
        };
    });
