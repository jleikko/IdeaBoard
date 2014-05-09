'use strict';

angular.module('ideaBoardApp')
  .controller('PlotIdeaCtrl', function ($scope, $http) {

        $http.get('static_json/suggestions.json').success(function(data) {
            $scope.ideas = data;
            $scope.sidea = $scope.ideas[0];
        });

        $scope.topIdeaLimit = 7;

        $scope.showIdea = function(sidea) {
            $scope.sidea = sidea;
        }
  });
