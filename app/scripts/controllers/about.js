'use strict';

/**
 * @ngdoc function
 * @name ngJhacSampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngJhacSampleApp
 */
angular.module('ngJhacSampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
