'use strict';

angular.module('ideaBoardApp', ['duScroll'])
    .controller('PlotIdeaCtrl', function ($scope, $http, $document, $location) {

        $scope.topIdeaLimit = 8;
        $scope.ideasearch = '';
        $scope.ideas = [];


        $http.get('static_json/suggestions.json').success(function (data) {
            $scope.ideas = data;
            $scope.sidea = $scope.ideas[0];

        });



        $scope.showIdea = function (sidea) {
            $scope.sidea = sidea;
        };


        $scope.searchChanged = function (newvalue) {
            console.debug($scope.ideasearch);
            $scope.sidea = $filter('filter')($scope.ideas, newvalue)[0];
        };

        $scope.showPart = function (position) {
            var someElement = angular.element(document.getElementById(position));
            $document.scrollToElement(someElement, 0, 500);
        }



        setTimeout(function () {
            var ideaId = $location.search()['id'];
            var ideaObj = $scope.ideas.filter(function(idea) {return idea['id']==ideaId;})[0];
            if (ideaObj) {
                $scope.showPart('ideatitle')
                $scope.sidea = ideaObj;
                //$scope.ideasearch = ideaObj.title;
                $scope.$apply();
            }
        }, 1000);


    });