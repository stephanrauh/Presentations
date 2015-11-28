'use strict';

var navigationControllers = angular.module('navigationControllers', []);

navigationControllers.controller('EmptyController', [ '$scope', '$routeParams',
		function($scope, $routeParams) {
			$scope.tutorialId = $routeParams.tutorialId;

		} ]);
