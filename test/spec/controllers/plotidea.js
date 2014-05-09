'use strict';

describe('Controller: PlotIdeaCtrl', function () {

  // load the controller's module
  beforeEach(module('ideaBoardApp'));

  var PlotIdeaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlotIdeaCtrl = $controller('PlotIdeaCtrl', {
      $scope: scope
    });
  }));

//  it('should attach a list of awesomeThings to the scope', function () {
//    expect(scope.awesomeThings.length).toBe(3);
//  });
});
