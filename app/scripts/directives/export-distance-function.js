'use strict';

angular.module('scrollviewTestApp')
  .directive('exportDistanceFunction', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
