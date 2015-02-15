'use strict';

/**
 * @ngdoc function
 * @name ngJhacSampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngJhacSampleApp
 */
angular.module('ngJhacSampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
