'use strict';

var navigationControllers = angular.module('navigationControllers', []);

navigationControllers.controller('EmptyController', [ '$scope', '$routeParams',
		function($scope, $routeParams) {
			$scope.tutorialId = $routeParams.tutorialId;
			$scope.twelve=[1,2,3,4,5,6,7,8,9,10,11,12];
			$scope.six=[1,2,3,4,5,6];
			$scope.four=[1,2,3];
			$scope.three=[1,2,3];
		} ]);

navigationControllers.controller('GridSystemController', [ '$scope', '$routeParams',
  		function($scope, $routeParams) {
  			$scope.tutorialId = $routeParams.tutorialId;
  			

  		} ]);
