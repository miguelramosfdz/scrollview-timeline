'use strict';

angular.module('scrollviewTestApp')
  .controller('ScrollCtrl', function ($scope, $timeline) {

    $scope.distance = function(i) {
      return $scope.scrollViewDistance(i, 100);
    };

    $scope.scale = $timeline([
      [-1, [0.5, 0.5]],
      [0, [1, 1]],
      [1, [0.5, 0.5]],
    ])

  });
